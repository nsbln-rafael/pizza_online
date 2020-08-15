<?php

namespace App\Http\Controllers\Api\Orders;

use App\Http\Controllers\Controller;
use App\Http\Resources\OrderResource;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;

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
        $user  = Auth::user();

        if (null !== $user) {
            $result = OrderResource::collection($user->orders);

            return response()->json($result, 200);
        }

        return response()->json('Unauthorised authentication failure', 401);
    }
}
