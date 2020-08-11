<?php

namespace App\Http\Controllers\Api\Pizzas;

use App\Http\Controllers\Controller;
use App\Pizza;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;

class Index extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param Request $request
     *
     * @return JsonResponse
     */
    public function __invoke(Request $request): JsonResponse
    {
        $query = DB::table(Pizza::tableName())
            ->select(
                [
                    Pizza::tableName() . '.' . Pizza::ATTR_ID,
                    Pizza::tableName() . '.' . Pizza::ATTR_NAME,
                    Pizza::tableName() . '.' . Pizza::ATTR_PRICE,
                    Pizza::tableName() . '.' . Pizza::ATTR_DESCRIPTION,
                    Pizza::tableName() . '.' . Pizza::ATTR_IMAGE,
                ]
            );

        $pizzas = $query->get()->toArray();

        return response()->json($pizzas, 200);
    }
}
