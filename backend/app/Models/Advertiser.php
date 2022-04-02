<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use App\Models\Advert;

class Advertiser extends Model {
    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable = [ 'id', 'nome', 'email', 'cnpj', 'password', 'is_advertiser' ];

    public function advert() {
        return $this->hasMany( Advert::class );
    }
}
