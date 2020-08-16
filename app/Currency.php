<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Currency extends Model
{
    public const ATTR_ID   = 'id';
    public const ATTR_NAME = 'name';
    public const ATTR_SIGN = 'sign';
    public const ATTR_RATE = 'rate';

    protected $fillable = [
        self::ATTR_NAME,
        self::ATTR_SIGN,
        self::ATTR_RATE,
    ];

    /**
     * Get table name.
     *
     * @return string
     */
    public static function tableName(): string
    {
        return 'currencies';
    }
}
