import {
    Button,
    Card,
    HStack,
    Image,
    SimpleGrid,
    Stack,
    Text,
} from "@chakra-ui/react";
import item_01 from "../assets/collections/item_01.webp";
import item_02 from "../assets/collections/item_02.webp";
import item_03 from "../assets/collections/item_03.webp";
import item_04 from "../assets/collections/item_04.webp";
import item_05 from "../assets/collections/item_05.webp";
import item_06 from "../assets/collections/item_06.webp";
import item_07 from "../assets/collections/item_07.webp";
import item_08 from "../assets/collections/item_08.webp";
import item_09 from "../assets/collections/item_09.webp";
import item_10 from "../assets/collections/item_10.webp";
import item_11 from "../assets/collections/item_11.webp";
import item_12 from "../assets/collections/item_12.webp";
import item_13 from "../assets/collections/item_13.webp";
import item_14 from "../assets/collections/item_14.webp";
import item_15 from "../assets/collections/item_15.webp";
import item_16 from "../assets/collections/item_16.webp";
import item_17 from "../assets/collections/item_17.webp";
import item_18 from "../assets/collections/item_18.webp";
import item_19 from "../assets/collections/item_19.webp";
import item_20 from "../assets/collections/item_20.webp";
import item_21 from "../assets/collections/item_21.webp";
import item_22 from "../assets/collections/item_22.webp";
import item_23 from "../assets/collections/item_23.webp";
import item_24 from "../assets/collections/item_24.webp";
import { useState } from "react";

const CollectionCards = () => {
    const [page, setPage] = useState(1);

    const collectionsDetails_1 = [
        {
            id: 1,
            image: item_01,
            category: "Women",
            name: "POPSODA Women's Casual Pant",
            price: "4,725.00",
        },
        {
            id: 2,
            image: item_02,
            category: "Men",
            name: "MBRK Polo Collar Men's T-Shirt",
            price: "2,765.00",
        },
        {
            id: 3,
            image: item_03,
            category: "Men",
            name: "MBRK Polo Collar Men's T-Shirt",
            price: "2,765.00",
        },
        {
            id: 4,
            image: item_04,
            category: "Men",
            name: "MBRK Polo Collar Men's T-Shirt",
            price: "2,765.00",
        },
        {
            id: 5,
            image: item_05,
            category: "Men",
            name: "MBRK Polo Collar Men's T-Shirt",
            price: "2,765.00",
        },
        {
            id: 6,
            image: item_06,
            category: "Women",
            name: "HUF & DEE Women's Casual Blouse",
            price: "1,490.00",
        },
        {
            id: 7,
            image: item_07,
            category: "Women",
            name: "HUF & DEE Women's Casual Blouse",
            price: "1,090.00",
        },
        {
            id: 8,
            image: item_08,
            category: "Women",
            name: "HUF & DEE Women's Casual Blouse",
            price: "1,290.00",
        },
        {
            id: 9,
            image: item_09,
            category: "Women",
            name: "HUF & DEE Women's Casual Blouse",
            price: "1,490.00",
        },
        {
            id: 10,
            image: item_10,
            category: "Women",
            name: "HUF & DEE Women's Skinny",
            price: "350.00",
        },
        {
            id: 11,
            image: item_11,
            category: "Women",
            name: "POPSODA Women's Casual Pant",
            price: "990.00",
        },
        {
            id: 12,
            image: item_12,
            category: "Women",
            name: "POPSODA Women's Casual Pant",
            price: "990.00",
        },
    ];
    const collectionsDetails_2 = [
        {
            id: 13,
            image: item_13,
            category: "Women",
            name: "POPSODA Women's Casual Pant",
            price: "990.00",
        },
        {
            id: 14,
            image: item_14,
            category: "Women",
            name: "POPSODA Women's Casual Pant",
            price: "990.00",
        },
        {
            id: 15,
            image: item_15,
            category: "Women",
            name: "POPSODA Women's Casual Pant",
            price: "990.00",
        },
        {
            id: 16,
            image: item_16,
            category: "Women",
            name: "HUF & DEE Women's Tunic Top",
            price: "1,390.00",
        },
        {
            id: 17,
            image: item_17,
            category: "Women",
            name: "HUF & DEE Women's Tunic Top",
            price: "1,390.00",
        },
        {
            id: 18,
            image: item_18,
            category: "Men",
            name: "DEEDAT Crew Neck T-Shirt",
            price: "2,190.00",
        },
        {
            id: 19,
            image: item_19,
            category: "Men",
            name: "DEEDAT Crew Neck T-Shirt",
            price: "1,990.00",
        },
        {
            id: 20,
            image: item_20,
            category: "Men",
            name: "DEEDAT Crew Neck T-Shirt",
            price: "1,990.00",
        },
        {
            id: 21,
            image: item_21,
            category: "Men",
            name: "DEEDAT Crew Neck T-Shirt",
            price: "1,990.00",
        },
        {
            id: 22,
            image: item_22,
            category: "Men",
            name: "DEEDAT Crew Neck T-Shirt",
            price: "2,190.00",
        },
        {
            id: 23,
            image: item_23,
            category: "Men",
            name: "DEEDAT Crew Neck T-Shirt",
            price: "1,990.00",
        },
        {
            id: 24,
            image: item_24,
            category: "Men",
            name: "DEEDAT Crew Neck T-Shirt",
            price: "2,190.00",
        },
    ];

    return (
        <>
            <SimpleGrid
                columns={{ base: 2, lg: 4 }}
                justifyItems="center"
                spacing={6}
                paddingY={10}
                paddingX={{ base: 2, lg: 14 }}
            >
                {(page == 1
                    ? collectionsDetails_1
                    : page == 2
                    ? collectionsDetails_2
                    : []
                ).map((collectionDetails) => {
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
                        </Card>
                    );
                })}
            </SimpleGrid>
            <HStack justifyContent="center" paddingBottom={6} spacing={3}>
                <Button
                    colorScheme="teal"
                    variant={page == 1 ? "solid" : "ghost"}
                    onClick={() => {
                        setPage(1);
                    }}
                >
                    1
                </Button>
                <Button
                    colorScheme="teal"
                    variant={page == 2 ? "solid" : "ghost"}
                    onClick={() => {
                        setPage(2);
                    }}
                >
                    2
                </Button>
            </HStack>
        </>
    );
};

export default CollectionCards;
