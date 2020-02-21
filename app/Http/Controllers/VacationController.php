<?php

namespace App\Http\Controllers;

use App\Vacation;
use Illuminate\Http\Request;
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
            ->select('FirstName', 'LastName', 'departments.Name AS Department', 'firma.Name AS Company')
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

        return view('vacation.create', [
            'userInfo'               => $userInfo,
            'employeesPerDepartment' => $employeesPerDepartment,
            'departmentManager'      => $departmentManager,
            'shiftManagers'          => $shiftManagers,
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
        //
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
}
