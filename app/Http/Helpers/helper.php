<?php

use Firebase\JWT\JWT;

if (!function_exists('jwtEncode')) {
    /**
     * Return the route to the "home" page depending on authentication/authorization is_active.
     *
     * @return string
     */
    function jwtEncode(array $payload)
    {
        return JWT::encode($payload, $this->secretKey);
    }
}

if (!function_exists('jwtDecode')) {
    /**
     * Return the route to the "home" page depending on authentication/authorization is_active.
     *
     * @return string
     */
    function jwtDecode($token)
    {
        return JWT::decode($token, $this->secretKey, ['HS256']);
    }
}

