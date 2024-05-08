<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    protected $successStatus = 200;
    protected $badrequestStatus = 400;
    protected $errorStatus = 422;
    protected $unauthorizedStatus = 401;
    protected $warningStatus = 410;

    public function me(Request $request)
    {
        $user = Auth::user();
        if ($user) {
            $user->load('role');
            $user->storage_url = asset('storage/user/profile');
        }
        return response()->json([
            'user' => $user,
        ], $this->successStatus);
    }
    public function userUpdate(Request $request)
    {
        $requestAll = $request->all();
        $validator = Validator::make($requestAll, [
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users,email,' . $request->user()->id,
            'phone_number' => 'required',
            'country_code' => 'required',
        ]);
        if ($validator->fails()) {
            throw ValidationException::withMessages($validator->errors()->toArray());
        }
        $user = $request->user();
        $user->fill($requestAll);
        $file = $request->file('profile_image');
        if ($file) {
            if ($user->profile_image) {
                Storage::disk('public')->delete('user/profile/' . $user->profile_image);
            }
            $fileName = time() . '_' . str_replace(' ', '_', $file->getClientOriginalName());
            $filePath = $file->storeAs('user/profile', $fileName, 'public');
            $user->profile_image = $fileName;
        }

        $user->save();
        $user->storage_url = asset('storage/user/profile');
        return response()->json([
            'message' => 'User updated successfully.',
            'user' => $user,
        ], $this->successStatus);
    }
    public function passwordChange(Request $request)
    {
        $requestAll = $request->all();

        // Validate request data
        $validator = Validator::make($requestAll, [
            'old_password' => 'required|string|max:255',
            'password' => 'required|string|max:255|different:old_password',
            'confirm_password' => 'required|string|max:255|same:password',
        ]);

        // Add custom validation message for 'different' rule
        $validator->sometimes('password', 'different:old_password', function ($input) {
            return $input->old_password !== $input->password;
        });

        // Check for validation errors
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], $this->errorStatus);
        }

        // Get the authenticated user
        $user = $request->user();

        // Verify old password
        if (!Hash::check($request->old_password, $user->password)) {
            return response()->json(['error' => 'The old password is incorrect.'], $this->warningStatus);
        }

        // Update the user's password
        $user->password = Hash::make($request->password);
        $user->save();

        // Return success response
        return response()->json(['message' => 'Password changed successfully.'], $this->successStatus);
    }
}
