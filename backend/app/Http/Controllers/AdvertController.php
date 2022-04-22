<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Advert;
use App\Models\Advertiser;
use Illuminate\Support\Facades\Storage;

class AdvertController extends Controller {

    public function indexApi() {
        return response()->json( Advert::with( 'user' )->get() );
    }

    public function storeApi( Request $request ) {

        if ( $request->image ) {
            $image = $request->file( 'image' )->store( '/public/advert' );
            $image = str_replace( 'public/', 'storage/', $image );
        } else {
            $image  = 'storage/imageDefault.jpg';
        }

        $advert = Advert::create( [
            'image' => $image,
            'user_id' => Auth()->user()->id
        ] );

        return response()->json( $advert );
    }

    public function showApi( Advert $advert ) {
        return response()->json( $advert );
    }

}
