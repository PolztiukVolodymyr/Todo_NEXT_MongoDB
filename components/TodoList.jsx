import Link from "next/link";
import DeleteBtn from "./DeleteBtn";
import { LuEdit } from "react-icons/lu";

const getTodos = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/todos", {
            cache: "no-store",
        });
        if (!res.ok) {
            throw new Error("Failed to fetch todos!");
        }
        return res.json();
    } catch (error) {
        console.log("Error loading todos", error);
    }
};

const TodoList = async () => {
    const { todos } = await getTodos();

    return (
        <>
            {todos.map((todo) => (
                <div
                    key={todo.div}
                    className='p-4 border border-slate-300 my-3 flex justify-between
             gap-5 items-start rounded-md'
                >
                    <div>
                        <h2 className='font-bold text-xl'>{todo.title}</h2>
                        <p>{todo.description}</p>
                    </div>
                    <div className='flex gap-3'>
                        <DeleteBtn id={todo._id} />
                        <Link
                            href={`/editTodo/${todo._id}`}
                            className='text-cyan-500'
                        >
                            <LuEdit size={24} />
                        </Link>
                    </div>
                </div>
            ))}
        </>
    );
};

export default TodoList;
