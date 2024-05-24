import axios from "axios";

const URL = "http://localhost:3000";

export const fetchItem = async () => {
    try {
        const result = await axios.get(URL);
        return result.data;
    } catch (err) {
        console.error(err);
    }
};

const newItem = async (id: number, change: number): Promise<boolean> => {
    try {
        if (id !== 0) {
            await axios.post(`${URL}/add/items`, {
                id: id,
                count: change,
            });
        }
        return true;
    } catch (err) {
        console.error(err);
        return false;
    }
};

const updateItem = async (
    duplicate: { _id: string; count: number },
    change: number
): Promise<boolean> => {
    try {
        await axios.put(`${URL}/update/items/` + duplicate._id, {
            count: duplicate.count + change,
        });
        return true;
    } catch (err) {
        console.error(err);
        return false;
    }
};

const deleteItem = async (duplicate: { _id: string }): Promise<boolean> => {
    try {
        await axios.delete(`${URL}/delete/items/` + duplicate._id);
        return true;
    } catch (err) {
        console.error(err);
        return false;
    }
};

export const setItem = async (id: number, change: number): Promise<boolean> => {
    try {
        const items = await fetchItem();
        const duplicate = items.find((item: { id: number }) => item.id === id);

        if (duplicate === undefined) {
            return await newItem(id, change);
        } else if (change === 0) {
            return await deleteItem(duplicate);
        } else {
            return await updateItem(duplicate, change);
        }
    } catch {
        return false;
    }
};
