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
import { MinusIcon, AddIcon } from "@chakra-ui/icons";
import CartBalance from "../components/CartBalance";
import { Link } from "react-router-dom";
import { fetchItem, setItem } from "../hooks/useItem";

const Cart = () => {
    const [items, setItems] = useState([]);
    const [total, setTotal] = useState(0);

    const loadItems = async () => {
        setItems((await fetchItem()) ?? []);
    };
    useEffect(() => {
        loadItems();
    }, []);

    const buyItem = async (id: number, change: number) => {
        setItems((await setItem(id, change)) ?? []);
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
                        <Card
                            shadow="0 0 4px"
                            borderRadius="5px"
                            key={collectionDetails?.id}
                        >
                            <HStack
                                justifyContent="space-between"
                                padding={{ base: 2, md: 4 }}
                            >
                                <HStack spacing={{ base: 2, lg: 4 }}>
                                    <Link
                                        to={`/products/${collectionDetails?.id}`}
                                    >
                                        <Image
                                            src={collectionDetails?.image}
                                            height={{
                                                base: "80px",
                                                md: 40,
                                            }}
                                            borderRadius="5px"
                                            border="2px solid black"
                                        ></Image>
                                    </Link>
                                    <VStack alignItems="left">
                                        <Text fontSize="12px" as="b">
                                            {collectionDetails?.name}
                                        </Text>
                                        <Text fontSize="12px" as="b">
                                            {item.count} * LKR{" "}
                                            {collectionDetails?.price}
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
                                                    buyItem(item.id, -1);
                                                }}
                                            />
                                            <Button>{item.count}</Button>
                                            <IconButton
                                                aria-label="Add"
                                                icon={<AddIcon />}
                                                onClick={() =>
                                                    buyItem(item.id, 1)
                                                }
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
                                        buyItem(item.id, 0);
                                    }}
                                ></IconButton>
                            </HStack>
                        </Card>
                    );
                })}
            </SimpleGrid>
            <hr />
            <CartBalance total={total} />
        </>
    );
};

export default Cart;
