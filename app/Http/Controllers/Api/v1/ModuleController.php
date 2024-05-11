<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Models\Module;
use Illuminate\Http\Request;

class ModuleController extends Controller
{
    protected $successStatus = 200;
    protected $badrequestStatus = 400;
    protected $errorStatus = 422;
    protected $unauthorizedStatus = 401;
    protected $warningStatus = 410;

    public function list(Request $request)
    {
        $requestAll = $request->all();
        $is_active = $request->is_active;
        $limit = 10;
        if ($is_active === 0 || $is_active === 1) {
            $model = Module::where('is_active', $is_active)->paginate($limit);
        } else {
            $model = Module::paginate($limit);
        }
        $successData = $model ? $model : [];
        return response()->json($successData, $this->successStatus);
    }
}
