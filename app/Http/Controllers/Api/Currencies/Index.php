<?php

namespace App\Http\Controllers\Api\Currencies;

use App\Currency;
use App\Http\Controllers\Controller;
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
        $query = DB::table(Currency::tableName())
            ->select(
                [
                    Currency::tableName() . '.' . Currency::ATTR_ID,
                    Currency::tableName() . '.' . Currency::ATTR_NAME,
                    Currency::tableName() . '.' . Currency::ATTR_SIGN,
                    Currency::tableName() . '.' . Currency::ATTR_RATE,
                ]
            );

        $currencies = $query->get()->toArray();

        return response()->json($currencies, 200);
    }
}
