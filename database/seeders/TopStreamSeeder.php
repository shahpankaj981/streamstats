<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Services\TwitchService;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class TopStreamSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('top_live_streams')->truncate();
        $pageCursor=null;

        for($i=1; $i<=10; $i++){
            $streams = app(TwitchService::class)->top100Streams($pageCursor);
        
            foreach($streams->data  as $stream) {
                DB::table('top_live_streams')->insert([
                    'channel_name' => $stream->user_name,
                    'title' => $stream->title,
                    'game_id' => $stream->game_id,
                    'game_name' => $stream->game_name,
                    'no_of_viewers' => $stream->viewer_count,
                    'started_at' => Carbon::parse($stream->started_at)            
                ]);
            }
            $pageCursor = $streams->pagination->cursor;
        }
    }
}
