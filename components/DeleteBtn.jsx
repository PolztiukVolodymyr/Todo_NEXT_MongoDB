"use client";

import { GoTrash } from "react-icons/go";
import { useRouter } from "next/navigation";

const DeleteBtn = ({ id }) => {
    const router = useRouter();

    const deleteTodo = async () => {
        const confirmed = confirm("Confirm deleting.");
        if (confirmed) {
            const res = await fetch(
                `http://localhost:3000/api/todos?id=${id}`,
                {
                    method: "DELETE",
                }
            );
            if (res.ok) {
                router.refresh();
            }
        }
    };

    return (
        <button
            onClick={deleteTodo}
            className='text-red-700 hover:scale-125 ease-in duration-200'
        >
            <GoTrash size={24} />
        </button>
    );
};

export default DeleteBtn;
