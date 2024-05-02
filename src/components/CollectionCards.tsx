import {
    Button,
    Card,
    HStack,
    IconButton,
    Image,
    SimpleGrid,
    Stack,
    Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import collectionsDetails from "./collectionsDetails";
import { FaCartPlus } from "react-icons/fa";
import axios from "axios";

const CollectionCards = () => {
    const [items, setItems] = useState([]);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        axios
            .get("http://localhost:3000")
            .then((result) => setItems(result.data))
            .catch((err) => console.log(err));
    }, [refresh]);

    const Add = (id: number) => {
        setRefresh(false);
        const duplicate = items.find((item: { id: number; count: number }) => {
            if (item.id === id) {
                return true;
            } else {
                return false;
            }
        });
        if (duplicate === undefined) {
            AddToCart(id);
        } else {
            Update(duplicate);
        }
    };

    const AddToCart = (id: number) => {
        axios
            .post("http://localhost:3000/add/items", { id: id, count: 1 })
            .then(() => {
                setRefresh(true);
            })
            .catch((err) => console.log(err));
    };

    const Update = (duplicate: { _id: string; id: number; count: number }) => {
        axios
            .put("http://localhost:3000/update/items/" + duplicate._id, {
                count: duplicate.count + 1,
            })
            .then(() => {
                setRefresh(true);
            })
            .catch((err) => console.log(err));
    };

    const [page, setPage] = useState(1);
    const pages = Array.from(
        { length: Math.ceil(collectionsDetails.length / 12) },
        (_, index) => index + 1
    );

    return (
        <>
            <SimpleGrid
                columns={{ base: 2, lg: 4 }}
                justifyItems="center"
                spacing={6}
                paddingY={10}
                paddingX={{ base: 2, lg: 14 }}
            >
                {collectionsDetails
                    .slice(page * 12 - 12, page * 12)
                    .map((collectionDetails) => {
                        return (
                            <Card
                                overflow="hidden"
                                borderRadius="10px"
                                key={collectionDetails.id}
                            >
                                <Image
                                    src={collectionDetails.image}
                                    style={{ cursor: "pointer" }}
                                ></Image>
                                <hr />
                                <HStack
                                    justifyContent="space-between"
                                    padding={1}
                                >
                                    <Stack padding={3} spacing={0}>
                                        <Text
                                            color="#9CA3AF"
                                            fontSize="12px"
                                            fontWeight="900"
                                        >
                                            {collectionDetails.category}
                                        </Text>
                                        <Text fontSize="12px" fontWeight="900">
                                            {collectionDetails.name}
                                        </Text>
                                        <Text
                                            fontSize="12px"
                                            paddingY={2}
                                            fontWeight="900"
                                        >
                                            LKR {collectionDetails.price}
                                        </Text>
                                    </Stack>
                                    <IconButton
                                        colorScheme="gray"
                                        variant="ghost"
                                        aria-label="Add"
                                        icon={<FaCartPlus />}
                                        size="lg"
                                        onClick={() => {
                                            Add(collectionDetails.id);
                                        }}
                                    ></IconButton>
                                </HStack>
                            </Card>
                        );
                    })}
            </SimpleGrid>
            <HStack justifyContent="center" paddingBottom={6} spacing={3}>
                {pages.map((label, index) => {
                    return (
                        <Button
                            key={index}
                            colorScheme="teal"
                            variant={page == label ? "solid" : "ghost"}
                            onClick={() => {
                                setPage(label);
                            }}
                        >
                            {label}
                        </Button>
                    );
                })}
            </HStack>
        </>
    );
};

export default CollectionCards;
