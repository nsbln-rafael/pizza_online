<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class OrderItem extends Model
{
    public const ATTR_QUANTITY = 'quantity';
    public const ATTR_PIZZA    = 'pizza';

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

    /**
     * Get table name.
     *
     * @return string
     */
    public static function tableName(): string
    {
        return 'order_items';
    }
}
