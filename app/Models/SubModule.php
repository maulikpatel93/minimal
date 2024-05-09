<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SubModule extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function module()
    {
        return $this->belongsTo(Module::class);
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
