<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Services\TwitchService;

class UserController extends Controller
{
    protected $twitchService;

    public function __construct(TwitchService $twitchService)
    {
        $this->twitchService = $twitchService;
    }

    public function show(Request $request)
    {
        $user = $request->user;
        
        return response()->json(['success' => true, 'data' => $user->only('twitch_id', 'username', 'email')], 200);
    }
}
