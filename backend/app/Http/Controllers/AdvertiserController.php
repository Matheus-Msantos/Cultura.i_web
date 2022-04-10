<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Advertiser;
use App\Models\Advert;
use Illuminate\Support\Facades\Hash;

class AdvertiserController extends Controller {

    public function indexApi() {
        return response()->json( Advertiser::all() );
    }

    public function storeApi( Request $request ) {
        $advertiser = Advertiser::create( [
            'nome' => $request->nome,
            'email' => $request->email,
            'cnpj' => $request->cnpj,
            'password' => Hash::make( $request->password )
        ] );
        return response()->json( $advertiser );
    }

    public function showApi( Advertiser $advertiser ) {
        return response()->json( $advertiser );
    }

    public function updateApi( Request $request, Advertiser $advertiser ) {
        $advertiser->update( $request->all() );
        return response()->json( $advertiser );
    }
}