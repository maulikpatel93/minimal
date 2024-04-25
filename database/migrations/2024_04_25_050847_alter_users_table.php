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
        Schema::table('users', function (Blueprint $table) {
            if (Schema::hasColumn('users', 'name')) {
                $table->dropColumn('name');
            }
            if (!Schema::hasColumn('users', 'first_name')) {
                $table->string('first_name')->after('id');
            }
            if (!Schema::hasColumn('users', 'last_name')) {
                $table->string('last_name')->after('first_name');
            }
            if (!Schema::hasColumn('users', 'profile_image')) {
                $table->string('profile_image')->nullable()->after('last_name');
            }
            if (!Schema::hasColumn('users', 'role_id')) {
                $table->unsignedBigInteger('role_id')->nullable()->after('profile_image');
                $table->foreign('role_id')->references('id')->on('roles');
            }
            if (!Schema::hasColumn('users', 'status')) {
                $table->string('status')->default('active')->after('email_verified_at');
            }
            if (!Schema::hasColumn('users', 'email_otp')) {
                $table->string('email_otp')->nullable()->after('status');
            }
            if (!Schema::hasColumn('users', 'phone_otp')) {
                $table->string('phone_otp')->nullable()->after('email_otp');
            }
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('name')->after('id');
            $table->dropColumn(['first_name', 'last_name', 'profile_image', 'role_id', 'status', 'email_otp', 'phone_otp']);
        });
    }

};
