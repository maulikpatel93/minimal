<?php

use Carbon\Carbon;
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

if (!function_exists('UtcToLocal')) {
    function UtcToLocal($date, $format = "Y-m-d H:i:s", $timezone = "Asia/Kolkata")
    {
        return Carbon::parse($date)->timezone($timezone)->format($format);
    }
}

if (!function_exists('LocalToUtc')) {
    function LocalToUtc($date, $format = "Y-m-d H:i:s", $timezone = "Asia/Kolkata")
    {
        return Carbon::parse($date, $timezone)->timezone('UTC')->format($format);
    }
}

if (!function_exists('currentDateTime')) {
    function currentDateTime($format = 'Y-m-d H:i:s')
    {
        return Carbon::now()->format($format);
    }
}
if (!function_exists('currentDate')) {
    function currentDate($format = 'Y-m-d')
    {
        return Carbon::now()->format($format);
    }
}
if (!function_exists('currentTime')) {
    function currentTime($format = 'H:i:s')
    {
        return Carbon::now()->format($format);
    }
}

if (!function_exists('phpToExcelDateFormat')) {
    function phpToExcelDateFormat($fulldate, $from_format = 'd/m/Y')
    {
        $carbon_obj = Carbon::createFromFormat($from_format, $fulldate);
        $unix_timestamp = $carbon_obj->timestamp;
        $excel_timestamp = ($unix_timestamp / 86400) + 25569;
        $excel_timestamp_rounded = round($excel_timestamp);

        return $excel_timestamp_rounded; // 40543
    }
}

if (!function_exists('getController')) {
    function getControllerName()
    {
        $action = app('request')->route()->getAction();

        $controller = class_basename($action['controller']);

        list($controller, $action) = explode('@', $controller);
        $current = strtolower(str_replace('Controller', '', $controller));
        return $current;
    }
}

if (!function_exists('getAction')) {
    function getActionName()
    {
        $action = app('request')->route()->getAction();

        $controller = class_basename($action['controller']);

        list($controller, $action) = explode('@', $controller);

        return $action;
    }
}

if (!function_exists('MinutesToHours')) {
    function MinutesToHours($minutes)
    {
        if ($minutes) {
            $hours = intdiv($minutes, 60);
            $minutes = $minutes % 60;
            $timeFormat = sprintf('%02d:%02d', $hours, $minutes);
            return $timeFormat;
        }
        return "";
    }
}

if (!function_exists('HoursToMinutes')) {
    function HoursToMinutes($hours)
    {
        if ($hours) {
            $from = date('Y-m-d 00:00:00');
            $to = date('Y-m-d ' . $hours . ':00');
            $diff = strtotime($to) - strtotime($from);
            $minutes = $diff / 60;
            return (int) $minutes;
        }
        return "";
    }
}

if (!function_exists('localtimezone')) {
    function localtimezone()
    {
        return auth()->user() ? auth()->user()->timezone : config('app.local_timezone');
    }
}

if (!function_exists('storageDate')) {
    function storageDate()
    {
        return date('Y') . '/' . date('m') . '/' . date('d');
    }
}

