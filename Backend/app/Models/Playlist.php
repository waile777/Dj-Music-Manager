<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\User;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Playlist extends Model
{
    protected $fillable = [
        'user_id',
        'title',
        'description',
        'thumbnail_url'
    ];


    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
