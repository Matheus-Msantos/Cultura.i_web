<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Category;
use App\Models\Address;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller {

    public function category( Category $category ) {
        return response()->json( Product::with( 'category')->where( 'category_id', '=', $category->id )->get() );
    }

    public function indexApi() {
        return response()->json( Product::with( 'category' )->get() );
    }

    public function show( Product $product ) {
        return response()->json( Product::with('category')->where( 'id', $product->id )->get() );
    }

    public function storeApi( Request $request ) {
        if ( $request->image ) {
            $image = $request->image;
        } else {
            $image  = 'https://res.cloudinary.com/matheusmelo01/image/upload/v1653259950/yljvylgxh9grjh141gv8.png';
        }

        $product = Product::create( [
            'name' => $request->name,
            'description' => $request->description,
            'classification' => $request->classification,
            'time' => $request->time,
            'date' => $request->date,
            'category_id' => $request->category_id,
            'price' => $request->price,
            'address' => $request->address,
            'image' => $image,
            'user_id' => $request->user_id
        ] );
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
