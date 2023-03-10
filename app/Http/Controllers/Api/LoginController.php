<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Laravel\Socialite\Facades\Socialite;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;

class LoginController extends Controller
{
    public function login()
    {
        return Socialite::driver('twitch')->redirect();
    }

    public function callback(Request $request)
    {
        $user = Socialite::driver("twitch")->stateless()->user();
        
        $user = User::updateOrCreate([
            'twitch_id' => $user->id,
        ], [
            'username' => $user->name,
            'email' => $user->email,
            'twitch_token' => $user->token,
            'twitch_refresh_token' => $user->refreshToken,
            'expires_in' => Carbon::now()->addHour()
        ]);

        return redirect("/callback?token={$user->twitch_token}");
    }

    public function logout(Request $request)
    {
        $user = $request->user;
        $user->update([
            'twitch_token' => null,
            'twitch_refresh_token' => null,
            'expires_in' => null
        ]);
    }
}
