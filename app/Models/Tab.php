<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tab extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function module()
    {
        return $this->belongsTo(Module::class)->where('is_active', 1);
    }

    public function submodule()
    {
        return $this->belongsTo(Submodule::class)->where('is_active', 1);
    }

    public function rolePermissions()
    {
        return $this->hasMany(RolePermission::class)->where('is_active', 1);
    }
}
