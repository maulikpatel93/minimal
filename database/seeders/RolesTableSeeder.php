<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RolesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $now = Carbon::now();

        $roles = [
            ['name' => 'Event Decorator', 'is_active' => 1, 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'Chef/Caterer', 'is_active' => 1, 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'Event Coordinator/Planner', 'is_active' => 1, 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'Photographer/Videographer', 'is_active' => 1, 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'Makeup Artist/Hair Stylist', 'is_active' => 1, 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'Entertainment Specialists', 'is_active' => 1, 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'Transportation Services', 'is_active' => 1, 'created_at' => $now, 'updated_at' => $now],
            ['name' => 'Traditional Services', 'is_active' => 1, 'created_at' => $now, 'updated_at' => $now],
        ];

        DB::table('roles')->insert($roles);
    }
}
