<?php

namespace App\Services;

// use App\Models\User;
use Illuminate\Support\Facades\DB;
// use Carbon\Carbon;
use App\Services\TwitchService;

class StatisticsService
{
    protected $twitchService;

    public function __construct(TwitchService $twitchService,)
    {
        $this->twitchService = $twitchService;
    }

    public function stats($user)
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

        $top100Streams = DB::table('top_live_streams')->take(100)->get();
        $userFollowedStreams = $this->twitchService->userStreams($user);
        $top1000GamesUserIsFollowing = DB::table('top_live_streams')->whereIn('game_id', collect($userFollowedStreams)->pluck('game_id'))->get();
                    
        $lowestCountStream = last($userFollowedStreams);
        $lowestCountStreamInTop1000 = DB::table('top_live_streams')->orderBy('no_of_viewers')->first();
        
        if($lowestCountStream && $lowestCountStreamInTop1000) {
            $difference = $lowestCountStreamInTop1000->no_of_viewers - $lowestCountStream->viewer_count;
            if($difference <1) {
                $difference = "Lowest count stream that user is following is already in Top 1000";
            }
        } else {
            $difference = "N/A";
        }

        $data = [
            "games_by_stream_count"     => $gamesByStreamCount,
            "top_games_by_viewer_count" => $topGamesByViewerCount,
            "median_viewers"            => $medianViewers,
            'top_1000_games_user_is_following' => $top1000GamesUserIsFollowing,
            'top_100_streams' => $top100Streams,
            "view_count_to_top_1000" => $difference
        ];

        return $data;
    }
}