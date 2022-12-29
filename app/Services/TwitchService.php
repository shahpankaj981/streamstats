<?php

namespace App\Services;

use App\Models\User;

class TwitchService
{
    protected $clientId;
    protected $clientSecret;
    protected $appAccessToken;

    public function __construct()
    {
        $this->clientId = config('app.twitch_client_id');
        $this->clientSecret = config('app.twitch_client_secret');
        if(!$this->appAccessToken) {
            $this->setAccessToken();
        }
    }

    public function apiCall($url, $method = 'GET', $data = [])
    {
        $client = new \GuzzleHttp\Client();
        $response = $client->request($method, $url, $data);

        return $response;
    }

    public function setAccessToken()
    {
        $client = new \GuzzleHttp\Client();
        $response = $this->apiCall('https://id.twitch.tv/oauth2/token', 'POST',  [ 
            'headers' => [
                'content-type'   => "application/json",
                
            ],
            'body' => json_encode([
                'client_id' => $this->clientId,
                'client_secret' => $this->clientSecret,
                'grant_type' => 'client_credentials',
            ])
        ]);

        $body = json_decode($response->getBody()->getContents());
        $this->appAccessToken = $body->access_token;
    }

    public function top100Streams($pageCursor=null)
    {
        $url = "https://api.twitch.tv/helix/streams?first=100";
        if($pageCursor) {
            $url = "{$url}&after={$pageCursor}";
        }
        $response = $this->apiCall($url, 'GET', [
            'headers' => [
                'Authorization' => "Bearer {$this->appAccessToken}",
                'Client-Id' => $this->clientId,
                
            ],
        ]);

        return json_decode($response->getBody()->getContents());
    }

    public function userStreams(User $user)
    {
        $url = "https://api.twitch.tv/helix/streams?first=100&user_login={$user->username}";
        
        $response = $this->apiCall($url, 'GET', [
            'headers' => [
                'Authorization' => "Bearer {$user->twitch_token}",
                'Client-Id' => $this->clientId,
                
            ],
        ]);

        return json_decode($response->getBody()->getContents())->data;
    }

    public function topGames(User $user)
    {
        $url = "https://api.twitch.tv/helix/games/top?first=100";
        
        $response = $this->apiCall($url, 'GET', [
            'headers' => [
                'Authorization' => "Bearer {$user->twitch_token}",
                'Client-Id' => $this->clientId,
                
            ],
        ]);

        return json_decode($response->getBody()->getContents())->data;
    }
}