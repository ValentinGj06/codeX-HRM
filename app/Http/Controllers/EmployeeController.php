<?php

namespace App\Http\Controllers;

use App\Employee;
use Illuminate\Support\Facades\DB;

class EmployeeController extends Controller
{
    public function index(Employee $employee)
    {
//        $employee = Employee::findOrFail($id);

//        return json_encode($employee, JSON_INVALID_UTF8_IGNORE);
//        $data = $employeeEvents::all()->where('PSNID', $employee->PSNID)
//            ->where('EventTime', '>', '2019-11-13')
//            ->pluck('EventTime')->all();
        $currentDate = date("Y-m-t");
        $selectDate = date("Y-m-01");
//        $currentDate = '2020-01-20';
//        $selectDate = '2020-01-18';

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
                EIn.PSNID = $employee->PSNID
                AND EIn.ReaderNo = '1'
            )
            SELECT
                PSNID
                ,PSNNAME
                ,dt
                ,MIN(LogIn) AS FirstIn
                ,MAX(LogOut) AS LastOut
                ,CASE WHEN DeviceIdx = '1' THEN SUM(WorkingMinutes)/60.0
                WHEN DeviceIdx = '2' OR DeviceIdx = '3' THEN SUM(-WorkingMinutes)/60.0
                END AS WorkingHours
            FROM CTA
            WHERE dt BETWEEN '$selectDate' AND '$currentDate'
            GROUP BY PSNID, PSNNAME, dt, DeviceIdx
            ORDER BY PSNID, PSNNAME, dt
            ;");
//            dd($employeeHours);
        $employeeEvents = DB::connection('sqlsrv')->select("WITH CT AS (SELECT
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
                EIn.PSNID = $employee->PSNID
                AND EIn.ReaderNo = '1'
                )
            SELECT
                PSNID
                ,PSNNAME
                ,dt
                ,LogIn
                ,LogOut
                ,WorkingMinutes
            FROM CT
            WHERE dt BETWEEN '$selectDate' AND '$currentDate'
            ORDER BY LogIn 
            ;");
//        dd($employeeHours,$employeeEvents);
//        $employeeEvents = json_encode($employeeEvents);
//        return view('employee', compact('employee'), compact('employeeEvents'), compact('employeeHours'));
        return view('employee')->with([
            'employee' => $employee,
            'employeeEvents' => $employeeEvents,
            'employeeHours' => $employeeHours,
        ]);
    }
}