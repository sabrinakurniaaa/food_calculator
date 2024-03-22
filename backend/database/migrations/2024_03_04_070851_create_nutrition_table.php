<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('nutrition', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('name');
            $table->unsignedBigInteger('group_id');
            $table->foreign('group_id')->references('id')->on('groups')->onDelete('cascade');
            $table->float('energy');
            $table->float('water');
            $table->float('protein');
            $table->float('fat');
            $table->float('carbohydrates');
            $table->float('fibre');
            $table->float('alcohol');
            $table->float('pufa');
            $table->float('cholesterol');
            $table->float('vitamin_a');
            $table->float('carotene');
            $table->float('vitamin_e');
            $table->float('vitamin_b1');
            $table->float('vitamin_b2');
            $table->float('vitamin_b6');
            $table->float('fol_acid');
            $table->float('vitamin_c');
            $table->float('sodium');
            $table->float('potassium');
            $table->float('calcium');
            $table->float('magnesium');
            $table->float('phosphorus');
            $table->float('iron');
            $table->float('zinc');

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('nutrition');
    }
};
