<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Playlist;
use App\Http\Requests\PlaylistRequest;


class PlaylistController extends Controller
{
    public function index()
    {
        $playlists = Playlist::all();
        return response()->json([
            "data" => $playlists,
        ]);
    }

    public function show(int $id)
    {
        $playlist = Playlist::find($id);
        return response()->json([
            "data" => $playlist,
        ]);
    }

    public function store(PlaylistRequest $request)
    {
        $validated = $request->validated();
        $playlist = Playlist::create($validated);
        return response()->json([
            "data store" => $playlist,
        ]);
    }

    public function update(Request $request, int $id)
    {
        $playlist = Playlist::find($id);
        $playlist->update($request->all());
        return response()->json([
            "data update" => $playlist,
        ]);
    }

    public function destroy(int $id)
    {
        $playlist = Playlist::find($id);
        $playlist->delete();
        return response()->json([
            "data destroy" => $playlist,
        ]);
    }
}
