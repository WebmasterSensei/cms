<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Spatie\Permission\Models\Role;

class ModelHasRoles extends Model
{
    protected $table = 'model_has_roles';
    protected $primaryKey = 'model_id';

    public function roles(){
        return $this->belongsTo(Role::class, 'role_id', 'id');
    }
}
