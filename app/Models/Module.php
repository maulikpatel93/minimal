<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;
class Module extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function createdAt(): Attribute
    {
        return new Attribute(
            get: fn ($value) => UtcToLocal($value),
        );
    }
    public function updatedAt(): Attribute
    {
        return new Attribute(
            get: fn ($value) => UtcToLocal($value),
        );
    }

    public function submodules()
    {
        return $this->hasMany(Submodule::class)->where('is_active', 1);
    }

    public function tabs()
    {
        return $this->hasMany(Tab::class)->where('is_active', 1);
    }

    public function rolePermissions()
    {
        return $this->hasMany(RolePermission::class)->where('is_active', 1);
    }
}
