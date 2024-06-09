import axios from "axios";

export interface Item {
    _id: string;
    id: number;
    count: number;
}

export const serverUrl = import.meta.env.VITE_URL ?? "http://localhost:3000";

export const fetchItem = async () => {
    try {
        const result = await axios.get(`${serverUrl}/fetch/items`);
        return result.data;
    } catch (err) {
        console.error(err);
    }
};

export const newItem = async (id: number, count: number) => {
    try {
        const result = await axios.post(`${serverUrl}/add/items`, {
            id: id,
            count: count,
        });
        return result.data;
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
        const result = await axios.delete(
            `${serverUrl}/delete/items/` + item._id
        );
        return result.data;
    } catch (err) {
        console.error(err);
    }
};
