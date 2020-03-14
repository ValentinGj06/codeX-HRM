<?php

namespace App\Http\Controllers;

use App\Employee;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Collection;

class EmployeeFilteredController extends Controller
{
    public function index(Employee $employee, Request $request )
    {

        if(!empty($request->post('date_from') && $request->post('date_to'))) {
            $dateFrom = $request->post('date_from');
            $dateTo = $request->post('date_to');
            $whereDate = "dt BETWEEN '$dateFrom' AND '$dateTo'";
        } else {
            $currentDate = date("Y-m-d");
            $whereDate = "dt = '$currentDate'";
        }

        if(!empty($request->post('company'))) {
            $companySelected = $request->post('company');
            $whereCompany = "AND EIn.CMPID = $companySelected";
        } else {
            $whereCompany = "";
        }
        if(!empty($request->post('department'))) {
            $departmentSelected = $request->post('department');
            $whereDepartment = "AND EIn.DEPName = '$departmentSelected'";
        } else {
            $whereDepartment = "";
        }
        if(!empty($request->post('employee'))) {
            $employeeSelected = $request->post('employee');
            $whereEmployee = "AND EIn.PSNID = $employeeSelected";
        } else {
            $whereEmployee = "";
        }

        $employeeHours = DB::connection('sqlsrv')->select("WITH CTA AS (SELECT
            EIn.PSNID, EIn.PSNNAME
                ,CASE 
                WHEN (CAST(CA_Out.EventTime AS time) BETWEEN '00:00:00' AND '06:40:00') AND (CAST(EIn.EventTime AS time) BETWEEN '00:00:00' AND '05:44:00') THEN CAST(DATEADD(minute, -1310, EIn.EventTime) AS date) 
                ELSE CAST(DATEADD(minute, -0, EIn.EventTime) AS date) 
                END as dt
                ,EIn.EventTime AS LogIn
                ,CA_Out.EventTime AS LogOut
                ,DATEDIFF(minute, EIn.EventTime, CA_Out.EventTime) AS WorkingMinutes
                ,DeviceIdx
            FROM
                VIEW_EVENT_EMPLOYEE AS EIn
                CROSS APPLY
            (
                SELECT TOP(1) EOut.EventTime
                    FROM VIEW_EVENT_EMPLOYEE AS EOut
                    WHERE
                        EOut.PSNID = EIn.PSNID
                        AND EOut.ReaderNo = '2' AND EOut.DeviceIdx = EIn.DeviceIdx
                        AND EOut.EventTime >= EIn.EventTime
                    ORDER BY EOut.EventTime
                ) AS CA_Out
            WHERE
                EIn.ReaderNo = '1'
                $whereEmployee
                $whereCompany
                $whereDepartment
            ),
            WHC AS (SELECT 
               PSNID
               ,PSNNAME
               ,MIN(LogIn) AS FirstIn
               ,MAX(LogOut) AS LastOut
               ,CASE WHEN DeviceIdx = '1' THEN SUM(WorkingMinutes)/60.0
                WHEN DeviceIdx = '2' OR DeviceIdx = '3' THEN SUM(-WorkingMinutes)/60.0
                END AS WorkingHours
            FROM CTA
            WHERE $whereDate
            GROUP BY PSNID, PSNNAME, DeviceIdx
            )
            SELECT TOP 2 /* !!!PROVERI moze ke treba da se trgne (TOP 2 i ke raboti za site vraboteni) */
               PSNID
               ,PSNNAME
               ,MIN(FirstIn) AS FirstIn
               ,MAX(LastOut) AS LastOut
               ,SUM(WorkingHours) AS WorkingHours
            FROM WHC
            GROUP BY PSNID, PSNNAME
            ;");

        /*$employeeEvents = DB::connection('sqlsrv')->select("WITH CT AS (SELECT
            EIn.PSNID, EIn.PSNNAME
                ,CASE
                WHEN (CAST(CA_Out.EventTime AS time) BETWEEN '00:00:00' AND '06:40:00') AND (CAST(EIn.EventTime AS time) BETWEEN '00:00:00' AND '05:44:00') THEN CAST(DATEADD(minute, -1310, EIn.EventTime) AS date)
                ELSE CAST(DATEADD(minute, -0, EIn.EventTime) AS date)
                END as dt
                ,EIn.EventTime AS LogIn
                ,CA_Out.EventTime AS LogOut
                ,DATEDIFF(minute, EIn.EventTime, CA_Out.EventTime) AS WorkingMinutes
            FROM
                VIEW_EVENT_EMPLOYEE AS EIn
                CROSS APPLY
            (
                SELECT TOP(1) EOut.EventTime
                    FROM VIEW_EVENT_EMPLOYEE AS EOut
                    WHERE
                        EOut.PSNID = EIn.PSNID
                        AND EOut.ReaderNo = '2' AND EOut.DeviceIdx = EIn.DeviceIdx
                        AND EOut.EventTime >= EIn.EventTime
                    ORDER BY EOut.EventTime
                ) AS CA_Out
            WHERE
                 EIn.ReaderNo = '1'
                 $whereEmployee
                 $whereCompany
                 $whereDepartment
                )
            SELECT
                PSNID
                ,PSNNAME
                ,dt
                ,LogIn
                ,LogOut
                ,WorkingMinutes
            FROM CT
            WHERE $whereDate
            ORDER BY LogIn
            ;");*/
//        dd($employeeHours,$employeeEvents);

        return view('employee_filtered')->with([
            'employee' => $employee,
//            'employeeEvents' => $employeeEvents,
            'employeeHours' => $employeeHours,
            'dateFrom' => $request->post('date_from'),
            'dateTo' => $request->post('date_to')
        ]);
    }
    public function show(Request $request) {
        return $request->post();
    }
}
