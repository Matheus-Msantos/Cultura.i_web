<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddRelationAdvertsAndAdvertisers extends Migration
{

    public function up()
    {
        Schema::table('adverts', function (Blueprint $table) {
            $table->integer('advertiser_id');
        });
    }

    public function down()
    {
        Schema::table('adverts', function (Blueprint $table) {
            $table->sropColumn('advertiser_id');
        });
    }
}
