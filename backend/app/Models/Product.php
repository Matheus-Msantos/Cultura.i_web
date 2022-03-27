<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\OrderItem;
use App\Models\Cart;

class Product extends Model {
    use HasFactory;

    protected $fillable = [ 'name', 'description', 'time', 'date', 'classification', 'category_id', 'price', 'address_id', 'image' ];

    public function category() {
        return $this->belongsTo( Category::class );
    }

    public function address() {
        return $this->belongsTo( Address::class );
    }

    public function orderItem() {
        return $this->hasMany( OrderItem::class );
    }

    public function cart() {
        return $this->hasMany( Cart::class );
    }
}