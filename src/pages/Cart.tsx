import {
    Button,
    ButtonGroup,
    Card,
    HStack,
    IconButton,
    Image,
    SimpleGrid,
    Text,
    VStack,
} from "@chakra-ui/react";
import { MdDelete } from "react-icons/md";
import collectionsDetails from "../components/collectionsDetails";
import { useEffect, useState } from "react";
import axios from "axios";
import { MinusIcon, AddIcon } from "@chakra-ui/icons";
import CartBalance from "../components/CartBalance";

const Cart = () => {
    const [items, setItems] = useState([]);
    const [refresh, setRefresh] = useState(false);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        axios
            .get("http://localhost:3000")
            .then((result) => setItems(result.data))
            .catch((err) => console.log(err));
    }, [refresh]);

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

    const Add = (item: { _id: string; count: number }) => {
        axios
            .put("http://localhost:3000/update/items/" + item._id, {
                count: item.count + 1,
            })
            .then(() => {
                setRefresh(true);
            })
            .catch((err) => console.log(err));
    };

    const Minus = (item: { _id: string; count: number }) => {
        axios
            .put("http://localhost:3000/update/items/" + item._id, {
                count: item.count - 1,
            })
            .then(() => {
                setRefresh(true);
            })
            .catch((err) => console.log(err));
    };

    const Delete = (item: { _id: string }) => {
        axios
            .delete("http://localhost:3000/delete/items/" + item._id)
            .then(() => {
                setRefresh(true);
            })
            .catch((err) => console.log(err));
    };

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
                {items.map(
                    (item: { _id: string; id: number; count: number }) => {
                        const collectionDetails = collectionsDetails.find(
                            (collection) => {
                                if (item.id === collection.id) {
                                    return true;
                                }
                            }
                        );
                        return (
                            <Card
                                shadow="0 0 4px"
                                borderRadius="5px"
                                key={collectionDetails?.id ?? ""}
                            >
                                <HStack
                                    justifyContent="space-between"
                                    padding={{ base: 2, md: 4 }}
                                >
                                    <HStack spacing={{ base: 2, lg: 4 }}>
                                        <Image
                                            src={collectionDetails?.image ?? ""}
                                            height={{ base: "80px", md: 40 }}
                                            borderRadius="5px"
                                            border="2px solid black"
                                        ></Image>
                                        <VStack alignItems="left">
                                            <Text fontSize="12px" as="b">
                                                {collectionDetails?.name ?? ""}
                                            </Text>
                                            <Text fontSize="12px" as="b">
                                                {item.count} * LKR{" "}
                                                {collectionDetails?.price ?? ""}
                                            </Text>
                                            <ButtonGroup
                                                size="sm"
                                                isAttached
                                                variant="outline"
                                            >
                                                <IconButton
                                                    aria-label="Minus"
                                                    icon={<MinusIcon />}
                                                    isDisabled={item.count <= 1}
                                                    onClick={() => {
                                                        setRefresh(false);
                                                        Minus(item);
                                                    }}
                                                />
                                                <Button>{item.count}</Button>
                                                <IconButton
                                                    aria-label="Add"
                                                    icon={<AddIcon />}
                                                    onClick={() => {
                                                        setRefresh(false);
                                                        Add(item);
                                                    }}
                                                />
                                            </ButtonGroup>
                                        </VStack>
                                    </HStack>
                                    <IconButton
                                        colorScheme="red"
                                        variant="ghost"
                                        isRound={true}
                                        aria-label="Remove"
                                        icon={<MdDelete />}
                                        size="lg"
                                        onClick={() => {
                                            setRefresh(false);
                                            Delete(item);
                                        }}
                                    ></IconButton>
                                </HStack>
                            </Card>
                        );
                    }
                )}
            </SimpleGrid>
            <hr />
            <CartBalance total={total} />
        </>
    );
};

export default Cart;
