<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Models\JwtService;
use App\Models\Role;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;

class GuestController extends Controller
{
    protected $successStatus = 200;
    protected $badrequestStatus = 400;
    protected $errorStatus = 422;
    protected $unauthorizedStatus = 401;
    protected $warningStatus = 410;

    public function userLogin(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email|max:255',
            'password' => 'required|string|min:8',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], $this->errorStatus);
        }

        if (Auth::attempt(['email' => $request->email, 'password' => $request->password, 'is_active' => 1])) {
            $user = Auth::user();
            $user->storage_url = asset('storage/user/profile');
            $user->load('role:id,name');
            $nameToken = $user->first_name . ' ' . $user->last_name;

            $expirationTime = Config::get('sanctum.expiration');
            $expTimestamp = now()->addSeconds($expirationTime);

            $token = $user->createToken($nameToken, ['*'], $expTimestamp)->plainTextToken;
            $payload = [
                'accessToken' => $token,
                'iat' => time(),
                'exp' => $expTimestamp->timestamp,
            ];
            $token = JwtService::encode($payload);
            return response()->json([
                'user' => $user,
                'accessToken' => $token,
                'message' => 'User registered successfully.',
            ], $this->successStatus);
        } else {
            return response()->json([
                'status' => false,
                'message' => 'Invalid email or password.',
            ], $this->errorStatus);
        }
    }

    public function userRegister(Request $request)
    {
        $requestAll = $request->all();
        $validator = Validator::make($requestAll, [
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8',
            'phone_number' => 'required',
            'country_code' => 'required',
            'role_id' => 'required|exists:roles,id',
        ]);
        if ($validator->fails()) {
            throw ValidationException::withMessages($validator->errors()->toArray());
            // return response()->json(['error' => $validator->errors()], $this->errorStatus);
        }
        $user = new User();
        $requestAll['password'] = Hash::make($request->password);

        $user->fill($requestAll);
        $file = $request->file('profile_image');
        if ($file) {
            $fileName = time() . '_' . str_replace(' ', '_', $file->getClientOriginalName());
            $filePath = $file->storeAs('user/profile', $fileName, 'public');
            $user->profile_image = $fileName;
        }
        $user->is_active = 1;
        $user->is_active_at = currentDateTime();
        $user->save();
        // $nameToken = $user->first_name . ' ' . $user->last_name;
        // $user->load('role');
        // $user->storage_url = asset('storage/user/profile');

        // $expirationTime = Config::get('sanctum.expiration');
        // $expTimestamp = now()->addSeconds($expirationTime);

        // $token = $user->createToken($nameToken, ['*'], $expTimestamp)->plainTextToken;
        // $payload = [
        //     'accessToken' => $token,
        //     'iat' => time(),
        //     'exp' => $expTimestamp->timestamp,
        // ];
        // $token = JwtService::encode($payload);
        return response()->json([
            // 'user' => $user,
            // 'accessToken' => $token,
            'message' => 'User registered successfully.',
        ], $this->successStatus);

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
        $payload = [
            'status' => true,
            'message' => 'Roles Fetched SuccessFully',
            'roles' => $rolesDropdown,
        ];
        // $token = JwtService::encode($payload);
        // $token1 = JwtService::decode($token);
        return response()->json($payload, $this->successStatus);
    }
}
