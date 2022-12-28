<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use App\Models\User;

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
                abort(400, 'Unauthorized');
            }
        } else {
            abort(400, 'Unauthorized');
        }
        $request->merge(['user' => $user]);

        return $next($request);
    }
}
