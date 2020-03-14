<?php

namespace App\Http\Controllers;

use App\Day;
use App\Vacation;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;

class VacationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $userInfo = DB::table('user')
            ->join('userinfo', 'user.UserID', '=', 'userinfo.UserID')
            ->join('departments', 'user.DepartmentID', '=', 'departments.DepartmentID')
            ->join('firma', 'userinfo.FirmaID', '=', 'firma.FirmaID')
            ->where('user.UserID', '=', '598')
            ->select('user.Created', 'userinfo.DateEmp', 'userinfo.UserID', 'FirstName', 'LastName', 'departments.Name AS Department', 'firma.Name AS Company')
            ->first();

        $employeesPerDepartment = DB::table('user')
            ->join('userinfo', 'user.UserID', '=', 'userinfo.UserID')
            ->join('departments', 'user.DepartmentID', '=', 'departments.DepartmentID')
            ->join('firma', 'userinfo.FirmaID', '=', 'firma.FirmaID')
            ->where('departments.DepartmentID', '=', '21')
            ->where('user.Active', '=', '1')
            ->where('user.UserID', '!=', '598')
            ->select('FirstName', 'LastName', 'departments.Name AS Department', 'firma.Name AS Company')
            ->get();

        $departmentManager = DB::table('user')
            ->join('userinfo', 'user.UserID', '=', 'userinfo.UserID')
            ->join('departments', 'user.DepartmentID', '=', 'departments.DepartmentID')
            ->join('firma', 'userinfo.FirmaID', '=', 'firma.FirmaID')
            ->where('departments.DepartmentID', '=', '21')
            ->where('user.Active', '=', '1')
            ->where('userinfo.PrevPermis', '=', 'rakovoditel')
            ->select('FirstName', 'LastName', 'departments.Name AS Department', 'firma.Name AS Company')
            ->first();

        $shiftManagers = DB::table('user')
            ->join('userinfo', 'user.UserID', '=', 'userinfo.UserID')
            ->join('departments', 'user.DepartmentID', '=', 'departments.DepartmentID')
            ->join('firma', 'userinfo.FirmaID', '=', 'firma.FirmaID')
//            ->where('departments.DepartmentID', '=', '21')
            ->where('user.Active', '=', '1')
            ->where('userinfo.PrevPermis', '=', 'rakovoditel')
            ->select('FirstName', 'LastName', 'departments.Name AS Department')
            ->get();

        $usedDays = Day::where('user_id', '=', $userInfo->UserID)->pluck('used_days')->first();

        $userCreated = date_create($userInfo->DateEmp);
        $currentDate = date_create(date('Y-m-d'));

        $totalMonths = $userCreated->diff($currentDate)->m + ($userCreated->diff($currentDate)->y * 12);

        $monthsCurrentYear = ($userCreated->diff($currentDate)->m);

        $totalAnnualLeaveDays = floor($totalMonths / 6) * 10;
        $totalDays = $totalAnnualLeaveDays - $usedDays;
//        $day->user_id = $userInfo->UserID;

        Day::updateOrCreate([
            'user_id' => $userInfo->UserID
        ],
            [
            'annual_leave_days' => $totalAnnualLeaveDays,
        ]);


        return view('vacation.create', [
            'userInfo'               => $userInfo,
            'employeesPerDepartment' => $employeesPerDepartment,
            'departmentManager'      => $departmentManager,
            'shiftManagers'          => $shiftManagers,
            'monthsCurrentYear'      => $monthsCurrentYear,
            'totalMonths'            => $totalMonths,
            'totalDays'              => $totalDays,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $vacation = new Vacation($this->validateVacations($request));

        $request->validate([
            'vacation_date' => 'required',
        ]);

        $vacationDates = explode(",", $request->vacation_date);
        if ($vacationDates !== '') {
            $vacation->total_days = count($vacationDates);
            $vacation->save();
            $day = Day::where('user_id', '=', $request->user_id)->first();
            $day->used_days += count($vacationDates);
            $day->save();
        } else {
            return redirect('vacation')->with('warning', 'Please select days for vacation!');
        }

        foreach ($vacationDates as $vacationDate) {
            $data['vacation_date'] = Carbon::createFromFormat('d-M-Y', $vacationDate)->format('Y-m-d');
            $vacation->vacation_days()->create([
                'day_off' => ($data['vacation_date']),
                'user_id' => $request->user_id,
            ]);
        }

        return redirect('vacation')->with('success', 'Successfully created vacation!');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Vacation $vacation
     * @return \Illuminate\Http\Response
     */
    public function show(Vacation $vacation, Request $request)
    {
        print_r($request->all());
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Vacation $vacation
     * @return \Illuminate\Http\Response
     */
    public function edit(Vacation $vacation)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \App\Vacation $vacation
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Vacation $vacation)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Vacation $vacation
     * @return \Illuminate\Http\Response
     */
    public function destroy(Vacation $vacation)
    {
        //
    }

    protected function validateVacations(Request $request)
    {
        return $request->validate([
            'user_id'             => ['required', 'numeric'],
            'date_of_application' => ['required', 'date'],
            'full_name'           => ['required'],
            'company'             => ['required'],
            'department'          => ['required'],
            'replacement'         => ['required', 'string'],
            'department_manager'  => ['required'],
            'shift_manager'       => ['required', 'string'],
            'has_received'        => ['string'],
            'note'                => ['string']
        ]);
    }
}
