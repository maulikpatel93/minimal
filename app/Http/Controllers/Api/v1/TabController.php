<?php

namespace App\Http\Controllers\Api\v1;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Tab;

class TabController extends Controller
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

        $query = Tab::select('*')->with(['module:id,title','submodule:id,title']);

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
        $submodel = $query->paginate($limit);
        $successData = $submodel ? $submodel : [];

        return response()->json($successData, $this->successStatus);
    }
    public function detail(Request $request, $SubModuleId)
    {
        $requestAll = $request->all();
        $successData = Tab::where('id', $SubModuleId)->where('is_active', 1)->first();
        return response()->json($successData, $this->successStatus);
    }
    public function create(Request $request)
    {
        $validator = validator()->make($request->all(), [
            'panel' => 'required|in:Backend,Frontend,Common',
            'module_id' => 'required|exists:modules,id',
            'title' => 'required|max:100',
            'route' => 'nullable|max:100',
            'icon' => 'nullable',
            'is_active' => 'boolean',
            'is_active_at' => 'nullable|date',
        ]);
        if ($validator->fails()) {
            return response()->json($validator->errors(), $this->errorStatus);
        }
        $SubModule = new Tab();
        $SubModule->panel = $request->panel;
        $SubModule->title = $request->title;
        $SubModule->route = $request->route;
        $SubModule->icon = $request->icon;
        $SubModule->module_id = $request->module_id;
        $SubModule->access = $request->access ? implode(",",$request->access) : null;
        $SubModule->is_active = $request->is_active;
        $SubModule->is_active_at = currentDateTime();
        $submoduleCount = Tab::count();
        $SubModule->position = $submoduleCount + 1;
        $SubModule->save();
        return response()->json(['message' => 'SubModule created successfully'], $this->successStatus);
    }

    public function update(Request $request, $SubModuleId)
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
        $SubModule = Tab::find($SubModuleId);
        if (!$SubModule) {
            return response()->json(['message' => 'SubModule not found'], $this->warningStatus);
        }
        $SubModule->panel = $request->panel;
        $SubModule->title = $request->title;
        $SubModule->route = $request->route;
        $SubModule->icon = $request->icon;
        $SubModule->access = $request->access ? implode(",",$request->access) : null;
        $SubModule->is_active = $request->is_active;
        $SubModule->is_active_at = $request->is_active_at ? $request->is_active_at : null;
        $SubModule->save();
        return response()->json(['message' => 'SubModule updated successfully'], $this->successStatus);
    }
    public function delete(Request $request)
    {
        $SubModuleIds = $request->SubModule_id;
        // echo '<pre>'; print_r($SubModuleIds); echo '</pre>';dd();

        if (empty($SubModuleIds) || array_filter($SubModuleIds) === []) {
            return response()->json(['message' => 'Invalid or empty SubModule IDs provided'], $this->warningStatus);
        }

        Tab::whereIn('id', $SubModuleIds)->delete();

        // return response()->json([$SubModuleIds], $this->successStatus);
        return response()->json(['message' => 'SuccessFully Deleted'], $this->successStatus);
    }

}
