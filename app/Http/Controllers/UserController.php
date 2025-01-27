<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

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
    public function createUsers(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'username' => 'required|string|max:255',
            'role' => 'required|exists:roles,name',
        ]);

        DB::transaction(function () use ($request) {
            $user = User::create([
                'name' => $request->name,
                'username' => $request->username,
                'password' => Hash::make('cms2024'),
            ]);

            $user->syncRoles([$request->role]);
        });

        return redirect()->back();
    }
}
