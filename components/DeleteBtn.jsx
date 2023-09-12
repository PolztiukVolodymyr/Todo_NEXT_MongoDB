"use client";

import { GoTrash } from "react-icons/go";
import { useRouter } from "next/navigation";
import { deleteTodo } from "@/helpers/fetchTodo";

const DeleteBtn = ({ id }) => {
    const router = useRouter();

    return (
        <button
            onClick={() => deleteTodo({ id, router })}
            className='text-red-500 hover:scale-125 ease-in duration-200'
        >
            <GoTrash size={24} />
        </button>
    );
};

export default DeleteBtn;

// const deleteTodo = async () => {
//     const confirmed = confirm("Confirm deleting.");
//     if (confirmed) {
//         const res = await fetch(`/api/todos?id=${id}`, {
//             method: "DELETE",
//         });
//         if (res.ok) {
//             router.refresh();
//         }
//     }
// };
