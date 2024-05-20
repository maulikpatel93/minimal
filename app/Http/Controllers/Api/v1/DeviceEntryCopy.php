public function login(Request $request)
    {
        $requestAll = $request->all();
        $validator = Validator::make($request->all(), [
            'phone_code' => 'required|regex:/^\+[0-9]{1,2}$/',
            'phone_number' => 'required|regex:/^[0-9]{3}[0-9]{3}[0-9]{4}$/',
            'type' => 'required'
        ]);
        $phone_number = $request->phone_code . '-' . $request->phone_number;
        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], $this->errorStatus);
        }
        $phone_number_user = User::where(['phone_number' => $phone_number])->first();
        if (empty($phone_number_user)) {
            return response()->json(['message' => __('messages.user_phone_number_not_available')], $this->errorStatus);
        } else {
            if ($phone_number_user->is_active === 0) {
                return response()->json(['message' => __('messages.user_account_inactive')], $this->errorStatus);
            }
            if ($phone_number_user->is_login === 0) {
                return response()->json(['message' => __('messages.user_credential_not_allow')], $this->errorStatus);
            }
        }
        $type = $request->type;
        if (empty($request->otp) && $type === "sms") {
            //Sms Implementation Code start
            $otp_user = $phone_number_user;
            $phone_number_otp = mt_rand(1000, 9999);
            $otp_user->phone_number_otp = $phone_number_otp;
            $otp_user->save();
            $successData = [];
            $successData['phone_number'] = $otp_user->phone_number;
            $successData['otp'] = $otp_user->phone_number_otp;
            //Sms Implementation Code end
            return response()->json($successData, $this->successStatus);
        }
        if ($type === "otpverify") {
            $validator = Validator::make($request->all(), [
                'phone_number' => 'required|regex:/^[0-9]{3}[0-9]{3}[0-9]{4}$/',
                'otp' => 'required',
            ]);
            if ($validator->fails()) {
                return response()->json(['error' => $validator->errors()], $this->errorStatus);
            }
            $otpVerifyAccount = User::where(['is_active' => 1, 'phone_number' => $phone_number, 'phone_number_otp' => $request->otp])->count();
            if (empty($otpVerifyAccount)) {
                return response()->json(['message' => __('messages.user_otp_wrong')], $this->errorStatus);
            }
            // return response()->json(['message' => __('messages.user_otp_matched')], $this->createdStatus);
        }
        // if ($type === "pin") {
        //     $validator = Validator::make($request->all(), [
        //         'phone_number' => 'required|regex:/^[0-9]{3}[0-9]{3}[0-9]{4}$/',
        //         'pin' => 'required',
        //     ]);
        //     if ($validator->fails()) {
        //         return response()->json(['error' => $validator->errors()], $this->errorStatus);
        //     }
        // }
        $credentials = [
            'phone_number' => $phone_number,
            'password' => $request->otp,
            'is_login' => 1,
            'is_active' => 1,
            'phone_number_verified' => 1,
        ];
        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            $successData = [];
            $token = $user->createToken($user->id)->accessToken;
            $successData['token'] = $token;
            $successData['auth_key'] = $user->auth_key;
            $successData['id'] = $user->id;
            return response()->json($successData, $this->successStatus);
        } else {
            $unVerifyAccount = User::where(['is_active' => 0, 'phone_number' => $phone_number])->count();
            if ($unVerifyAccount > 0) {
                return response()->json(['message' => __('messages.user_account_inactive')], $this->errorStatus);
            }
            $ApprovedAccount = User::where(['is_login' => 1, 'phone_number' => $phone_number])->count();
            if (empty($ApprovedAccount)) {
                return response()->json(['message' => __('messages.user_not_approved')], $this->errorStatus);
            }
            return response()->json(['message' => __('messages.user_pin_wrong')], $this->errorStatus);
        }
    }

    public function logout(Request $request)
    {
        $request->user()->token()->revoke();
        if ($request->everywhere) {
            foreach ($request->user()->tokens()->whereRevoked(0)->get() as $token) {
                $token->revoke();
            }
        }
        return response()->json(['status' => $this->successStatus, 'message' => 'success']);
    }