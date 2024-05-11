<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Models\Role;
use Illuminate\Support\Facades\Auth;

class UserModuleController extends Controller
{
    protected $successStatus = 200;
    protected $badrequestStatus = 400;
    protected $errorStatus = 422;
    protected $unauthorizedStatus = 401;
    protected $warningStatus = 410;

    public function view()
    {
        $user = Auth::user();
        $role_id = $user->role_id;
        // // Assuming there's a relationship defined in the Role model
        // $roles = Role::with([])->get();

        // return response()->json([
        //     'status' => true,
        //     'roles' => $roles,
        // ], $this->successStatus);
    }
}
