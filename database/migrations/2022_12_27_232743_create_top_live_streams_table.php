<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('top_live_streams', function (Blueprint $table) {
            $table->id();
            $table->string('channel_name')->nullable();
            $table->string('title');
            $table->string('game_id');
            $table->string('game_name');
            $table->bigInteger('no_of_viewers');
            $table->datetime('started_at');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('top_live_streams');
    }
};
