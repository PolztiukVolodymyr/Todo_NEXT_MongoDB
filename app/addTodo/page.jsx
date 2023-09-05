"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { getAllTodos } from "@/helpers/getTodos";

const AddTodo = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title || !description) {
            alert("Title and description are requared.");
            return;
        }
        getAllTodos({ router, title, description });
    };

    return (
        <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
            <input
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                className='border border-slate-500 px-8 py-2 rounded'
                type='text'
                placeholder='Title'
            ></input>
            <input
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                className='border border-slate-500 px-8 py-2 rounded'
                type='text'
                placeholder='Description'
            ></input>
            <button
                type='submit'
                className='bg-green-700 font-bold text-white py-3 px-6 w-fit rounded'
            >
                Add ToDo
            </button>
        </form>
    );
};

export default AddTodo;
