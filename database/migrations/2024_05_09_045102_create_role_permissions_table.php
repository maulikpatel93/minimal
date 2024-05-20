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
        Schema::create('role_permissions', function (Blueprint $table) {
            $table->id();
            $table->string('module_type')->comment('module, submodule, tab');
            $table->string('permissions')->comment('create, update, delete, read');
            $table->timestamps();
        });

        Schema::table('role_permissions', function (Blueprint $table) {
            $table->unsignedBigInteger('module_id')->after('id')->nullable()->comment('Type Of Module');
            $table->foreign('module_id')->references('id')->on('modules')->onUpdate('cascade')->onDelete('cascade');

            $table->unsignedBigInteger('sub_module_id')->after('module_id')->nullable()->comment('Type Of sub Module');
            $table->foreign('sub_module_id')->references('id')->on('sub_modules')->onUpdate('cascade')->onDelete('cascade');

            $table->unsignedBigInteger('tab_id')->after('sub_module_id')->nullable()->comment('Type Of tab');
            $table->foreign('tab_id')->references('id')->on('tabs')->onUpdate('cascade')->onDelete('cascade');

            $table->unsignedBigInteger('role_id')->after('tab_id')->nullable()->comment('Type Of Role');
            $table->foreign('role_id')->references('id')->on('roles')->onUpdate('cascade')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('role_permissions');
    }
};
