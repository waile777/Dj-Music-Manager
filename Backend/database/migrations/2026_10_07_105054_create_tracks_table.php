<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tracks', function (Blueprint $table) {
            $table->id();

            $table->foreignId('user_id')
                ->constrained()
                ->cascadeOnDelete();

            $table->string('title');
            $table->string('artist');
            $table->string('album')->nullable();
            $table->string('genre')->nullable();

            $table->decimal('bpm', 5, 2)->nullable();
            $table->string('key')->nullable();

            $table->unsignedInteger('duration')->nullable();

            $table->string('file_path');
            $table->string('cover_path')->nullable();

            $table->boolean('is_favorite')->default(false);

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tracks');
    }
};
