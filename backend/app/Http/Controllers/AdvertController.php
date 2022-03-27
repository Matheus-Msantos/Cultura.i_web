<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Advert;
use App\Models\Advertiser;

class AdvertController extends Controller {

    public function indexApi() {
        return response()->json( Advert::with( 'advertiser' )->get() );
    }

    public function storeApi( Request $request ) {

        if ( $request->image ) {
            $image = $request->file( 'image' )->store( '/public/producer' );
            $image = str_replace( 'public/', 'storage/', $image );
        } else {
            $image = 'storage/imageDefault.png';
        }

        $advert = Advert::create( [
            'image' => $image,
            'advertiser_id' => $request->advertiser_id
        ] );

        return response()->json( $advert );
    }

    public function showApi(Advert $advert) {
        return response()->json( $advert );
    }

}
