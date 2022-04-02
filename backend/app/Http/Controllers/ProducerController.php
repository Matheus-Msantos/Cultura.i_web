<?php

namespace App\Http\Controllers;

use App\Models\Producer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class ProducerController extends Controller {
    public function indexApi() {
        return response()->json( Producer::all() );
    }

    public function storeApi( Request $request ) {

        if ( $request->logo ) {
            $logo = $request->file( 'logo' )->store( '/public/producer' );
            $logo = str_replace( 'public/', 'storage/', $logo );
        } else {
            $logo = 'storage/logoDefault.png';
        }

        $producer = Producer::create( [
            'name' => $request->name,
            'email' => $request->email,
            'cnpj' => $request->cnpj,
            'password' => Hash::make( $request->password ),
            'media' => $request->media,
            'logo' => $logo
        ] );

        /*$producer = Producer::create( $request->all() );
        */
        return response()->json( $producer );
    }

    public function showApi( Producer $producer ) {
        return response()->json( $producer );
    }

    public function show() {
        return response()->json( Auth()->producer() );
    }

    public function updateApi( Request $request, Producer $producer ) {
        $producer->update( $request->all() );
        return response()->json( $producer );
    }

    function login( Request $request ) {

        $request->validate( [
            'email' => 'required',
            'password' => 'required'
        ] );

        $producer = Producer::where ( 'email', $request->email )->first();

        //Dados inválidos
        if ( !$producer || !Hash::check ( $request->password, $producer->password ) ) {
            return response()->json( [
                'error'=> 'Credenciais invalidas'
            ] );
        }

        return response()->json( [
            'producer'=> $producer,
            'token'=> $producer->createToken( $request->email )-> plainTextToken
        ] );

    }
}
