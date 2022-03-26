<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cart;
use App\Models\Order;
use App\Models\OrderItem;

class OrderController extends Controller
{
    public function add(Request $request) {
        $cart = Cart::where('user_id','=', Auth()->user()->id)->get();

        $order = Order::create([
            'user_id' => Auth()->user()->id,
            'status' => 'Processando',
            'cc_number' => substr($request->cc_number, -4),
        ]);


        foreach($cart as $item){
            OrderItem::create([
            'order_id' => $order->id,
            'product_id' => $item->product_id,
            'quantity' => $item->quantity,
            'price' => $item->products()->price * $item->quantity,
            ]);
            $item->delete();
        }

        $order::with('user')->where('user_id','=', Auth()->user()->id)->get();
        return response()->json($order);

    }

    public function indexApi() {
        $order = Order::with('user', 'orderItem')->where('user_id','=', Auth()->user()->id)->get();
        return response()->json($order);
    }

    public function orderItem() {

        return response()->json(OrderItem::with('order', 'products')->get());
    }

    public function index() {
        return view('order.index')->with('orders', Order::all());
    }

    public function edit(Order $order) {
        return view('order.edit')->with('order', $order);
    }

    public function update(Request $request, Order $order){
        $order->update($request->all());
        session()->flash('success', 'Pedido atualizado com sucesso!');
        return redirect(Route('order.index'));
    }
}
