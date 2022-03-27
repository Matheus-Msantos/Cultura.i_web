<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Advertiser;

class Advert extends Model
{
    use HasFactory;

    protected $fillable = [];

    public function advertiser() {
        return $this->hasMany(Advertiser::class);
    }
}
