<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    use HasFactory;
    public function users()
    {
        return $this->hasMany(User::class);
    }
    public function modules()
    {
        return $this->hasMany(Module::class);
    }

    public function submodules()
    {
        return $this->hasMany(Submodule::class);
    }

    public function tabs()
    {
        return $this->hasMany(Tab::class);
    }
}
