import axios from "axios";

const URL = "http://localhost:3000";

export const fetchItem = async () => {
    try {
        return (await axios.get(URL)).data;
    } catch (err) {
        console.error(err);
    }
};

const newItem = async (id: number, change: number) => {
    try {
        if (id !== 0) {
            await axios.post(`${URL}/add/items`, {
                id: id,
                count: change,
            });
        }
    } catch (err) {
        console.error(err);
    }
};

const updateItem = async (
    duplicate: { _id: string; count: number },
    change: number
) => {
    try {
        await axios.put(`${URL}/update/items/` + duplicate._id, {
            count: duplicate.count + change,
        });
    } catch (err) {
        console.error(err);
    }
};

const deleteItem = async (duplicate: { _id: string }) => {
    try {
        await axios.delete(`${URL}/delete/items/` + duplicate._id);
    } catch (err) {
        console.error(err);
    }
};

export const setItem = async (id: number, change: number) => {
    const items = await fetchItem();
    const duplicate = items.find((item: { id: number }) => item.id === id);
    if (duplicate === undefined) {
        await newItem(id, change);
    } else if (change === 0) {
        await deleteItem(duplicate);
    } else {
        await updateItem(duplicate, change);
    }
    return await fetchItem();
};