if (!function_exists('mime_type')) {
    function mime_type($filename)
    {

        $mime_types = array(
            'txt' => 'text/plain',
            'htm' => 'text/html',
            'html' => 'text/html',
            'css' => 'text/css',
            'json' => array('application/json', 'text/json'),
            'xml' => 'application/xml',
            'swf' => 'application/x-shockwave-flash',
            'flv' => 'video/x-flv',

            'hqx' => 'application/mac-binhex40',
            'cpt' => 'application/mac-compactpro',
            'csv' => array('text/x-comma-separated-values', 'text/comma-separated-values', 'application/octet-stream', 'application/vnd.ms-excel', 'application/x-csv', 'text/x-csv', 'text/csv', 'application/csv', 'application/excel', 'application/vnd.msexcel'),
            'bin' => 'application/macbinary',
            'dms' => 'application/octet-stream',
            'lha' => 'application/octet-stream',
            'lzh' => 'application/octet-stream',
            'exe' => array('application/octet-stream', 'application/x-msdownload'),
            'class' => 'application/octet-stream',
            'so' => 'application/octet-stream',
            'sea' => 'application/octet-stream',
            'dll' => 'application/octet-stream',
            'oda' => 'application/oda',
            'ps' => 'application/postscript',
            'smi' => 'application/smil',
            'smil' => 'application/smil',
            'mif' => 'application/vnd.mif',
            'wbxml' => 'application/wbxml',
            'wmlc' => 'application/wmlc',
            'dcr' => 'application/x-director',
            'dir' => 'application/x-director',
            'dxr' => 'application/x-director',
            'dvi' => 'application/x-dvi',
            'gtar' => 'application/x-gtar',
            'gz' => 'application/x-gzip',
            'php' => 'application/x-httpd-php',
            'php4' => 'application/x-httpd-php',
            'php3' => 'application/x-httpd-php',
            'phtml' => 'application/x-httpd-php',
            'phps' => 'application/x-httpd-php-source',
            'js' => array('application/javascript', 'application/x-javascript'),
            'sit' => 'application/x-stuffit',
            'tar' => 'application/x-tar',
            'tgz' => array('application/x-tar', 'application/x-gzip-compressed'),
            'xhtml' => 'application/xhtml+xml',
            'xht' => 'application/xhtml+xml',
            'bmp' => array('image/bmp', 'image/x-windows-bmp'),
            'gif' => 'image/gif',
            'jpeg' => array('image/jpeg', 'image/pjpeg'),
            'jpg' => array('image/jpeg', 'image/pjpeg'),
            'jpe' => array('image/jpeg', 'image/pjpeg'),
            'png' => array('image/png', 'image/x-png'),
            'tiff' => 'image/tiff',
            'tif' => 'image/tiff',
            'shtml' => 'text/html',
            'text' => 'text/plain',
            'log' => array('text/plain', 'text/x-log'),
            'rtx' => 'text/richtext',
            'rtf' => 'text/rtf',
            'xsl' => 'text/xml',
            'docx' => 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            'xlsx' => 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            'word' => array('application/msword', 'application/octet-stream'),
            'xl' => 'application/excel',
            'eml' => 'message/rfc822',

            // images
            'png' => 'image/png',
            'jpe' => 'image/jpeg',
            'jpeg' => 'image/jpeg',
            'jpg' => 'image/jpeg',
            'gif' => 'image/gif',
            'bmp' => 'image/bmp',
            'ico' => 'image/vnd.microsoft.icon',
            'tiff' => 'image/tiff',
            'tif' => 'image/tiff',
            'svg' => 'image/svg+xml',
            'svgz' => 'image/svg+xml',

            // archives
            'zip' => array('application/x-zip', 'application/zip', 'application/x-zip-compressed'),
            'rar' => 'application/x-rar-compressed',
            'msi' => 'application/x-msdownload',
            'cab' => 'application/vnd.ms-cab-compressed',

            // audio/video
            'mid' => 'audio/midi',
            'midi' => 'audio/midi',
            'mpga' => 'audio/mpeg',
            'mp2' => 'audio/mpeg',
            'mp3' => array('audio/mpeg', 'audio/mpg', 'audio/mpeg3', 'audio/mp3'),
            'aif' => 'audio/x-aiff',
            'aiff' => 'audio/x-aiff',
            'aifc' => 'audio/x-aiff',
            'ram' => 'audio/x-pn-realaudio',
            'rm' => 'audio/x-pn-realaudio',
            'rpm' => 'audio/x-pn-realaudio-plugin',
            'ra' => 'audio/x-realaudio',
            'rv' => 'video/vnd.rn-realvideo',
            'wav' => array('audio/x-wav', 'audio/wave', 'audio/wav'),
            'mpeg' => 'video/mpeg',
            'mpg' => 'video/mpeg',
            'mpe' => 'video/mpeg',
            'qt' => 'video/quicktime',
            'mov' => 'video/quicktime',
            'avi' => 'video/x-msvideo',
            'movie' => 'video/x-sgi-movie',

            // adobe
            'pdf' => 'application/pdf',
            'psd' => array('image/vnd.adobe.photoshop', 'application/x-photoshop'),
            'ai' => 'application/postscript',
            'eps' => 'application/postscript',
            'ps' => 'application/postscript',

            // ms office
            'doc' => 'application/msword',
            'rtf' => 'application/rtf',
            'xls' => array('application/excel', 'application/vnd.ms-excel', 'application/msexcel'),
            'ppt' => array('application/powerpoint', 'application/vnd.ms-powerpoint'),

            // open office
            'odt' => 'application/vnd.oasis.opendocument.text',
            'ods' => 'application/vnd.oasis.opendocument.spreadsheet',
        );

        $ext = explode('.', $filename);
        $ext = strtolower(end($ext));

        if (array_key_exists($ext, $mime_types)) {
            return (is_array($mime_types[$ext])) ? $mime_types[$ext][0] : $mime_types[$ext];
        } else if (function_exists('finfo_open')) {
            if (file_exists($filename)) {
                $finfo = finfo_open(FILEINFO_MIME);
                $mimetype = finfo_file($finfo, $filename);
                finfo_close($finfo);
                return $mimetype;
            }
        }

        return 'application/octet-stream';
    }
}

