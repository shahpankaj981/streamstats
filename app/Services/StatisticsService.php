<?php

namespace App\Services;

// use App\Models\User;
use Illuminate\Support\Facades\DB;
// use Carbon\Carbon;

class StatisticsService
{
    public function __construct()
    {
    }

    public function stats()
    {
        $gamesByStreamCount = DB::table('top_live_streams')
                                ->select('game_id', 'game_name', DB::raw("count(*) as stream_count"))
                                ->whereNotNull("game_id")
                                ->orWhere("game_id", "!=", "")
                                ->groupBy("game_id", 'game_name')
                                ->orderBy("game_name")
                                ->get();

        $topGamesByViewerCount = DB::table('top_live_streams')
                                ->select(DB::raw('distinct(game_id)'), 'game_name', DB::raw("max(no_of_viewers) as view_count"))
                                ->groupBy("game_id", "game_name")
                                ->orderBy("view_count", "desc")
                                ->get();
        

        $medianViewers = DB::table('top_live_streams')
                            ->whereIn("id", [500, 501])
                            ->avg('no_of_viewers');
        

        $data = [
            "games_by_stream_count"     => $gamesByStreamCount,
            "top_games_by_viewer_count" => $topGamesByViewerCount,
            "median_viewers"            => $medianViewers
        ];

        return $data;
    }
}