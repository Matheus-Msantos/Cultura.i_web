<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;


class UserController extends Controller
{

    public function index()
    {
        return view('user.index')->with('users', User::all());
    }


    public function create()
    {
        return view('user.create');
    }

    public function show()
    {
        return response()->json(Auth()->user());
    }


    function store(Request $request){
        $request->validate([
            'email' => 'required|email|unique:users',
            'name'=> 'required|max:255',
            'password' => 'required|min:8',
        ]);

        if($request->image) {
            $image = $request->file('image')->store('/public/user');
            $image = str_replace('public/', 'storage/', $image);
        }else {
            $image  = "storage/imageDefault.jpg";
        }

        if($request->isAdmin) {
            $isAdmin = $request->isAdmin;
        }else {
            $isAdmin = 0;
        }

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => $request->password,
            'image' => $image,
            'isAdmin' => $isAdmin
        ]);

        return redirect(Route('user.index'));
    }


    function storeApi(Request $request){
        $request->validate([
            'email' => 'required|email|unique:users',
            'name'=> 'required|max:255',
            'password' => 'required|min:8',
        ]);

        if($request->image) {
            $image = $request->file('image')->store('/public/user');
            $image = str_replace('public/', 'storage/', $image);
        }else {
            $image  = "storage/imageDefault.jpg";
        }

        if($request->isAdmin) {
            $isAdmin = $request->isAdmin;
        }else {
            $isAdmin = 0;
        }

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'image' => $image,
            'isAdmin' => $isAdmin
        ]);

        return response()->json( [
            'user'=> $user,
            'token'=> $user->createToken ($request->email)-> plainTextToken

        ]);
    }

    public function edit(User $user)
    {
        return view('user.edit')->with('user', $user);
    }


    public function update(Request $request, User $user){
        if($request->image) {
            $image = $request->file('image')->store('/public/product');
            $image = str_replace('public/', 'storage/', $image);
        }else {
            $image  = "storage/imageDefault.jpg";
        }

        $user->update([
            "isAdmin" => $request->isAdmin,
            "image" => $image
        ]);
        return redirect(Route('user.index'));
    }


    function updateApi (User $user, Request $request){
        if($request->image) {
            $image = $request->file('image')->store('/public/product');
            $image = str_replace('public/', 'storage/', $image);
        }else {
            $image  = "storage/imageDefault.jpg";
        }

        $user->update([
            "name" => $request->name
        ]);

        return response()->json($user);
    }

    public function destroy(User $user)
    {
        $user->delete();
        return redirect(Route('user.index'));
    }

    public function destroyApi(User $user)
    {
        $user->delete();
        return response()->json($user);
    }


    function login(Request $request){

        $request->validate([
            'email' => 'required',
            'password' => 'required'
        ]);

       $user = User::where ('email', $request->email) -> first();


       //Dados inválidos
       if(!$user || !Hash::check ($request->password, $user->password)){
           return response()->json([
               'error'=> 'Credenciais invalidas'
           ]);
       }

       return response()->json( [
            'user'=> $user,
            'token'=> $user->createToken ($request->email)-> plainTextToken
        ]);

    }
}
