<?php

namespace Database\Seeders;

use App\Models\Nutrition;
use Illuminate\Database\Seeder;

class NutritionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Nutrition::create(
            [
                'name' => 'Apel',
                'group_id' => 1,
                'energy' => 52,
                'water' => 86,
                'protein' => 0.3,
                'fat' => 0.2,
                'carbohydrates' => 14,
                'fibre' => 2.4,
                'alcohol' => 0,
                'pufa' => 0.1,
                'cholesterol' => 0,
                'vitamin_a' => 3,
                'carotene' => 0.04,
                'vitamin_e' => 0.3,
                'vitamin_b1' => 0.02,
                'vitamin_b2' => 0.02,
                'vitamin_b6' => 0.04,
                'fol_acid' => 3,
                'vitamin_c' => 5,
                'sodium' => 0,
                'potassium' => 150,
                'calcium' => 5,
                'magnesium' => 5,
                'phosphorus' => 10,
                'iron' => 0.3,
                'zinc' => 0.05,
            ],
        );

        Nutrition::create(
            [
                'name' => 'Bayam',
                'group_id' => 2,
                'energy' => 23,
                'water' => 92,
                'protein' => 2.9,
                'fat' => 0.4,
                'carbohydrates' => 1.6,
                'fibre' => 2.2,
                'alcohol' => 0,
                'pufa' => 0.1,
                'cholesterol' => 0,
                'vitamin_a' => 1110,
                'carotene' => 6660,
                'vitamin_e' => 1.4,
                'vitamin_b1' => 0.08,
                'vitamin_b2' => 0.15,
                'vitamin_b6' => 0.2,
                'fol_acid' => 130,
                'vitamin_c' => 50,
                'sodium' => 50,
                'potassium' => 460,
                'calcium' => 105,
                'magnesium' => 50,
                'phosphorus' => 50,
                'iron' => 2.5,
                'zinc' => 0.6,
            ],
        );

        Nutrition::create(
            [
                'name' => 'Pisang',
                'group_id' => 1,
                'energy' => 89,
                'water' => 74,
                'protein' => 1.1,
                'fat' => 0.3,
                'carbohydrates' => 22,
                'fibre' => 2.6,
                'alcohol' => 0,
                'pufa' => 0.1,
                'cholesterol' => 0,
                'vitamin_a' => 64,
                'carotene' => 38,
                'vitamin_e' => 0.3,
                'vitamin_b1' => 0.04,
                'vitamin_b2' => 0.1,
                'vitamin_b6' => 0.4,
                'fol_acid' => 20,
                'vitamin_c' => 9,
                'sodium' => 1,
                'potassium' => 350,
                'calcium' => 5,
                'magnesium' => 27,
                'phosphorus' => 26,
                'iron' => 0.3,
                'zinc' => 0.2,
            ],
        );

        Nutrition::create([
            'name' => 'Jeruk',
            'group_id' => 1,
            'energy' => 47,
            'water' => 86,
            'protein' => 1,
            'fat' => 0.1,
            'carbohydrates' => 9,
            'fibre' => 2.4,
            'alcohol' => 0,
            'pufa' => 0,
            'cholesterol' => 0,
            'vitamin_a' => 225,
            'carotene' => 1350,
            'vitamin_e' => 0.3,
            'vitamin_b1' => 0.08,
            'vitamin_b2' => 0.04,
            'vitamin_b6' => 0.06,
            'fol_acid' => 30,
            'vitamin_c' => 55,
            'sodium' => 0,
            'potassium' => 200,
            'calcium' => 40,
            'magnesium' => 11,
            'phosphorus' => 24,
            'iron' => 0.3,
            'zinc' => 0.1,
        ]);

        Nutrition::create([
            'name' => 'Brokoli',
            'group_id' => 2,
            'energy' => 34,
            'water' => 91,
            'protein' => 3.7,
            'fat' => 0.4,
            'carbohydrates' => 2.8,
            'fibre' => 2.6,
            'alcohol' => 0,
            'pufa' => 0.1,
            'cholesterol' => 0,
            'vitamin_a' => 1200,
            'carotene' => 7200,
            'vitamin_e' => 1.1,
            'vitamin_b1' => 0.06,
            'vitamin_b2' => 0.15,
            'vitamin_b6' => 0.4,
            'fol_acid' => 63,
            'vitamin_c' => 89,
            'sodium' => 33,
            'potassium' => 340,
            'calcium' => 47,
            'magnesium' => 24,
            'phosphorus' => 66,
            'iron' => 1.5,
            'zinc' => 0.5,

        ]);


    }
}
