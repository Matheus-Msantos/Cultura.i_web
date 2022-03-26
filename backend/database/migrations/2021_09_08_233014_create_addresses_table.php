<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAddressesTable extends Migration
{

    public function up()
    {
        Schema::create('addresses', function (Blueprint $table) {
            $table->id();
            $table->string('street');
            $table->string('district');
            $table->string('number');
            $table->string('city');
            $table->string('state');
            $table->string('country');
            $table->timestamps();
        });
    }


    public function down()
    {
        Schema::dropIfExists('addresses');
    }
}
