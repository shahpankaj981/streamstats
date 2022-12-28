<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Services\TwitchService;

class StatisticsController extends Controller
{
    protected $twitchService;

    public function __construct(TwitchService $twitchService)
    {
        $this->twitchService = $twitchService;
    }

    public function show()
    {
        $data = $this->twitchService->top100Streams();
        dd($data);

        return $data;
    }
}
