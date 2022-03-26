<?php

namespace App\Http\Controllers;

use App\Models\address;
use Illuminate\Http\Request;

class AddressController extends Controller
{

    public function index()
    {
        return view('address.index')->with('addresses', Address::all());
        //return response()->json(Address::all());
    }

    public function indexApi()
    {
       return response()->json(Address::all());
    }

    public function create()
    {
        return view('address.create');
    }


    public function store(Request $request)
    {
        Address::create($request->all());
        session()->flash('success', 'Endereço cadastrado com sucesso !');
        return redirect(Route('address.index'));

        //$address = Address::create($request->all());
        //return response()->json($address);
    }

    public function storeApi(Request $request)
    {
        $address = Address::create($request->all());
        return response()->json($address);
    }


    public function show(address $address)
    {
        return response()->json($address);
    }


    public function edit(address $address)
    {
        return view('address.edit')->with('address', $address);
    }


    public function update(Request $request, address $address)
    {
        $address->update($request->all());
        session()->flash('success', 'Endereço atualizado com sucesso!');
        return redirect(Route('address.index'));

        //$address->update($request->all());
        //return response()->json($address);
    }

    public function updateApi(Request $request, address $address){
        $address->update($request->all());
        return response()->json($address);
    }

    public function destroy(address $address)
    {
        $address->delete();
        session()->flash('success', 'Endereço deletado com sucesso!');
        return redirect(Route('address.index'));

        //$address->delete();
        //return response()->json($address);
    }

    public function destroyApi(address $address)
    {
        $address->delete();
        return response()->json($address);
    }
}