if (!function_exists('IsUrl')) {
    function IsUrl($uri)
    {
        if (empty($uri)) {
            return false;
        }
        if (filter_var($uri, FILTER_VALIDATE_URL)) {
            return true;
        }
        return false;
    }
}

if (!function_exists('GetHashtag')) {
    function sanitize_output($buffer)
    {
        $search = array(
            '/\>[^\S ]+/s', // strip whitespaces after tags, except space
            '/[^\S ]+\</s', // strip whitespaces before tags, except space
            '/(\s)+/s', // shorten multiple whitespace sequences
            '/<!--(.|\s)*?-->/',
            // Remove HTML comments
        );
        $replace = array(
            '>',
            '<',
            '\\1',
            '',
        );
        $buffer = preg_replace($search, $replace, $buffer);
        return $buffer;
    }
}
if (!function_exists('generate_string')) {
    function generate_string($input, $strength = 16)
    {
        $input_length = strlen($input);
        $random_string = '';
        for ($i = 0; $i < $strength; $i++) {
            $random_character = $input[mt_rand(0, $input_length - 1)];
            $random_string .= $random_character;
        }

        return $random_string;
    }
}

if (!function_exists('startsWith')) {
    function startsWith($string, $startString = "")
    {

        $len = strlen($startString);
        return (substr($string, 0, $len) === $startString);
    }
}

if (!function_exists('endsWith')) {
    function endsWith($string, $endString)
    {
        $len = strlen($endString);
        if ($len == 0) {
            return true;
        }
        return (substr($string, -$len) === $endString);
    }
}

/**
 * This will parse the money string
 *
 * For example 1, 234, 456.00 will be converted to 123456.00
 *
 * @return
 */
if (!function_exists('parseMoney')) {
    function parseMoney(string $money): float
    {
        $money = preg_replace('/[ ,]+/', '', $money);
        return number_format((float) $money, 2, '.', '');
    }
}

if (!function_exists('initials')) {
    function initials($str)
    {
        $ret = '';
        if (!empty($str)) {
            foreach (explode(' ', $str) as $word) {
                // Check if the word is not empty and has at least one character
                if (!empty($word)) {
                    // Convert the first character of each word to uppercase
                    $ret .= strtoupper($word[0]);
                }
            }
        }
        return $ret;
    }
}

/*
// Returns input with 7 zeros padded on the left
echo invoice_num(1); // Output: 0000001
// Returns input with 10 zeros padded
echo invoice_num(1, 10); // Output: 0000000001
// Returns input with prefixed F- along with 7 zeros padded
echo invoice_num(1, 7, "F-"); // Output: F-0000001
// Returns input with prefixed F- along with 10 zeros padded
echo invoice_num(1, 10, "F-"); // Output: F-0000000001
 */
if (!function_exists('invoice_num')) {
    function invoice_num($input, $pad_len = 7, $prefix = null)
    {
        // if ($pad_len <= strlen($input))
        //     trigger_error('<strong>$pad_len</strong> cannot be less than or equal to the length of <strong>$input</strong> to generate invoice number', E_USER_ERROR);

        if (is_string($prefix)) {
            return sprintf("%s%s", $prefix, str_pad($input, $pad_len, "0", STR_PAD_LEFT));
        }

        return str_pad($input, $pad_len, "0", STR_PAD_LEFT);
    }
}


