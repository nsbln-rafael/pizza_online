<?php

namespace App\Http\Resources;

use App\OrderItem;
use Illuminate\Http\Resources\Json\JsonResource;

class OrderItemResource extends JsonResource
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
            OrderItem::ATTR_QUANTITY => $this->quantity,
            OrderItem::ATTR_PIZZA => $this->pizza,
        ];
    }
}
