<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Models\Playlist;
use App\Models\Track;

class Playlist_track extends Model
{

    protected $fillable = [
        'playlist_id',
        'track_id',
        'order',
    ];


    public function playlist(): BelongsTo
    {
        return $this->belongsTo(Playlist::class);
    }

    public function track(): BelongsTo
    {
        return $this->belongsTo(Track::class);
    }
}
