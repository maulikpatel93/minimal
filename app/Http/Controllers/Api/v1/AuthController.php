<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Models\Role;
use App\Models\RolePermission;
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
            $user->load('role:id,name');
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

        // Check if 'profile_image' is a file
        if ($request->hasFile('profile_image')) {
            $file = $request->file('profile_image');
            // Handle file upload
            if ($file->isValid()) {
                if ($user->profile_image) {
                    Storage::disk('public')->delete('user/profile/' . $user->profile_image);
                }
                $fileName = time() . '_' . str_replace(' ', '_', $file->getClientOriginalName());
                $filePath = $file->storeAs('user/profile', $fileName, 'public');
                $user->profile_image = $fileName;
            }
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
            return response()->json($validator->errors(), $this->errorStatus);
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

    public function roleAccess(Request $request)
    {
        $requestAll = $request->all();

        $user = Auth::user();
        $role_id = $user->role_id;

        $data = [];
        $roleModel = Role::select(['id', 'name'])->where('is_active', 1)->where(['id' => $role_id])->first();
        if ($roleModel) {
            $selectFieldsModule = $selectFieldsTab = $selectFieldsSubModule = ['role_permissions.id', 'role_permissions.permissions'];
            $prefixModule = 'module'; // Set your desired prefix here
            $moduleFields = ['id', 'title', 'route', 'icon', 'panel', 'position'];
            foreach ($moduleFields as $field) {
                $selectFieldsModule[] = "modules.$field as $prefixModule" . "_$field";
            }

            $modules = RolePermission::leftJoin('modules', 'role_permissions.module_id', '=', 'modules.id')
                ->where('role_permissions.role_id', $role_id)
                ->whereNotNull('role_permissions.module_id')
                ->whereNotNull('role_permissions.module_type')
                ->whereNotNull('role_permissions.permissions')
                ->whereRaw("FIND_IN_SET('read', role_permissions.permissions)")
                ->where('role_permissions.module_type', 'module')
                ->where('modules.is_active', 1)
                ->orderBy('modules.position') // Order by the position field of the related module
                ->select($selectFieldsModule)
                ->get();

            if ($modules) {
                foreach ($modules as $module) {
                    //Tab section
                    $prefixTab = 'tab'; // Set your desired prefix here
                    $subModuleFields = ['id', 'title', 'route', 'icon', 'panel', 'position'];
                    foreach ($subModuleFields as $field) {
                        $selectFieldsTab[] = "tabs.$field as $prefixTab" . "_$field";
                    }

                    $tabs = RolePermission::leftJoin('tabs', 'role_permissions.tab_id', '=', 'tabs.id')
                        ->where('role_permissions.role_id', $role_id)
                        ->where('role_permissions.module_id', $module->module_id)
                        ->whereNotNull('role_permissions.module_id')
                        ->whereNotNull('role_permissions.tab_id')
                        ->whereNotNull('role_permissions.module_type')
                        ->whereNotNull('role_permissions.permissions')
                        ->whereRaw("FIND_IN_SET('read', role_permissions.permissions)")
                        ->where('role_permissions.module_type', 'tab')
                        ->where('tabs.is_active', 1)
                        ->orderBy('tabs.position') // Order by the position field of the related module
                        ->select($selectFieldsTab)
                        ->get();
                    if ($tabs && $tabs->count() > 0) {
                        $module->tabs = $tabs;
                    }

                    //Sub Module section
                    $prefixSubModule = 'sub_module'; // Set your desired prefix here
                    $subModuleFields = ['id', 'title', 'route', 'icon', 'panel', 'position'];
                    foreach ($subModuleFields as $field) {
                        $selectFieldsSubModule[] = "sub_modules.$field as $prefixSubModule" . "_$field";
                    }

                    $sub_modules = RolePermission::leftJoin('sub_modules', 'role_permissions.sub_module_id', '=', 'sub_modules.id')
                        ->where('role_permissions.role_id', $role_id)
                        ->where('role_permissions.module_id', $module->module_id)
                        ->whereNotNull('role_permissions.module_id')
                        ->whereNotNull('role_permissions.sub_module_id')
                        ->whereNotNull('role_permissions.module_type')
                        ->whereNotNull('role_permissions.permissions')
                        ->whereRaw("FIND_IN_SET('read', role_permissions.permissions)")
                        ->where('role_permissions.module_type', 'sub_module')
                        ->where('sub_modules.is_active', 1)
                        ->orderBy('sub_modules.position') // Order by the position field of the related module
                        ->select($selectFieldsSubModule)
                        ->get();

                    if ($sub_modules && $sub_modules->count() > 0) {
                        foreach ($sub_modules as $sub_module) {
                            //Sub Module Tab section
                            $tabs = RolePermission::leftJoin('tabs', 'role_permissions.tab_id', '=', 'tabs.id')
                                ->where('role_permissions.role_id', $role_id)
                                ->where('role_permissions.module_id', $module->module_id)
                                ->whereNotNull('role_permissions.module_id')
                                ->whereNotNull('role_permissions.tab_id')
                                ->whereNotNull('role_permissions.module_type')
                                ->whereNotNull('role_permissions.permissions')
                                ->where('role_permissions.module_type', 'tab')
                                ->whereRaw("FIND_IN_SET('read', role_permissions.permissions)")
                                ->where('tabs.is_active', 1)
                                ->orderBy('tabs.position') // Order by the position field of the related module
                                ->select($selectFieldsTab)
                                ->get();

                            if ($tabs && $tabs->count() > 0) {
                                $sub_module->tabs = $tabs;
                            }
                        }
                        $module->sub_modules = $sub_modules;
                    }
                }
                $roleModel->modules = $modules;
            }
        }
        $successData = $roleModel ? $roleModel : [];
        return response()->json($successData, $this->successStatus);
    }

}
