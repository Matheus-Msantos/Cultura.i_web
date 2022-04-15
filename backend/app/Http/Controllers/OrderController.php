<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cart;
use App\Models\Order;
use App\Models\OrderItem;

class OrderController extends Controller {

    public function index() {
        return view( 'order.index' )->with( 'orders', Order::all() );
    }

    public function edit( Order $order ) {
        return view( 'order.edit' )->with( 'order', $order );
    }

    public function update( Request $request, Order $order ) {
        $order->update( $request->all() );
        session()->flash( 'success', 'Pedido atualizado com sucesso!' );
        return redirect( Route( 'order.index' ) );
    }
}
