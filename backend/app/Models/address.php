<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class address extends Model
{
    use HasFactory;

    protected $fillable = ['street', 'district', 'number', 'city', 'state', 'country'];

    public function product() {
        return $this->hasMany(Product::class);
    }
}
