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
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { useContext, useEffect, useState } from "react";
import ProductCards from "../components/ProductCards";
import { fetchItem, newItem } from "../hooks/useItem";
import { AppContext } from "../App";

const Products = () => {
    const handleShowAlert = useContext(AppContext);
    const navigate = useNavigate();
    const [productCart, setProductCart] = useState(false);
    const [buyCount, setBuyCount] = useState(1);
    const [items, setItems] = useState([]);
    const { id } = useParams();
    const loadItems = async () => {
        const data = await fetchItem();
        setItems(data ?? []);
    };
    const duplicate = items.find(
        (item: { id: number }) => id && item.id === parseInt(id)
    );
    useEffect(() => {
        if (duplicate) {
            setProductCart(true);
        }
    }, [duplicate]);
    const product = collectionsDetails.find((collectionDetails) => {
        if (id && collectionDetails.id === parseInt(id)) {
            return true;
        }
    });
    useEffect(() => {
        setProductCart(false);
        setBuyCount(1);
        loadItems();
        product
            ? (document.title = `NOLIMIT | ${product.name}`)
            : navigate("/collections/Offers");
    }, [product, navigate]);
    const products =
        product &&
        collectionsDetails.filter(
            (item) =>
                item.category === product.category && item.id !== product.id
        );

    return (
        product && (
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
                                        isDisabled={
                                            buyCount === 1 || productCart
                                        }
                                        onClick={() => {
                                            setBuyCount(buyCount - 1);
                                        }}
                                    />
                                    <Button>{buyCount}</Button>
                                    <IconButton
                                        aria-label="Add"
                                        icon={<AddIcon />}
                                        isDisabled={productCart}
                                        onClick={() => {
                                            setBuyCount(buyCount + 1);
                                        }}
                                    />
                                </ButtonGroup>
                                <Button
                                    colorScheme="teal"
                                    variant="solid"
                                    width="100%"
                                    isDisabled={productCart}
                                    onClick={async () => {
                                        const result = await newItem(
                                            product.id,
                                            buyCount
                                        );
                                        handleShowAlert(result ?? "");
                                        setProductCart(true);
                                        setBuyCount(1);
                                    }}
                                >
                                    {productCart
                                        ? "Already in Cart"
                                        : "Add to Cart"}
                                </Button>
                                <Button
                                    colorScheme="teal"
                                    variant="outline"
                                    width="100%"
                                    onClick={async () => {
                                        !productCart &&
                                            (await newItem(
                                                product.id,
                                                buyCount
                                            ));
                                        navigate("/cart");
                                    }}
                                >
                                    {productCart ? "Go to Cart" : "Buy Now"}
                                </Button>
                            </HStack>
                        </VStack>
                    </SimpleGrid>
                </GridItem>
                <hr />
                <GridItem>
                    {products && <ProductCards products={products} />}
                </GridItem>
            </Grid>
        )
    );
};

export default Products;
