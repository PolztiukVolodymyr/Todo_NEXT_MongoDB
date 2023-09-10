import { ErrorBoundary } from "react-error-boundary";
import TodoList from "@/components/TodoList";

export default function Home() {
    return (
        <ErrorBoundary fallback={<div>Something went wrong in TodoList</div>}>
            <TodoList />
        </ErrorBoundary>
    );

    // return <div>Here must be TodoList</div>;
}
