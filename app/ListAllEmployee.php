<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ListAllEmployee extends Model
{
    /* Using second database in sqlsrv MSSQL */
    protected $connection = 'sqlsrv';
    protected $table = 'ALL_EMPLOYEES';
}
