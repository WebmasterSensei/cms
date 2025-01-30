<?php

namespace App;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Storage;

trait DashboardTraits
{
    //
    private function getIpPhones()
    {
        $ipphones = Cache::rememberForever('__ipphones', fn() => Collection::make(Storage::json('.ipphones'))->flatten(1)->all());

        return $ipphones;
    }
}
