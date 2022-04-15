<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cart;
use App\Models\Order;
use App\Models\OrderItem;

class OrderItemController extends Controller {

    public function order() {
        return response()->json( OrderItem::with( 'order', 'product' )->get() );
    }

    public function orderItem( OrderItem $orderItem ) {
        $item = OrderItem::with( 'order', 'product' )->where( 'id', '=', $orderItem->id )->get();
        return response()->json( $item );
    }

}
