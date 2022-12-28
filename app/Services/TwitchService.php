<?php

namespace App\Services;


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

    public function top100Streams()
    {
        $response = $this->apiCall('https://api.twitch.tv/helix/streams?first=100', 'GET', [
            'headers' => [
                'Authorization' => "Bearer {$this->appAccessToken}",
                'Client-Id' => $this->clientId,
                
            ],
        ]);

        return json_decode($response->getBody()->getContents());
    }
}