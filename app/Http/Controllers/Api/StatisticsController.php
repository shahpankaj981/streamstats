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
        // $data = $this->twitchService->top100Streams();
        $top100Streams = DB::table('top_live_streams')->take(100)->get();
        // dd($top100Streams);
        // $userStreams = $this->twitchService->userStreams($request->user);
        // dd($userStreams);
        // $topGames = $this->twitchService->topGames($request->user);
        // $top1000GamesUserIsPartOf = DB::table('top_live_streams')->whereIn('game_id', collect($userStreams)->pluck('game_id'))->get();
        // dd($top1000GamesUserIsPartOf);

        $data = [
            'top_100_streams' => $top100Streams,
        ];

        return response()->json(['success' => true, 'data' => $data], 200);
    }
}
