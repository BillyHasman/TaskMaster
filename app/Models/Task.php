<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;

    // protected $fillable = [
    //     'user_id',
    //     'title',
    //     'description',
    //     'is_completed',
    //     'priority',
    //     'status'
    // ];

    protected $guarded = ["id"];

    public function user()
    {
        return $this->belongsTo(user::class);
    }

    public function categories()
    {
        return $this->belongsToMany(Category::class, 'task_categories');
    }
}
