import axios from "axios";

const URL = "http://localhost:3000";

export const fetchItem = async () => {
    try {
        return (await axios.get(URL)).data;
    } catch (err) {
        console.error(err);
    }
};

export const newItem = async (id: number, change: number) => {
    try {
        if (id !== 0) {
            await axios.post(`${URL}/add/items`, {
                id: id,
                count: change,
            });
        }
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
        await axios.put(`${URL}/update/items/` + item._id, {
            count: item.count + change,
        });
    } catch (err) {
        console.error(err);
    }
};

export const deleteItem = async (item: { _id: string }) => {
    try {
        await axios.delete(`${URL}/delete/items/` + item._id);
        return "Item deleted successfully.";
    } catch (err) {
        console.error(err);
    }
};

export const setItem = async (id: number, change: number) => {
    const items = await fetchItem();
    const duplicate = items.find((item: { id: number }) => item.id === id);
    if (!duplicate) {
        return await newItem(id, change);
    } else {
        return "Already in cart!";
    }
};
