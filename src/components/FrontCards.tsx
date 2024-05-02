import {
    Card,
    SimpleGrid,
    Image,
    Stack,
    Text,
    HStack,
    IconButton,
} from "@chakra-ui/react";
import collectionsDetails from "./collectionsDetails";
import { CgChevronLeft, CgChevronRight } from "react-icons/cg";
import { FaCartPlus } from "react-icons/fa";
import { useEffect, useState } from "react";

interface Props {
    startIndex: number;
    endIndex: number;
}

const FrontCards = ({ startIndex, endIndex }: Props) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const products = collectionsDetails.slice(startIndex, endIndex);
    const [start, setStart] = useState(0);
    const length = windowWidth < 768 ? 1 : windowWidth < 992 ? 3 : 4;
    if (start > products.length - length) {
        setStart(products.length - length);
    }

    return (
        <HStack paddingTop={14} justifyContent="center" spacing={0}>
            <IconButton
                colorScheme="gray"
                aria-label="Previous"
                icon={<CgChevronLeft />}
                size="lg"
                onClick={() => {
                    setStart(start - 1);
                }}
                isDisabled={start == 0}
            />
            <SimpleGrid
                columns={{ base: 1, md: 3, lg: 4 }}
                justifyItems="center"
                spacing={6}
            >
                {products
                    .slice(start, start + length)
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
                                    ></IconButton>
                                </HStack>
                            </Card>
                        );
                    })}
            </SimpleGrid>
            <IconButton
                colorScheme="gray"
                aria-label="Next"
                icon={<CgChevronRight />}
                size="lg"
                onClick={() => {
                    setStart(start + 1);
                }}
                isDisabled={products.length == start + length}
            />
        </HStack>
    );
};

export default FrontCards;
