<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class VacationDays extends Model
{
    protected $table = 'hr_vacation_days';
    protected $guarded = [];
    public $timestamps = false;

    public function vacation() {
        return $this->belongsTo(Vacation::class);
    }
}
