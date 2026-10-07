<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Track extends Model
{
    protected $fillable = [
        'user_id',
        'title',
        'artist',
        'album',
        'genre',
        'bpm',
        'key',
        'duration',
        'file_path',
        'cover_path',
        'is_favorite',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
