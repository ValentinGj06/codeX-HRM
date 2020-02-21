<?php

namespace App\Http\Controllers;

use App\ListAllEmployee;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ListAllEmployeeController extends Controller
{
    public function index()
    {
        $allEmployee = ListAllEmployee::paginate(10);

        return view('list_all_employee', compact('allEmployee'));
    }

    public function department_by_company(Request $request)
    {
        $companyId = $request->post('companyId');
        $employeeByCompany = DB::connection('sqlsrv')->select("SELECT DEPName FROM ALL_EMPLOYEES
                                               WHERE CMPID = $companyId");

        return $employeeByCompany;

    }

    public function employee_by_department(Request $request)
    {
        $department = $request->post('department');
        $employeeByDepartment = DB::connection('sqlsrv')->select("SELECT PSNID, PSNNAME FROM ALL_EMPLOYEES
                                               WHERE DEPName = '$department'");

        return $employeeByDepartment;

    }
}
