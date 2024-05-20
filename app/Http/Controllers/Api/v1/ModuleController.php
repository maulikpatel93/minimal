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
        $qsearch = $request->q;
        $whereLike = $request->q ? explode(' ', $qsearch) : '';

        $query = Module::select('*');

        if (!empty($filter) && isset($filter['quickFilterValues'])) {
            $logicOperator = strtoupper($filter['quickFilterLogicOperator']);

            // Set the initial logic operator based on the quickFilterLogicOperator value
            if ($logicOperator === 'AND') {
                $query->where(function ($query) use ($filter) {
                    foreach ($filter['quickFilterValues'] as $value) {
                        $query->where(function ($query) use ($value) {
                            $query->where('title', 'like', '%' . $value . '%')
                                ->orWhere('route', 'like', '%' . $value . '%');
                        });
                    }
                });
            } elseif ($logicOperator === 'OR') {
                $query->where(function ($query) use ($filter) {
                    foreach ($filter['quickFilterValues'] as $value) {
                        $query->orWhere('title', 'like', '%' . $value . '%')
                            ->orWhere('route', 'like', '%' . $value . '%');
                    }
                });
            }
        }
        if($qsearch && $whereLike){
            $query->where(function ($q) use ($whereLike) {
                if ($whereLike) {
                    $q->where('title', "like", "%" . $whereLike[0] . "%");
                    foreach ($whereLike as $k => $v) {
                        $q->orWhere('title', "like", "%" . $v . "%");
                        $q->orWhere('route', "like", "%" . $v . "%");
                    }
                }
            });
        }
        $model = $query->paginate($limit);
        $successData = $model ? $model : [];

        return response()->json($successData, $this->successStatus);
    }
    public function moduleDropDownList(){
        $modules = Module::select('id', 'title')->where('is_active', 1)->get();
        
        $dropdownList = $modules->map(function($module) {
            return [
                'value' => $module->id,
                'label' => $module->title
            ];
        })->toArray();
    
        return response()->json($dropdownList,$this->successStatus);
    }
    public function detail(Request $request, $moduleId)
    {
        $requestAll = $request->all();
        $successData = Module::where('id', $moduleId)->where('is_active', 1)->first();
        return response()->json($successData, $this->successStatus);
    }
    public function create(Request $request)
    {
        $validator = validator()->make($request->all(), [
            'panel' => 'required|in:Backend,Frontend,Common',
            'title' => 'required|max:100',
            'route' => 'nullable|max:100',
            'icon' => 'nullable',
            'is_active' => 'boolean',
            'is_active_at' => 'nullable|date',
        ]);
        if ($validator->fails()) {
            return response()->json($validator->errors(), $this->errorStatus);
        }
        $module = new Module();
        $module->panel = $request->panel;
        $module->title = $request->title;
        $module->route = $request->route;
        $module->icon = $request->icon;
        $module->access = $request->access ? implode(",",$request->access) : null;
        $module->is_active = $request->is_active;
        $moduleCount = Module::count();
        $module->position = $moduleCount + 1;
        $module->is_active_at = currentDateTime();

        // $module->save();
        return response()->json(['message' => 'Module created successfully'], $this->successStatus);
    }

    public function update(Request $request, $moduleId)
    {
        $validator = validator()->make($request->all(), [
            'panel' => 'required|in:Backend,Frontend,Common',
            'title' => 'required|max:100',
            'route' => 'nullable|max:100',
            'icon' => 'nullable',
            'is_active' => 'boolean',
            'is_active_at' => 'nullable|date',
        ]);
        if ($validator->fails()) {
            return response()->json($validator->errors(), $this->errorStatus);
        }
        $module = Module::find($moduleId);
        if (!$module) {
            return response()->json(['message' => 'Module not found'], $this->warningStatus);
        }
        $module->panel = $request->panel;
        $module->title = $request->title;
        $module->route = $request->route;
        $module->icon = $request->icon;
        $module->access = $request->access ? implode(",",$request->access) : null;
        $module->is_active = $request->is_active;
        $module->is_active_at = $request->is_active_at ? $request->is_active_at : null;
        $module->save();
        return response()->json(['message' => 'Module updated successfully'], $this->successStatus);
    }
    public function delete(Request $request)
    {
        $moduleIds = $request->module_id;
        // echo '<pre>'; print_r($moduleIds); echo '</pre>';dd();

        if (empty($moduleIds) || array_filter($moduleIds) === []) {
            return response()->json(['message' => 'Invalid or empty module IDs provided'], $this->warningStatus);
        }

        Module::whereIn('id', $moduleIds)->delete();

        // return response()->json([$moduleIds], $this->successStatus);
        return response()->json(['message' => 'SuccessFully Deleted'], $this->successStatus);
    }

}
