<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVacationDaysTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('vacation_days', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('vacation_id');
            $table->date('day_off');
            $table->timestamps();

//            $table->foreign('user_id')
//                ->references('UserID')
//                ->on('user')
//                ->onDelete('cascade');

            $table->foreign('vacation_id')
                ->references('id')
                ->on('vacations')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('vacation_days');
    }
}
