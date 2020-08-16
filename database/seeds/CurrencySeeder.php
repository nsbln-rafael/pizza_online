<?php

use App\Currency;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CurrencySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $euro = [
            Currency::ATTR_NAME => "euro",
            Currency::ATTR_SIGN => "€",
            Currency::ATTR_RATE => 1,
        ];

        $dollar = [
            Currency::ATTR_NAME => "dollar",
            Currency::ATTR_SIGN => "$",
            Currency::ATTR_RATE => 1.18,
        ];

        DB::table('currencies')->insert([
            $euro,
            $dollar,
        ]);
    }
}
