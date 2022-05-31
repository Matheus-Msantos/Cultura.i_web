<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller {

    public function index() {
        return response()->json( User::all() );
    }
    public function show() {
        return response()->json(Auth()->user() );
    }

    public function create() {
        return view( 'user.create' );
    }

    function store( Request $request ) {
        $request->validate( [
            'email' => 'required|email|unique:users',
            'cpf/cnpj' => 'required|unique:users',
            'name'=> 'required|max:255',
            'password' => 'required|min:8',
        ] );

        if ( $request->image ) {
            $image = $request->file( 'image' )->store( '/public/user' );
            $image = str_replace( 'public/', 'storage/', $image );
        } else {
            $image  = 'https://res.cloudinary.com/matheusmelo01/image/upload/v1653259899/ezir445ev0urliisumaw.png';
        }

        if ( $request->is_Admin ) {
            $is_Admin = $request->is_Admin;
        } else {
            $is_Admin = 0;
        }

        if ( $request->is_Producer ) {
            $is_Producer = $request->is_Producer;
        } else {
            $is_Producer = 0;
        }

        if ( $request->is_Advertiser ) {
            $is_Advertiser = $request->is_Advertiser;
        } else {
            $is_Advertiser = 0;
        }

        $user = User::create( [
            'name' => $request->name,
            'email' => $request->email,
            'password' => $request->password,
            'image' => $image,
            'is_Admin' => $is_Admin,
            'is_Producer' => $is_Producer,
            'is_Advertiser' => $is_Advertiser
        ] );

        return redirect( Route( 'user.index' ) );
    }

    public function update( Request $request, User $user ) {
        if ( $request->image ) {
            $image = $request->file( 'image' )->store( '/public/product' );
            $image = str_replace( 'public/', 'storage/', $image );
        } else {
            $image  = 'https://res.cloudinary.com/matheusmelo01/image/upload/v1653259899/ezir445ev0urliisumaw.png';
        }

        $user->update( [
            'isAdmin' => $request->isAdmin,
            'image' => $image
        ] );
        return redirect( Route( 'user.index' ) );
    }

    public function edit( User $user ) {
        return view( 'user.edit' )->with( 'user', $user );
    }

    public function destroy( User $user ) {
        $user->delete();
        return redirect( Route( 'user.index' ) );
    }

    /*------APIs------*/

    function storeApi( Request $request ) {
        $request->validate( [
            'email' => 'required|email|unique:users',
            'cpf_cnpj' => 'required|unique:users',
            'name'=> 'required|max:255',
            'password' => 'required|min:8',
        ] );

        if ( $request->image ) {
            $image = $request->image;
        } else {
            $image  = 'https://res.cloudinary.com/matheusmelo01/image/upload/v1653259899/ezir445ev0urliisumaw.png';
        }

        if ( $request->is_Admin ) {
            $is_Admin = $request->is_Admin;
        } else {
            $is_Admin = 0;
        }

        if ( $request->is_Producer ) {
            $is_Producer = $request->is_Producer;
        } else {
            $is_Producer = 0;
        }

        if ( $request->is_Advertiser ) {
            $is_Advertiser = $request->is_Advertiser;
        } else {
            $is_Advertiser = 0;
        }

        $user = User::create( [
            'name' => $request->name,
            'email' => $request->email,
            'cpf_cnpj' => $request->cpf_cnpj,
            'password' => Hash::make( $request->password ),
            'image' => $image,
            'is_Admin' => $is_Admin,
            'is_Producer' => $is_Producer,
            'is_Advertiser' => $is_Advertiser
        ] );

        return response()->json( [
            'user'=> $user,
            'token'=> $user->createToken ( $request->email )-> plainTextToken

        ] );
    }

    public function showSingle( User $user ) {
        return response()->json( $user );
    }

    function updateApi ( User $user, Request $request ) {
        $user->update( $request->all() );
        return response()->json( [
            'user' => $user,
            'token'=> $user->createToken ( $request->name )-> plainTextToken
        ] );
    }

    public function destroyApi() {
        $user = Auth()->user()->delete();
        return response()->json( $user );
    }

    function login( Request $request ) {

        $request->validate( [
            'email' => 'required',
            'password' => 'required'
        ] );

        $user = User::where ( 'email', $request->email ) -> first();

        //Dados inválidos
        if ( !$user || !Hash::check ( $request->password, $user->password ) ) {
            return response()->json( [
                'error'=> 'Credenciais invalidas'
            ] );
        }

        return response()->json( [
            'user'=> $user,
            'token'=> $user->createToken ( $request->email )-> plainTextToken
        ] );

    }
}
