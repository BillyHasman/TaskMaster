<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $guarded = ["id"];

    // protected $fillable = [
    //     'name'
    // ];

    public function tasks()
    {
        return $this->belongsToMany(Task::class, 'task_categories');
    }
}
