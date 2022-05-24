<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\OrderItem;
use App\Models\Cart;
use App\Models\user;

class Product extends Model {
    use HasFactory;

    protected $fillable = [ 'name', 'description', 'time', 'date', 'classification', 'category_id', 'price', 'address_id'];

    public function user() {
        return $this->belongsTo( User::class );
    }

    public function category() {
        return $this->belongsTo( Category::class );
    }

    public function address() {
        return $this->belongsTo( Address::class );
    }

    public function cart() {
        return $this->hasMany( Cart::class );
    }
}
