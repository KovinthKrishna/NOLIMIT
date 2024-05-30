import axios from "axios";

export const serverUrl = import.meta.env.VITE_URL ?? "http://localhost:3000";

export const fetchItem = async () => {
    try {
        return (await axios.get(`${serverUrl}/fetch/items`)).data;
    } catch (err) {
        console.error(err);
    }
};

export const newItem = async (id: number, count: number) => {
    try {
        await axios.post(`${serverUrl}/add/items`, {
            id: id,
            count: count,
        });
        return "Item added successfully.";
    } catch (err) {
        console.error(err);
    }
};

export const updateItem = async (
    item: { _id: string; count: number },
    change: number
) => {
    try {
        await axios.put(`${serverUrl}/update/items/` + item._id, {
            count: item.count + change,
        });
    } catch (err) {
        console.error(err);
    }
};

export const deleteItem = async (item: { _id: string }) => {
    try {
        await axios.delete(`${serverUrl}/delete/items/` + item._id);
        return "Item deleted successfully.";
    } catch (err) {
        console.error(err);
    }
};

export const setItem = async (id: number, count: number) => {
    const items = await fetchItem();
    const duplicate = items.find((item: { id: number }) => item.id === id);
    if (!duplicate) {
        return await newItem(id, count);
    } else {
        return "Already in cart!";
    }
};
