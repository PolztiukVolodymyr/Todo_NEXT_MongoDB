import Link from "next/link";
import DeleteBtn from "./DeleteBtn";
import { LuEdit } from "react-icons/lu";
import { getAllTodos } from "@/helpers/fetchTodo";

const TodoList = async () => {
    const { todos } = await getAllTodos();

    return (
        <>
            {todos?.map((todo) => (
                <div
                    key={todo._id}
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
                            className='text-cyan-500 hover:scale-125 ease-in duration-200'
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
