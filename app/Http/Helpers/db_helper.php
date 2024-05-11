<?php

// if (!function_exists('settings')) {
//     function settings($name, $getvalue)
//     {
//         $settings = Settings::where('is_active', 1)->where('name', $name)->first();
//         if ($getvalue) {
//             if ($settings->type = "File") {
//                 return $settings->storage_url . '/' . $settings->value;
//             }
//             return $settings->value;
//         }
//         return $settings;
//     }
// }

// if (!function_exists('taxPrice')) {
//     function taxPrice($cost = "")
//     {
//         $tax = Tax::where(['name' => 'GST', 'is_active' => 1])->first();
//         $taxpercentage = $tax ? $tax->percentage : 0;
//         if ($cost && $taxpercentage) {
//             // $taxpercentage = ($cost * $taxpercentage / 100);
//             $taxpercentage = ($cost / $taxpercentage);
//         }
//         return $taxpercentage;
//         // return number_format($taxpercentage, 2);
//     }
// }

// if (!function_exists('generateBarcodeNumber')) {
//     function generateBarcodeNumber()
//     {
//         $number = mt_rand(1000000000, 9999999999); // better than rand()

//         // call the same function if the barcode exists already
//         if (barcodeNumberExists($number)) {
//             return generateBarcodeNumber();
//         }

//         // otherwise, it's valid and can be used
//         return $number;
//     }
// }
// if (!function_exists('barcodeNumberExists')) {
//     function barcodeNumberExists($number)
//     {
//         // query the database and return a boolean
//         // for instance, it might look like this in Laravel
//         return Products::where('barcode', $number)->exists();
//     }
// }