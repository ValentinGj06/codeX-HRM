<?php

namespace App\Http\Controllers;

use App\EmployeeEvents;


class EmployeeEventsController extends Controller
{
    public function index()
    {
        $employeeEvents = EmployeeEvents::paginate(15);


        return view('employee_events', compact('employeeEvents'));
    }
}
