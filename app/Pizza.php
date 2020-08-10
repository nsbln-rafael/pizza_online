<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Pizza extends Model
{
    public const ATTR_ID          = 'id';
    public const ATTR_NAME        = 'name';
    public const ATTR_DESCRIPTION = 'description';
    public const ATTR_IMAGE       = 'image';
    public const ATTR_PRICE       = 'price';

    protected $fillable = [
        self::ATTR_NAME,
        self::ATTR_DESCRIPTION,
        self::ATTR_IMAGE,
        self::ATTR_PRICE,
    ];

    /**
     * Get table name.
     *
     * @return string
     */
    public static function tableName(): string
    {
        return 'pizzas';
    }
}
