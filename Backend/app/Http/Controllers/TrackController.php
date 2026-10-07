<?php

namespace App\Http\Controllers;

use App\Models\Track;
use Illuminate\Http\Request;

class TrackController extends Controller
{

    public function index()
    {
        $tracks = Track::all();
        return response()->json([
            "data" => $tracks,
        ]);
    }

    public function show(int $id)
    {
        $track = Track::find($id);
        return response()->json([
            "data" => $track,
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'artist' => 'required|string|max:255',
            'album' => 'required|string|max:255',
            'genre' => 'required|string|max:255',
            'duration' => 'required|integer',
            'file_path' => 'required|string',
            'cover_path' => 'nullable|string',
            'key' => 'nullable|string|max:255',
            'bpm' => 'nullable|integer',
        ]);
        $track = Track::create($validated);
        return response()->json([
            "data store" => $track,
        ]);
    }

    public function update(Request $request, int $id)
    {
        $track = Track::find($id);
        $track->update($request->all());
        return response()->json([
            "data update" => $track,
        ]);
    }

    public function destroy(int $id)
    {
        $track = Track::find($id);
        $track->delete();
        return response()->json([
            "data destroy" => $track,
        ]);
    }
}
