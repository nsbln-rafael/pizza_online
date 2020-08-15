<?php

namespace App\Http\Resources;

use App\Order;
use Illuminate\Http\Resources\Json\JsonResource;

class OrderResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            Order::ATTR_ID          => $this->id,
            Order::ATTR_TOTAL_PRICE => $this->total_price,
            Order::ATTR_ITEMS       => OrderItemResource::collection($this->items),
        ];
    }
}
