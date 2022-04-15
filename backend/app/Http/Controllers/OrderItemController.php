<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cart;
use App\Models\Order;
use App\Models\OrderItem;

class OrderItemController extends Controller {

    public function add( Request $request ) {
        $cart = Cart::where( 'user_id', '=', Auth()->user()->id )->get();

        foreach ( $cart as $item ) {
            OrderItem::create( [
                'user_id' => Auth()->user()->id,
                'product_id' => $item->product_id,
                'quantity' => $item->quantity,
                'value' => $item->products()->price * $item->quantity,
            ] );
            $item->delete();
        }

    }

    public function indexApi() {
        return response()->json( OrderItem::with( 'user', 'product' )->where( 'user_id', '=', Auth()->user()->id )->get() );
    }

    public function orderItem ( OrderItem $orderItem ) {
        $item = $orderItem::with( 'user', 'product' )->where( 'user_id', '=', Auth()->user()->id )->get();
        return response()->json( $item );

    }

    public function order( OrderItem $orderItem ) {
        return response()->json( $orderItem::with( 'user', 'product' )->get() );
    }
}
