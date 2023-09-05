export const getAllTodos = async ({ router, title, description }) => {

    try {
        const res = await fetch("http://localhost:3000/api/todos", {
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

export const getTodoById = async (id) => {
    try {
        const res = await fetch(`http://localhost:3000/api/todos/${id}`, {
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
        const res = await fetch(`http://localhost:3000/api/todos/${id}`, {
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