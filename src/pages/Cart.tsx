import { SimpleGrid, Text } from "@chakra-ui/react";
import collectionsDetails from "../components/collectionsDetails";
import { useEffect, useState } from "react";
import CartBalance from "../components/CartBalance";
import { fetchItem } from "../hooks/useItem";
import CartItem from "../components/CartItem";

const Cart = () => {
    const [items, setItems] = useState([]);
    const [refresh, setRefresh] = useState(false);
    const [total, setTotal] = useState(0);

    const loadItems = async () => {
        const data = await fetchItem();
        setItems(data ?? []);
    };
    useEffect(() => {
        loadItems();
    }, [refresh]);

    const getRefresh = () => {
        setRefresh(!refresh);
    };

    useEffect(() => {
        let totalPrice = 0;
        items.forEach((item: { id: number; count: number }) => {
            const collectionDetails = collectionsDetails.find(
                (collection) => collection.id === item.id
            );
            totalPrice +=
                item.count *
                parseInt(
                    (collectionDetails?.price ?? "").replace(/,/g, ""),
                    10
                );
        });
        setTotal(totalPrice);
    }, [items]);
    useEffect(() => {
        document.title = `NOLIMIT | Cart(${items.length})`;
    }, [items]);

    return (
        <>
            <Text
                fontSize={{ base: 20, lg: 30 }}
                textAlign="center"
                paddingY={4}
            >
                Cart
            </Text>
            <hr />
            <SimpleGrid
                columns={1}
                paddingY={10}
                paddingX={{ base: 2, md: 4, lg: 60 }}
                spacing={{ base: 2, md: 4 }}
            >
                {items.map((item: { id: number; count: number }) => {
                    const collectionDetails = collectionsDetails.find(
                        (collection) => {
                            if (item.id === collection.id) {
                                return true;
                            }
                        }
                    );
                    return (
                        collectionDetails && (
                            <CartItem
                                key={collectionDetails.id}
                                collectionDetails={collectionDetails}
                                item={item}
                                getRefresh={getRefresh}
                            />
                        )
                    );
                })}
            </SimpleGrid>
            <hr />
            <CartBalance total={total} />
        </>
    );
};

export default Cart;
