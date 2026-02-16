<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class order extends Model
{
    protected $fillable =[
        'order_id',
        'order_date',
        'status',
        'total_price'
    ];
}
