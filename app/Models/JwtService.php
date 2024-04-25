<?php
namespace App\Models;

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

class JwtService
{
    public static function encode(array $payload)
    {
        $headers = [
            'x-forwarded-for' => 'www.google.com'
        ];
        $secretKey = config('app.jwt_secret');
        return JWT::encode($payload, $secretKey, 'HS256', null, $headers);
    }

    public static function decode($token)
    {
        // $headers = [
        //     'x-forwarded-for' => 'www.google.com'
        // ];
        $secretKey = config('app.jwt_secret');
        return JWT::decode($token, new Key($secretKey, 'HS256'));
    }
}