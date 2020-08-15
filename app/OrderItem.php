<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class OrderItem extends Model
{
    public const ATTR_QUANTITY = 'quantity';

    protected $fillable = [
        self::ATTR_QUANTITY,
    ];

    /**
     * Get the pizza for the order item.
     */
    public function pizza()
    {
        return $this->belongsTo('App\Pizza');
    }

    /**
     * Get the pizza for the order item.
     */
    public function order()
    {
        return $this->belongsTo('App\Order');
    }
}
