<?php

namespace App\Http\Controllers;

use App\Overtime;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class OvertimeController extends Controller
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

        $departmentManager = DB::table('user')
            ->join('userinfo', 'user.UserID', '=', 'userinfo.UserID')
            ->join('departments', 'user.DepartmentID', '=', 'departments.DepartmentID')
            ->join('firma', 'userinfo.FirmaID', '=', 'firma.FirmaID')
            ->where('departments.DepartmentID', '=', '21')
            ->where('user.Active', '=', '1')
            ->where('userinfo.PrevPermis', '=', 'rakovoditel')
            ->select('FirstName', 'LastName', 'departments.Name AS Department', 'firma.Name AS Company')
            ->first();

        return view('overtime.create', [
            'userInfo'               => $userInfo,
            'departmentManager'      => $departmentManager,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Overtime  $overtime
     * @return \Illuminate\Http\Response
     */
    public function show(Overtime $overtime)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Overtime  $overtime
     * @return \Illuminate\Http\Response
     */
    public function edit(Overtime $overtime)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Overtime  $overtime
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Overtime $overtime)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Overtime  $overtime
     * @return \Illuminate\Http\Response
     */
    public function destroy(Overtime $overtime)
    {
        //
    }
}
