<?php

namespace App\Http\Middleware;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        // dd($request->user()?->id);
        return [
            ...parent::share($request),
            'auth' => [
                'user' => $this->queryTraits($request->user()?->id)?->user,
            ],
        ];
    }

    public function queryTraits($id)
    {

        return (object) [
            'user' => User::where('users.id', $id)->join('model_has_roles', 'model_id', '=', 'users.id')
                ->leftJoin('roles', 'roles.id', '=', 'model_has_roles.role_id')
                ->first(),
        ];
    }
}
