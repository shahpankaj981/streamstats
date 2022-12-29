<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Services\TwitchService;
use Illuminate\Support\Facades\DB;

class StatisticsController extends Controller
{
    protected $twitchService;

    public function __construct(TwitchService $twitchService)
    {
        $this->twitchService = $twitchService;
    }

    public function show(Request $request)
    {
        $top100Streams = DB::table('top_live_streams')->take(100)->get();
        $userFollowedStreams = $this->twitchService->userStreams($request->user);
        $top1000GamesUserIsFollowing = DB::table('top_live_streams')->whereIn('game_id', collect($userFollowedStreams)->pluck('game_id'))->get();

        $data = [
            'top_100_streams' => $top100Streams,
            'top_1000_games_user_is_following' => $top1000GamesUserIsFollowing
        ];

        return response()->json(['success' => true, 'data' => $data], 200);
    }
}
