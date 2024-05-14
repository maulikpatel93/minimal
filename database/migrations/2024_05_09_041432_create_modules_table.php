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
        Schema::create('modules', function (Blueprint $table) {
            $table->id();
            $table->enum('panel', ['Backend', 'Frontend', 'Common'])->default('Backend');
            $table->string('title',100);
            $table->string('route',100)->nullable();
            $table->string('icon')->nullable();
            $table->string('position')->comment('Menu Position');
            $table->text('permissions')->comment('create,update,read,delete');
            $table->boolean('is_active')->default(1);
            $table->datetime('is_active_at')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('modules');
    }
};
