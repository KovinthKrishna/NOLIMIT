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
import ProductCards from "../components/ProductCards";
import { setItem } from "../hooks/useItem";

const Products = () => {
    const [buyCount, setBuyCount] = useState(1);
    const [button, setButton] = useState(false);
    const { id } = useParams();
    const navigate = useNavigate();
    const product = collectionsDetails.find((collectionDetails) => {
        if (id !== undefined && collectionDetails.id === parseInt(id)) {
            return true;
        }
    });
    useEffect(() => {
        if (!product) {
            navigate("/collections/Offers");
        }
    }, [product, navigate]);
    const buyItem = async (id: number, change: number) => {
        await setItem(id, change);
        setBuyCount(1);
    };
    const products =
        product &&
        collectionsDetails.filter(
            (item) =>
                item.category === product.category && item.id !== product.id
        );
    useEffect(() => {
        document.title = `NOLIMIT | ${product ? product.name : ""}`;
    }, [product]);

    return (
        product &&
        products && (
            <Grid padding="5%">
                <GridItem>
                    <Text fontSize={12} as="b">
                        Home | {product.category}
                    </Text>
                </GridItem>
                <GridItem paddingX={{ base: 0, md: 10, lg: 20 }} paddingY={10}>
                    <SimpleGrid
                        columns={{ base: 1, lg: 2 }}
                        justifyItems="center"
                        spacingY={8}
                    >
                        <Image src={product.image} width="100%" />
                        <VStack
                            width="100%"
                            justifyContent="center"
                            alignItems="left"
                            padding={{ base: 0, lg: 8 }}
                        >
                            <Text fontSize={{ base: 20, lg: 30 }} as="b">
                                {product.name}
                            </Text>
                            <Text
                                fontSize={18}
                                as="b"
                                paddingY={{ base: 4, lg: 12 }}
                            >
                                LKR {product.price}
                            </Text>
                            <HStack>
                                <ButtonGroup
                                    size="sm"
                                    isAttached
                                    variant="outline"
                                >
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
                                        buyItem(product.id ?? 0, buyCount);
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
                                    onClick={async () => {
                                        await buyItem(
                                            product.id ?? 0,
                                            buyCount
                                        );
                                        navigate("/cart");
                                    }}
                                >
                                    Buy Now
                                </Button>
                            </HStack>
                        </VStack>
                    </SimpleGrid>
                </GridItem>
                <hr />
                <GridItem>
                    <ProductCards products={products} />
                </GridItem>
            </Grid>
        )
    );
};

export default Products;
