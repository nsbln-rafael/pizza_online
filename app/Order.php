<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    public const ATTR_ID          = 'id';
    public const ATTR_NAME        = 'name';
    public const ATTR_SURNAME     = 'surname';
    public const ATTR_ADDRESS     = 'address';
    public const ATTR_PHONE       = 'phone';
    public const ATTR_TOTAL_PRICE = 'total_price';

    public const ATTR_ITEMS       = 'items';

    public const DELIVERY_PRICE    = 2;

    protected $fillable = [
        self::ATTR_NAME,
        self::ATTR_SURNAME,
        self::ATTR_ADDRESS,
        self::ATTR_PHONE,
        self::ATTR_TOTAL_PRICE,
    ];

    /**
     * Get the items for the order.
     */
    public function items()
    {
        return $this->hasMany('App\OrderItem');
    }

    /**
     * Get the pizzas for the order.
     */
    public function pizzas()
    {
        return $this->belongsToMany('App\Pizza', OrderItem::tableName());
    }

    /**
     * Get the items for the order.
     */
    public function user()
    {
        return $this->belongsTo('App\User');
    }

    /**
     * Get table name.
     *
     * @return string
     */
    public static function tableName(): string
    {
        return 'orders';
    }
}
