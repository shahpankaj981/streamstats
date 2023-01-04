<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Services\TwitchService;
use App\Services\StatisticsService;
use Illuminate\Support\Facades\DB;

class StatisticsController extends Controller
{
    protected $twitchService;
    protected $statisticsService;

    public function __construct(TwitchService $twitchService, StatisticsService $statisticsService)
    {
        $this->twitchService = $twitchService;
        $this->statisticsService = $statisticsService;
    }

    public function show(Request $request)
    {
        $data = $this->statisticsService->stats($request->user);
        // $top100Streams = DB::table('top_live_streams')->take(100)->get();
        // $userFollowedStreams = $this->twitchService->userStreams($request->user);
        // $top1000GamesUserIsFollowing = DB::table('top_live_streams')->whereIn('game_id', collect($userFollowedStreams)->pluck('game_id'))->get();

        // $data = $data + [
        //     'top_100_streams' => $top100Streams,
            
        // ];

        return response()->json(['success' => true, 'data' => $data], 200);
    }
}
