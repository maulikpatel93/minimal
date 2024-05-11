<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    use HasFactory;
    public function users()
    {
        return $this->hasMany(User::class)->where('is_active', 1);
    }
    public function modules()
    {
        return $this->hasMany(Module::class)->where('is_active', 1);
    }

    public function submodules()
    {
        return $this->hasMany(Submodule::class)->where('is_active', 1);
    }

    public function tabs()
    {
        return $this->hasMany(Tab::class)->where('is_active', 1);
    }
}
