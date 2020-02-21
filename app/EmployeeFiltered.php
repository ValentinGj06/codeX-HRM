<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class EmployeeFiltered extends Model
{
    /* Using second database in sqlsrv MSSQL */
    protected $connection = 'sqlsrv';
}
