<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOvertimesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('overtimes', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->date('date_of_application');
            $table->unsignedBigInteger('user_id');
            $table->string('full_name');
            $table->string('company');
            $table->string('department');
            $table->string('department_manager');
            $table->string('method');
            $table->string('shift');
            $table->string('reason')->nullable();
            $table->time('time_from');
            $table->time('time_to');
            $table->date('overtime_date');
//            $table->timestamps();

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
        Schema::dropIfExists('overtimes');
    }
}
