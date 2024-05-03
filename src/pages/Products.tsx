import {
    Button,
    ButtonGroup,
    Grid,
    GridItem,
    HStack,
    IconButton,
    Image,
    SimpleGrid,
    Text,
    VStack,
} from "@chakra-ui/react";
import { useParams, useNavigate } from "react-router-dom";
import collectionsDetails from "../components/collectionsDetails";
import { AddIcon, CheckIcon, MinusIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import axios from "axios";

export const Products = () => {
    const [buyCount, setBuyCount] = useState(1);
    const { id } = useParams();
    const navigate = useNavigate();
    const product = collectionsDetails.find((collectionDetails) => {
        if (id !== undefined && collectionDetails.id === parseInt(id)) {
            return true;
        }
    });

    const [button, setButton] = useState(false);
    const [items, setItems] = useState([]);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        axios
            .get("http://localhost:3000")
            .then((result) => setItems(result.data))
            .catch((err) => console.log(err));
    }, [refresh]);

    const Add = (id: number, cart: boolean) => {
        setRefresh(false);
        const duplicate = items.find((item: { id: number; count: number }) => {
            if (item.id === id) {
                return true;
            } else {
                return false;
            }
        });
        if (duplicate === undefined) {
            AddToCart(id, cart);
        } else {
            Update(duplicate, cart);
        }
    };

    const AddToCart = (id: number, cart: boolean) => {
        axios
            .post("http://localhost:3000/add/items", {
                id: id,
                count: buyCount,
            })
            .then(() => {
                setRefresh(true);
                if (cart) {
                    navigate("/cart");
                }
            })
            .catch((err) => console.log(err));
    };

    const Update = (
        duplicate: { _id: string; id: number; count: number },
        cart: boolean
    ) => {
        axios
            .put("http://localhost:3000/update/items/" + duplicate._id, {
                count: duplicate.count + buyCount,
            })
            .then(() => {
                setRefresh(true);
                if (cart) {
                    navigate("/cart");
                }
            })
            .catch((err) => console.log(err));
    };

    return (
        <Grid padding={{ base: 4, lg: 8 }}>
            <GridItem>
                <Text fontSize={12} as="b">
                    Home | {product?.category}
                </Text>
            </GridItem>
            <GridItem paddingX={{ base: 0, md: 10, lg: 20 }} paddingY={10}>
                <SimpleGrid
                    columns={{ base: 1, lg: 2 }}
                    justifyItems="center"
                    spacingY={8}
                >
                    <Image src={product?.image} width="100%" />
                    <VStack
                        width="100%"
                        justifyContent="center"
                        alignItems="left"
                        padding={{ base: 0, lg: 8 }}
                    >
                        <Text fontSize={{ base: 20, lg: 30 }} as="b">
                            {product?.name}
                        </Text>
                        <Text
                            fontSize={18}
                            as="b"
                            paddingY={{ base: 4, lg: 12 }}
                        >
                            LKR {product?.price}
                        </Text>
                        <HStack>
                            <ButtonGroup size="sm" isAttached variant="outline">
                                <IconButton
                                    aria-label="Minus"
                                    icon={<MinusIcon />}
                                    isDisabled={buyCount === 1}
                                    onClick={() => {
                                        setBuyCount(buyCount - 1);
                                    }}
                                />
                                <Button>{buyCount}</Button>
                                <IconButton
                                    aria-label="Add"
                                    icon={<AddIcon />}
                                    onClick={() => {
                                        setBuyCount(buyCount + 1);
                                    }}
                                />
                            </ButtonGroup>
                            <Button
                                colorScheme="teal"
                                variant="solid"
                                width="100%"
                                isDisabled={button}
                                onClick={() => {
                                    Add(product?.id || 0, false);
                                    setButton(true);
                                    setTimeout(() => {
                                        setButton(false);
                                    }, 2000);
                                }}
                            >
                                {button ? <CheckIcon /> : "Add to Cart"}
                            </Button>
                            <Button
                                colorScheme="teal"
                                variant="outline"
                                width="100%"
                                onClick={() => {
                                    Add(product?.id || 0, true);
                                    navigate("/cart");
                                }}
                            >
                                Buy Now
                            </Button>
                        </HStack>
                    </VStack>
                </SimpleGrid>
            </GridItem>
        </Grid>
    );
};
