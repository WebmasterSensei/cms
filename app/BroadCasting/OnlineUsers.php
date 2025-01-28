<?php

namespace App\Broadcasting;

use App\Models\User;

class OnlineUsers
{
    /**
     * Create a new channel instance.
     */
    public function __construct()
    {
        //
    }

    /**
     * Authenticate the user's access to the channel.
     */
    public function join(User $user)
    {
        $image = "/storage/users-image/$user->id";

        return [
            'id' => $user->id,
            'name' => $user->name,
            'image' => $image,
            'username' => $user->username,
            'role' => $user->model_has_role->roles->name
        ];
    }
}
