<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Vacation extends Model
{
    protected $table = 'hr_vacations';
    protected $guarded = [];
    public $timestamps = false;
//    protected $fillable = [
//
//        ];
    public function vacation_days() {
        return $this->hasMany(VacationDays::class);
    }
}
