<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class EmployeeEvents extends Model
{
    /* Using second database in sqlsrv MSSQL */
    protected $connection = 'sqlsrv';
    protected $table = 'view_event_employee';

    public function eventTime()
    {
        return $this->hasMany('App\EventTime');
    }
}
