<?php

namespace App\Listeners;

use App\Events\UserOnlineEvent;
use Illuminate\Auth\Events\Login;

class UpdateStatusListener
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(object $event): void
    {
        
        $user = $event->user;
        $event->user->is_online = $event instanceof Login;
        $event->user->save();

        UserOnlineEvent::dispatch($user);
    }
}