if (!function_exists('getNumberOfSMSsegments')) {
    function getNumberOfSMSsegments($text, $MaxSegments = 6)
    {
        /*
http://en.wikipedia.org/wiki/SMS

Larger content (concatenated SMS, multipart or segmented SMS, or "long SMS") can be sent using multiple messages,
in which case each message will start with a user data header (UDH) containing segmentation information.
Since UDH is part of the payload, the number of available characters per segment is lower:
153 for 7-bit encoding,
134 for 8-bit encoding and
67 for 16-bit encoding.
The receiving handset is then responsible for reassembling the message and presenting it to the user as one long message.
While the standard theoretically permits up to 255 segments,[35] 6 to 8 segment messages are the practical maximum,
and long messages are often billed as equivalent to multiple SMS messages. See concatenated SMS for more information.
Some providers have offered length-oriented pricing schemes for messages, however, the phenomenon is disappearing.
*/
        $TotalSegment = 0;
        $textlen = mb_strlen($text);
        if ($textlen == 0) return false; //I can see most mobile devices will not allow you to send empty sms, with this check we make sure we don't allow empty SMS

        if (isGsm7bit($text)) { //7-bit
            $SingleMax = 160;
            $ConcatMax = 153;
        } else { //UCS-2 Encoding (16-bit)
            $SingleMax = 70;
            $ConcatMax = 67;
        }

        if ($textlen <= $SingleMax) {
            $TotalSegment = 1;
        } else {
            $TotalSegment = ceil($textlen / $ConcatMax);
        }

        if ($TotalSegment > $MaxSegments) return false; //SMS is very big.
        return $TotalSegment;
    }
}
if (!function_exists('isGsm7bit')) {
    function isGsm7bit($text)
    {
        $gsm7bitChars = "\\\@£\$¥èéùìòÇ\nØø\rÅåΔ_ΦΓΛΩΠΨΣΘΞÆæßÉ !\"#¤%&'()*+,-./0123456789:;<=>?¡ABCDEFGHIJKLMNOPQRSTUVWXYZÄÖÑÜ§¿abcdefghijklmnopqrstuvwxyzäöñüà^{}[~]|€";
        $textlen = mb_strlen($text);
        for ($i = 0; $i < $textlen; $i++) {
            if ((strpos($gsm7bitChars, $text[$i]) == false) && ($text[$i] != "\\")) {
                return false;
            } //strpos not     able to detect \ in string
        }
        return true;
    }
}
if (!function_exists('groupChunk')) {
    function groupChunk($modelData)
    {
        $group = array();
        if ($modelData) {
            $data = array_merge([0], $modelData);
            for ($i = 0; $i < count($data) - 1; $i++) {
                $subarray = array($data[$i], $data[$i + 1]);
                array_push($group, $subarray);
            }
        }
        return $group;
    }
}

if (!function_exists('addressToGeocode')) {
    function addressToGeocode($address)
    {

        $formatted_address = urlencode($address);

        $apiKey = config('app.google_api_key');
        // echo $apiKey; exit;
        // Construct the URL for the Geocoding API
        $url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' . $formatted_address . '&key=' . $apiKey;

        // Initialize cURL session
        $ch = curl_init($url);

        // Set cURL options
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        // Execute cURL session and get the response
        $response = curl_exec($ch);

        // Check for errors
        if (curl_errno($ch)) {
            echo 'cURL error: ' . curl_error($ch);
        }

        // Close cURL session
        curl_close($ch);

        // Decode the JSON response
        $result = json_decode($response, true);

        // Check if the request was successful
        if ($result['status'] === 'OK') {
            // Access the desired information from the response
            $latitude = $result['results'][0]['geometry']['location']['lat'];
            $longitude = $result['results'][0]['geometry']['location']['lng'];
            $addressComponents = getAddressComponents($result);

            return $addressComponents;
            // echo '<pre>';
            // print_r($addressComponents);
            // echo '<pre>';
            // dd();

            // // Output the results
            // echo "Latitude: $latitude\n";
            // echo "Longitude: $longitude\n";
        } else {
            // Handle the error
            // echo 'Geocoding API request failed. Status: ' . $result['status'];
            return [];
        }
    }
}
if (!function_exists('getAddressComponents')) {
    function getAddressComponents($geocodingData)
    {
        $addressComponents = array(
            'line1' => '',
            'line2' => '',
            'postal_code' => '',
            'city' => '',
            'state' => '',
            'country' => '',
        );

        foreach ($geocodingData['results'][0]['address_components'] as $component) {
            $types = $component['types'];
            $longName = $component['long_name'];
            $shortName = $component['short_name'];

            if (in_array('street_number', $types)) {
                $addressComponents['line1'] = $longName;
            } elseif (in_array('route', $types)) {
                $addressComponents['line2'] = $longName;
            } elseif (in_array('postal_code', $types)) {
                $addressComponents['postal_code'] = $longName;
            } elseif (in_array('locality', $types)) {
                $addressComponents['city'] = $longName;
            } elseif (in_array('administrative_area_level_1', $types)) {
                $addressComponents['state'] = $longName;
            } elseif (in_array('country', $types)) {
                $addressComponents['country'] = $shortName;
            }
        }

        return $addressComponents;
    }
}
