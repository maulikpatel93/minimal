<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Module extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function submodules()
    {
        return $this->hasMany(Submodule::class);
    }

    public function tabs()
    {
        return $this->hasMany(Tab::class);
    }

    public function rolePermissions()
    {
        return $this->hasMany(RolePermission::class);
    }
}
