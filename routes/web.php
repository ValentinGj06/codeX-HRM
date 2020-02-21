<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
/* Employee routes */
Route::get('/employee', 'ListAllEmployeeController@index')->name('employee.index');
Route::post('/department_by_company', 'ListAllEmployeeController@department_by_company');
Route::post('/employee_by_department', 'ListAllEmployeeController@employee_by_department');
Route::get('/employee/{employee}', 'EmployeeController@index');
Route::get('/employees/events', 'EmployeeEventsController@index')->name('events.index');
Route::get('/employee/filtered/all', 'EmployeeFilteredController@index');
Route::post('/employee/filtered/all', 'EmployeeFilteredController@index');
    /* Vacation routes */
Route::get('/vacations', 'VacationController@index')->name('vacation.index');
Route::get('/vacation', 'VacationController@create')->name('vacation.create');
Route::post('/vacation/show', 'VacationController@show')->name('vacation.show');
    /* Overtime routes */
Route::get('/overtimes', 'OvertimeController@index')->name('overtime.index');
Route::get('/overtime', 'OvertimeController@create')->name('overtime.create');
