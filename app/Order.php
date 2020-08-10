<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    public const ATTR_NAME        = 'name';
    public const ATTR_SURNAME     = 'surname';
    public const ATTR_ADDRESS     = 'address';
    public const ATTR_PHONE       = 'phone';
    public const ATTR_TOTAL_PRICE = 'total_price';

    protected $fillable = [
        self::ATTR_NAME,
        self::ATTR_SURNAME,
        self::ATTR_ADDRESS,
        self::ATTR_PHONE,
        self::ATTR_TOTAL_PRICE,
    ];
}
