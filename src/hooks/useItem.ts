import axios from "axios";

export interface Item {
  id: number;
  count: number;
}

export const serverUrl = import.meta.env.VITE_URL ?? "http://localhost:8080";

export const fetchItem = async () => {
  try {
    const result = await axios.get(`${serverUrl}/items`);
    return result.data;
  } catch (err) {
    console.error(err);
  }
};

export const newItem = async (id: number, count: number) => {
  try {
    const result = await axios.post(`${serverUrl}/items`, {
      id: id,
      count: count,
    });
    return result.data;
  } catch (err) {
    console.error(err);
  }
};

export const updateItem = async (item: Item, change: number) => {
  try {
    await axios.put(`${serverUrl}/items`, {
      id: item.id,
      count: item.count + change,
    });
  } catch (err) {
    console.error(err);
  }
};

export const deleteItem = async (item: Item) => {
  try {
    const result = await axios.delete(`${serverUrl}/items/` + item.id);
    return result.data;
  } catch (err) {
    console.error(err);
  }
};
