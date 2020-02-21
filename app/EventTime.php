<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class EventTime extends Model
{
    /* Using second database in sqlsrv MSSQL */
    protected $connection = 'sqlsrv';
    protected $table = 'T_EVT_Event';

    public function employee()
    {
        return $this->belongsTo('App\EmployeeEvents');
    }
}
