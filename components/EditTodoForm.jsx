"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { getTodoByIdAndUpdate } from "@/helpers/fetchTodo";

const EditTodoForm = ({ id, title, description }) => {
    const [newTitle, setNewTitle] = useState(title);
    const [newDescription, setNewDescription] = useState(description);

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        getTodoByIdAndUpdate({ id, router, newTitle, newDescription });
    };

    return (
        <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
            <input
                onChange={(e) => setNewTitle(e.target.value)}
                value={newTitle}
                className='border border-slate-500 px-8 py-2 rounded'
                type='text'
                placeholder='Title'
            ></input>
            <input
                onChange={(e) => setNewDescription(e.target.value)}
                value={newDescription}
                className='border border-slate-500 px-8 py-2 rounded'
                type='text'
                placeholder='Description'
            ></input>
            <button
                type='submit'
                className='bg-green-700 font-bold text-white py-3 px-6 w-fit
                rounded hover:bg-green-800 ease-in duration-300'
            >
                Update note
            </button>
        </form>
    );
};

export default EditTodoForm;
