<?php

namespace App\Http\Resources;

use Exception;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class NutritionResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {

//        dd();
        try {
            $data = collect(parent::toArray($request)[0])
                ->map(function ($value) {
                    return array_filter($value, function ($value) {
                        return $value !== null || $value === 0;
                    });
                })->map(function ($value) {
                    if (empty($value)) {
                        return null;
                    }
                    return collect($value)->values();
                })->filter()->values();


            dd($data);
            $result = [];


            foreach ($data as $idx => $item) {

//            if ($idx == 1) {
//                dd($item);
//            }
                $temp = [];
//                dd($item);
                if ($idx == 2) {
                    dd($item);
                }
                foreach ($item as $index => $value) {

                    $temp[$data[0][$index]] = $value;
                }

                $result[] = $temp;
            }

            dd($result);
            unset($result[0]);

            return $result;
        } catch (Exception $e) {
            return [
                "message" => $e->getMessage()
            ];
        }
    }
}
