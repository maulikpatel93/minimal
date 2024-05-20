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

        // Get filters from the request
        $filters = $request->input('filters', []);

        // Apply status filter if provided and not set to 'all'
        if (isset($filters['status']['value']) && $filters['status']['value'] !== 'all') {
            $query->where('is_active', $filters['status']['value']);
        }

        // Apply name or route filter using a nested orWhere
        if (!empty($filters['q'])) {
            $query->where(function ($q) use ($filters) {
                $q->where('title', 'like', $filters['q'] . '%')
                    ->orWhere('route', 'like', $filters['q'] . '%');
            });
        }

        // Get filter items from the request
        $filterItems = $request->input('filter.items', []);

        foreach ($filterItems as $filter) {
            $field = isset($filter['field']) ? $filter['field'] : null;
            $operator = isset($filter['operator']) ? $filter['operator'] : null;
            $value = isset($filter['value']) ? $filter['value'] : null;

            switch ($operator) {
                case 'contains':
                    $query->where($field, 'like', '%' . $value . '%');
                    break;

                case 'equals':
                    $query->where($field, '=', $value);
                    break;

                case 'startsWith':
                    $query->where($field, 'like', $value . '%');
                    break;

                case 'endsWith':
                    $query->where($field, 'like', '%' . $value);
                    break;

                case 'isEmpty':
                    $query->whereNull($field)->orWhere($field, '');
                    break;

                case 'isNotEmpty':
                    $query->whereNotNull($field)->where($field, '!=', '');
                    break;

                case 'isAnyOf':
                    $query->whereIn($field, (array) $value);
                    break;

                default:
                    break;
            }
        }

        // Apply sorting
        $sorts = $request->input('sort', []);
        foreach ($sorts as $sort) {
            $field = $sort['field'];
            $direction = $sort['sort'];
            $query->orderBy($field, $direction);
        }

        $model = $query->paginate($limit);

        $successData = $model ? $model : [];
        return response()->json($successData, $this->successStatus);
    }
    public function moduleDropDownList()
    {
        $modules = Module::select('id', 'title')->where('is_active', 1)->get();

        $dropdownList = $modules->map(function ($module) {
            return [
                'value' => $module->id,
                'label' => $module->title
            ];
        })->toArray();

        return response()->json($dropdownList, $this->successStatus);
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
        $module->access = $request->access ? implode(",", $request->access) : null;
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
        $module->access = $request->access ? implode(",", $request->access) : null;
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
