<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Category;
use App\Models\Address;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller {

    public function index() {
        return view( 'product.index' )->with( 'products', Product::all() );
    }

    public function category( Category $category ) {
        return response()->json( Product::with( 'category', 'address' )->where( 'category_id', '=', $category->id )->get() );
    }

    public function create() {
        return view( 'product.create' )->with( [ 'categories' => Category::all(), 'addresses' => Address::all() ] );
    }

    public function edit( Product $product ) {
        return view( 'product.edit' )->with( [ 'product' => $product, 'categories' => Category::all(), 'addresses' => Address::all() ] );
    }

    public function update( Request $request, Product $product ) {
        if ( $request->image ) {
            $image = $request->file( 'image' )->store( '/public/product' );
            $image = str_replace( 'public/', 'storage/', $image );
            if ( $product->image != 'storage/imageDefault.jpg' )
            Storage::delete( str_replace( 'storage/', 'public/', $product->image ) );
        } else {
            $image = $product->image;
        }

        $product->update( [
            'name' => $request->name,
            'description' => $request->description,
            'time' => $request->time,
            'date' => $request->date,
            'classification' => $request->classification,
            'category_id' => $request->category_id,
            'price' => $request->price,
            'address_id' => $request->address_id,
            'image' => $image
        ] );
        session()->flash( 'success', 'Evento atualizado com sucesso!' );
        return redirect( Route( 'product.index' ) );
    }

    public function destroy( Product $product ) {
        $product->delete();
        Storage::delete( str_replace( 'storage/', 'public/', $product->image ) );
        session()->flash( 'success', 'Evento deletado com sucesso!' );
        return redirect( Route( 'product.index' ) );
    }

    /*------APIs------*/

    public function indexApi() {
        return response()->json( Product::with( 'category', 'address', 'user' )->get() );
    }

    public function show( Product $product ) {
        return response()->json( Product::with( 'category', 'address', 'user' )->where( 'id', $product->id )->get() );
    }

    public function storeApi( Request $request ) {
        if ( $request->image ) {
            $image =  $request->image;
        } else {
            $image  = 'https://res.cloudinary.com/matheusmelo01/image/upload/v1653259950/yljvylgxh9grjh141gv8.png';
        }

        $product = Product::create( [
            'name' => $request->name,
            'description' => $request->description,
            'time' => $request->time,
            'date' => $request->date,
            'classification' => $request->classification,
            'category_id' => $request->category_id,
            'price' => $request->price,
            'address_id' => $request->address_id,
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
