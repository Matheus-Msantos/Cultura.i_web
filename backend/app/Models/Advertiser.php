<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Advert;

class Advertiser extends Model {
    use HasFactory;

    protected $fillable = [ 'id', 'nome', 'email', 'cnpj', 'password', 'is_advertiser' ];

    public function advert() {
        return $this->belongsTo( Advert::class );
    }
}