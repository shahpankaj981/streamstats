<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Laravel\Socialite\Facades\Socialite;

class LoginController extends Controller
{
    public function login()
    {
        return Socialite::driver('twitch')->redirect();
    }

    public function callback(Request $request)
    {
        $user = Socialite::driver("twitch")->stateless()->user();
        // dd($user);
        // dd($request->all());

        return redirect('/');
    }
}
