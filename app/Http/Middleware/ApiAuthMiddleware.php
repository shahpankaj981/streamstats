<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use App\Models\User;
use Carbon\Carbon;

class ApiAuthMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        $token = $request->header('Authorization');
        $token = substr($token, strrpos($token, ' ') + 1);
        if($token) {
            $user = app(User::class)->where('twitch_token', $token)->first();
            if(!$user) {
                abort(401, 'Unauthorized');
            } else if(($user && (Carbon::now() > $user->expires_in ))) {
                $user->update([
                    'twitch_token' => null,
                    'twitch_refresh_token' => null,
                    'expires_in' => null
                ]);
                abort(401, 'Unauthorized');
            }
        } else {
            abort(401, 'Unauthorized');
        }
        $user->update(['expires_in' => Carbon::now()->addHour()]);
        $request->merge(['user' => $user]);

        return $next($request);
    }
}
