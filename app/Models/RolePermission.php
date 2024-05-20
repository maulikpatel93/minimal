<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RolePermission extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function role()
    {
        return $this->belongsTo(Role::class)->where('is_active', 1);
    }

    public function module()
    {
        return $this->belongsTo(Module::class)->where('is_active', 1);
    }

    public function subModule()
    {
        return $this->belongsTo(SubModule::class)->where('is_active', 1);
    }

    public function tab()
    {
        return $this->belongsTo(Tab::class)->where('is_active', 1);
    }
}
