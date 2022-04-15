<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Product;
use App\Models\Order;

class OrderItem extends Model {
    use HasFactory;

    protected $fillable = [ 'user_id', 'product_id', 'quantity', 'value' ];

    public function product() {

        return $this->belongsTo( Product::class );

    }

    public function user() {
        return $this->belongsTo( User::class );
    }

}
