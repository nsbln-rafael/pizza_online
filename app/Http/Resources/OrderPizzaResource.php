<?php

namespace App\Http\Resources;

use App\Pizza;
use Illuminate\Http\Resources\Json\JsonResource;

class OrderPizzaResource extends JsonResource
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
            Pizza::ATTR_NAME  => $this->name,
            Pizza::ATTR_PRICE => $this->price,
        ];
    }
}
