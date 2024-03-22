<?php

use App\Http\Resources\NutritionResource;
use App\Models\Nutrition;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Maatwebsite\Excel\Facades\Excel;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/nutritions', function () {
    return response()->json([
        "nutritions" => Nutrition::all()
    ]);
});


Route::post('/preview', function (Request $request) {
    return response()->json(new NutritionResource(Excel::toCollection(collect(), $request->file('file'))));
});


Route::prefix('nutrition')->group(function () {
    Route::post('save', function (Request $request) {
        try {


            $nutritions = collect($request->nutritions)->map(function ($item, $key) {
                $item['group_id'] = 1;
                return $item;
            });


            Nutrition::insert($nutritions->toArray());
            return response()->json([
                "message" => "Data berhasil disimpan"
            ]);
        } catch (Exception $e) {
            return response()->json([
                "message" => $e->getMessage()
            ]);
        }
//        return response()->json();
    });

    Route::patch('update', function (Request $request) {
        try {
            $nutritions = collect($request->nutritions);

            $nutritions->map(function ($item, $key) {
                Nutrition::where('id', $item['id'])->update($item);
            });

            return response()->json([
                "message" => "Data berhasil diupdate"
            ]);

        } catch (Exception $e) {
            return response()->json([
                "message" => $e->getMessage()
            ]);
        }
    });

});
