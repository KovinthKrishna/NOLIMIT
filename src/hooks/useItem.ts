import axios from "axios";

interface ItemLocal {
    id: number;
    count: number;
}

const URL = "http://localhost:3000";

const updateLocal = async () => {
    const items = (await axios.get(URL)).data;
    if (items) {
        const itemsLocal: ItemLocal[] = [];
        items.map((item: { id: number; count: number }) => {
            itemsLocal.push({ id: item.id, count: item.count });
        });
        localStorage.setItem("itemsLocal", JSON.stringify(itemsLocal));
    }
};

export const fetchItem = async () => {
    try {
        const data = (await axios.get(URL)).data;
        await updateLocal();
        return data;
    } catch (err) {
        console.error(err);
        return JSON.parse(localStorage.getItem("itemsLocal") ?? "[]");
    }
};

export const newItem = async (id: number, change: number) => {
    try {
        if (id !== 0) {
            await axios.post(`${URL}/add/items`, {
                id: id,
                count: change,
            });
            await updateLocal();
            return "Item added successfully.";
        }
    } catch (err) {
        console.error(err);
        if (id !== 0) {
            const itemsLocal = JSON.parse(
                localStorage.getItem("itemsLocal") ?? "[]"
            );
            itemsLocal.push({ id: id, count: change });
            localStorage.setItem("itemsLocal", JSON.stringify(itemsLocal));
            return "Item added successfully.";
        }
    }
};

export const updateItem = async (
    item: { _id: string; id: number; count: number },
    change: number
) => {
    try {
        await axios.put(`${URL}/update/items/` + item._id, {
            count: item.count + change,
        });
        await updateLocal();
    } catch (err) {
        console.error(err);
        const itemsLocal = JSON.parse(
            localStorage.getItem("itemsLocal") ?? "[]"
        );
        const existingItemIndex = itemsLocal.findIndex(
            (itemLocal: { id: number }) => itemLocal.id === item.id
        );
        itemsLocal[existingItemIndex].count = item.count + change;
        localStorage.setItem("itemsLocal", JSON.stringify(itemsLocal));
    }
};

export const deleteItem = async (item: { _id: string; id: number }) => {
    try {
        await axios.delete(`${URL}/delete/items/` + item._id);
        await updateLocal();
        return "Item deleted successfully.";
    } catch (err) {
        console.error(err);
        const itemsLocal = JSON.parse(
            localStorage.getItem("itemsLocal") ?? "[]"
        );
        const updatedItems = itemsLocal.filter(
            (existingItem: { id: number }) => existingItem.id !== item.id
        );
        localStorage.setItem("itemsLocal", JSON.stringify(updatedItems));
        return "Item deleted successfully.";
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
