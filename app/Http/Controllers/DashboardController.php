<?php

namespace App\Http\Controllers;

use App\DashboardTraits;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    use DashboardTraits;

    public function index(){

        $ipphones = $this->getIpPhones();

        return inertia('Dashboard', [
            'ipphones' => $ipphones
        ]);
    }
}
