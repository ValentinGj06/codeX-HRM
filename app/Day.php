<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Day extends Model
{
    protected $table = 'hr_days';
    protected $guarded = [];
    public $timestamps = false;

    public function user() {
        return $this->belongsTo(User::class);
    }
}
