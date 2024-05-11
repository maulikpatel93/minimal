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
        $limit = $request->limit ? $request->limit : config('app.apiPerPage');
        $filter = $request->filter;

        $query = Module::select('*');
        if($filter){
            echo '<pre>'; print_r($filter); echo '</pre>';dd();
        }
        $model = $query->paginate($limit);
        $successData = $model ? $model : [];
        return response()->json($successData, $this->successStatus);
    }
}
