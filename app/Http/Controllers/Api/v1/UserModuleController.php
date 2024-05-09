<?php

namespace App\Http\Controllers;

use App\Models\Role;
use Illuminate\Http\Request;
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
        if (!$user) {
            return response()->json([
                'status' => false,
                'message' => 'Invalid email or password.',
            ], $this->unauthorizedStatus);
        }

        // Assuming there's a relationship defined in the Role model
        $roles = Role::with(['modules', 'submodules', 'tabs'])->get();

        return response()->json([
            'status' => true,
            'roles' => $roles,
        ], $this->successStatus);
    }
}
