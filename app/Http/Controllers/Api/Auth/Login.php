<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\BadResponseException;
use Illuminate\Http\Request;

class Login extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param \Illuminate\Http\Request $request
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function __invoke(Request $request)
    {
        $http = new Client;

        try {
            $response = $http->post(config('services.passport.endpoint'), [
                'form_params' => [
                    'grant_type' => 'password',
                    'client_id' => config('services.passport.client_id'),
                    'client_secret' => config('services.passport.client_secret'),
                    'username' => $request->username,
                    'password' => $request->password,
                ],
            ]);

            return response()->json($response->getBody()->getContents(), 200);
        } catch (BadResponseException $exception) {
            if ($exception->getCode() === 400) {
                return response()->json('Please enter username or password!', $exception->getCode());
            } elseif ($exception->getCode() === 401) {
                return response()->json('Invalid credentials! Please again.', $exception->getCode());
            }

            return response()->json('Something went wrong!', $exception->getCode());
        }
    }
}
