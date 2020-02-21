<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVacationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('vacations', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->date('date_of_application');
            $table->unsignedBigInteger('user_id');
            $table->string('full_name');
            $table->string('company');
            $table->string('department');
            $table->string('replacement');
            $table->string('department_manager');
            $table->string('shift_manager');
            $table->string('has_received')->nullable();
            $table->mediumText('note')->nullable();
            $table->unsignedBigInteger('total_days');
            $table->timestamps();

//            $table->foreign('user_id')
//                ->references('UserID')
//                ->on('user')
//                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('vacations');
    }
}
