<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Product;


class Producer extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'email', 'cnpj', 'password', 'media', 'is_producer', 'logo'];

    public function products() {
        return $this->hasMany(Product::class);
    }
}
