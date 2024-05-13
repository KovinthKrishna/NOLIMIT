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
import axios from "axios";
import { Link } from "react-router-dom";
import { CheckIcon } from "@chakra-ui/icons";

interface Props {
    category: string;
    productID: number;
}

interface DisabledButtons {
    [key: number]: boolean;
}

const ProductCards = ({ category, productID }: Props) => {
    const [items, setItems] = useState([]);
    const [refresh, setRefresh] = useState(false);
    const [button, setButton] = useState<DisabledButtons>({});

    useEffect(() => {
        axios
            .get("https://nolimit-server.vercel.app/")
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
            .post("https://nolimit-server.vercel.app/add/items", {
                id: id,
                count: 1,
            })
            .then(() => {
                setRefresh(true);
            })
            .catch((err) => console.log(err));
    };

    const Update = (duplicate: { _id: string; id: number; count: number }) => {
        axios
            .put(
                "https://nolimit-server.vercel.app/update/items/" +
                    duplicate._id,
                {
                    count: duplicate.count + 1,
                }
            )
            .then(() => {
                setRefresh(true);
            })
            .catch((err) => console.log(err));
    };

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

    const products = collectionsDetails.filter(
        (product) => product.category === category && product.id !== productID
    );
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
                                <Link
                                    to={`/products/${collectionDetails.id}`}
                                    onClick={() => {
                                        setStart(0);
                                    }}
                                >
                                    <Image
                                        src={collectionDetails.image}
                                        style={{ cursor: "pointer" }}
                                    ></Image>
                                </Link>
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
                                        icon={
                                            button[collectionDetails.id] ? (
                                                <CheckIcon />
                                            ) : (
                                                <FaCartPlus />
                                            )
                                        }
                                        size="lg"
                                        isDisabled={
                                            button[collectionDetails.id]
                                        }
                                        onClick={() => {
                                            Add(collectionDetails.id);
                                            setButton((state) => ({
                                                ...state,
                                                [collectionDetails.id]: true,
                                            }));
                                            setTimeout(() => {
                                                setButton((state) => ({
                                                    ...state,
                                                    [collectionDetails.id]:
                                                        false,
                                                }));
                                            }, 2000);
                                        }}
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

export default ProductCards;
