import EditTodoForm from "@/components/EditTodoForm";
import { getTodoById } from "@/helpers/fetchTodo";

const EditTodo = async ({ params }) => {
    const { id } = params;
    const { todo } = await getTodoById(id);
    const { title, description } = todo;

    return <EditTodoForm id={id} title={title} description={description} />;
};

export default EditTodo;
