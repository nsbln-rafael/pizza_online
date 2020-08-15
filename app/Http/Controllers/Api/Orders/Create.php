<?php

namespace App\Http\Controllers\Api\Orders;

use App\Http\Controllers\Controller;
use App\Order;
use App\OrderItem;
use App\Pizza;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class Create extends Controller
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
        $validator = Validator::make($request->all(), [
            Order::ATTR_NAME        => 'required|max:255',
            Order::ATTR_SURNAME     => 'required|max:255',
            Order::ATTR_PHONE       => 'required|max:255',
            Order::ATTR_ADDRESS     => 'required|max:255',
            Order::ATTR_ITEMS       => 'required|min:1',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors()->toJson(), 400);
        }

        $order = Order::create($validator->validated());
        $user  = Auth::user();
        $items = $request->get('items');

        if (null !== $user) {
            $order->user->associate($user);
        }

        foreach ($items as $item) {
            $pizzaId  = $item["pizza"]["id"];
            $quantity = $item["quantity"];
            $pizza    = Pizza::find($pizzaId);

            if (null !== $pizza) {
                $orderItem           = new OrderItem;
                $orderItem->quantity = $quantity;
                $orderItem->pizza()->associate($pizza);
                $orderItem->order()->associate($order);
                $orderItem->save();

                $order->total_price += $quantity * $pizza->price;
            }
        }

        $order->total_price += Order::DELIVERY_PRICE;
        $order->save();

        return response()->json($order, 201);
    }
}
