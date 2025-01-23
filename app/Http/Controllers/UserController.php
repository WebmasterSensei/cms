<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    public function index()
    {
        $users = User::with('model_has_role.roles')->get();

        $users->transform(function ($item) {
            $item->role = $item->model_has_role?->roles->name;
            return $item;
        });

        return inertia('Users/UserIndex', [
            'records' => $users,
        ]);
    }

    public function getUser($id)
    {
        // dd(User::with('model_has_role.roles')->where('id', $id)->first());
        $user =  User::with('model_has_role.roles')->where('id', $id)->first();

        if ($user) {
            $user->role = $user->model_has_role?->roles->name;
        }

        return response()->json([
            'data' => $user,
        ]);
    }

    public function updateUser(Request $request)
    {

        $user = User::findOrFail($request->id);

        DB::transaction(function () use ($user, $request) {
            $user->update([
                'name' => $request->name,
                'username' => $request->username,
            ]);

            $user->syncRoles([$request->role]);
        });

        return redirect()->back();
    }
}
