<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Category;
use App\Models\Address;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller {

    public function category( Category $category ) {
        return response()->json( Product::with( 'category', 'address' )->where( 'category_id', '=', $category->id )->get() );
    }

    public function indexApi() {
        return response()->json( Product::with( 'category')->get() );
    }

    public function show( Product $product ) {
        return response()->json( Product::with( 'category', 'address', 'user' )->where( 'id', $product->id )->get() );
    }

    public function storeApi( Request $request ) {
        $product = Product::create( $request->all() );
        return response()->json( $product );

    }

    public function updateApi( Request $request, Product $product ) {
        $product->update( $request->all() );
        return response()->json( $product );
    }

    public function destroyApi( Product $product ) {
        $product->delete();
        return response()->json( $product );
    }
}
