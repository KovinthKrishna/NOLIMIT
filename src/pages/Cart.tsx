import {
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

const Cart = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:3000")
            .then((result) => setItems(result.data))
            .catch((err) => console.log(err));
    }, []);
    console.log(items);

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
                {collectionsDetails.slice(24, 30).map((collectionDetails) => {
                    return (
                        <Card
                            shadow="0 0 4px"
                            borderRadius="5px"
                            key={collectionDetails.id}
                        >
                            <HStack
                                justifyContent="space-between"
                                padding={{ base: 2, md: 4 }}
                            >
                                <HStack spacing={{ base: 2, lg: 4 }}>
                                    <Image
                                        src={collectionDetails.image}
                                        height={{ base: "80px", md: 40 }}
                                        borderRadius="5px"
                                        border="2px solid black"
                                    ></Image>
                                    <VStack alignItems="left">
                                        <Text fontSize="12px" as="b">
                                            {collectionDetails.name}
                                        </Text>
                                        <Text fontSize="12px" as="b">
                                            1 * LKR {collectionDetails.price}
                                        </Text>
                                    </VStack>
                                </HStack>
                                <IconButton
                                    colorScheme="red"
                                    variant="ghost"
                                    isRound={true}
                                    aria-label="Remove"
                                    icon={<MdDelete />}
                                    size="lg"
                                ></IconButton>
                            </HStack>
                        </Card>
                    );
                })}
            </SimpleGrid>
        </>
    );
};

export default Cart;
