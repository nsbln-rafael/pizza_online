<?php

use App\Pizza;
use Illuminate\Database\Seeder;
use \Faker\Factory;
use Illuminate\Support\Facades\DB;

class PizzaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $dir     = 'public/images/';
        $factory = Factory::create();

        if (is_dir($dir)) {
            if ($dh = opendir($dir)){
                $counter = 1;

                while (false !== ($file = readdir($dh))){
                    if (preg_match('/jpg|jpeg/', $file)) {
                        DB::table('pizzas')->insert([
                            Pizza::ATTR_NAME        => "Pizza №{$counter}",
                            Pizza::ATTR_DESCRIPTION => $factory->text(300),
                            Pizza::ATTR_IMAGE       => $dir . $file,
                            Pizza::ATTR_PRICE       => $factory->randomFloat(2, 9, 20),
                        ]);

                        $counter++;
                    }
                }
                closedir($dh);
            }
        }
    }
}
