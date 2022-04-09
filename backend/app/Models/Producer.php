<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use App\Models\Product;

class Producer extends Model {
    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable = [ 'name', 'email', 'cnpj', 'password', 'media', 'is_producer', 'logo' ];

    public function products() {
        return $this->hasMany( Product::class );
    }
}
