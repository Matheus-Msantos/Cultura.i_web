<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddRelationProductAndProducer extends Migration
{

    public function up()
    {
        Schema::table('products', function (Blueprint $table) {
            $table->integer('producer_id');
        });
    }


    public function down()
    {
        Schema::table('products', function (Blueprint $table) {
            $table->sropColumn('producer_id');
        });
    }
}
