const apiUrl = process.env.API_URL;

export const addTodo = async ({ router, title, description }) => {

    try {
        const res = await fetch(`/api/todos`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({ title, description }),
        });

        if (res.ok) {
            router.refresh();
            router.push("/");
        } else {
            throw new Error("Failed to create a todo");
        }
    } catch (error) {
        console.log(error);
    }
};

export const getAllTodos = async () => {
    try {
        const res = await fetch(`${apiUrl}/api/todos`, {
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

export const getTodoById = async (id) => {
    try {
        const res = await fetch(`${apiUrl}/api/todos/${id}`, {
            cashe: "no-store",
        });
        if (!res.ok) {
            throw new Error("Failed to fetch todo");
        }
        return res.json();
    } catch (error) {
        console.log(error);
    }
};

export const getTodoByIdAndUpdate = async ({ id, router, newTitle, newDescription }) => {

    try {
        const res = await fetch(`/api/todos/${id}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({ newTitle, newDescription }),
        });
        if (res.ok) {
            router.refresh();
            router.push("/");
        } else {
            throw new Error("Failed to create a todo");
        }
    } catch (error) {
        console.log(error);
    }
};

export const deleteTodo = async ({ id, router }) => {
    const confirmed = confirm("Confirm deleting.");
    if (confirmed) {
        const res = await fetch(`/api/todos?id=${id}`, {
            method: "DELETE",
        });
        if (res.ok) {
            router.refresh();
        }
    }
};