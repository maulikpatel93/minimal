<?php

namespace App\Http\Controllers;

use App\Models\Role;
use App\Models\User;
use Dotenv\Exception\ValidationException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function userLogin(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if (Auth::attempt($request->only('email', 'password'))) {
            $user = Auth::user();
            $token = $user->createToken('authToken')->plainTextToken;

            return response()->json([
                'user' => $user,
                'token' => $token,
                'message' => 'User logged in successfully.',
            ]);
        }

        throw ValidationException::withMessages([
            'email' => ['The provided credentials are incorrect.'],
        ]);
    }

    public function userRegister(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8',
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        $token = $user->createToken('authToken')->plainTextToken;

        return response()->json([
            'user' => $user,
            'token' => $token,
            'message' => 'User registered successfully.',
        ]);
    }
    public function userRolesDropDown()
    {
        $roles = Role::where('is_active', 1)->get();
        $rolesDropdown = $roles->map(function ($role) {
            return [
                'value' => $role->id,
                'label' => $role->name,
            ];
        });

        return response()->json([
            'status' => true,
            'message' => 'Roles Fetched SuccessFully',
            'roles' => $rolesDropdown
        ]);
    }
}
