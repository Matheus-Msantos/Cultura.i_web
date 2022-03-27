<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Advertiser;

class Advert extends Model {
    use HasFactory;

    protected $fillable = [ 'id', 'image', 'advertiser_id' ];

    public function advertiser() {
        return $this->belongsTo( Advertiser::class );
    }
}
