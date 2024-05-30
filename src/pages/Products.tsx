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
import { setItem } from "../hooks/useItem";
import { AppContext } from "../App";
import { motion } from "framer-motion";

const MotionImage = motion(Image);

const Products = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const handleShowAlert = useContext(AppContext);
    const [buyCount, setBuyCount] = useState(1);
    const [added, setAdded] = useState(false);
    const product = collectionsDetails.find((collectionDetails) => {
        if (id && collectionDetails.id === parseInt(id)) {
            return true;
        }
    });
    useEffect(() => {
        product
            ? (document.title = `NOLIMIT | ${product ? product.name : ""}`)
            : navigate("/collections/Offers");
        setBuyCount(1);
        setAdded(false);
    }, [product, navigate]);
    const buyItem = async (id: number, count: number) => {
        const result = await setItem(id, count);
        handleShowAlert(result ?? "");
        setBuyCount(1);
        setAdded(true);
    };
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
                <GridItem
                    paddingX={{ base: 0, md: 10, lg: 20 }}
                    paddingY={10}
                    key={id}
                >
                    <SimpleGrid
                        columns={{ base: 1, lg: 2 }}
                        justifyItems="center"
                        spacingY={8}
                    >
                        <MotionImage
                            initial={{ opacity: 0, x: -window.innerWidth }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            src={product.image}
                            width="100%"
                        />
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
                                        isDisabled={buyCount === 1 || added}
                                        onClick={() => {
                                            setBuyCount(buyCount - 1);
                                        }}
                                    />
                                    <Button>{buyCount}</Button>
                                    <IconButton
                                        aria-label="Add"
                                        icon={<AddIcon />}
                                        isDisabled={added}
                                        onClick={() => {
                                            setBuyCount(buyCount + 1);
                                        }}
                                    />
                                </ButtonGroup>
                                <Button
                                    colorScheme="teal"
                                    variant="solid"
                                    width="100%"
                                    isDisabled={added}
                                    onClick={() => {
                                        buyItem(product.id, buyCount);
                                    }}
                                >
                                    {added ? "Already in Cart" : "Add to Cart"}
                                </Button>
                                <Button
                                    colorScheme="teal"
                                    variant="outline"
                                    width="100%"
                                    onClick={async () => {
                                        !added &&
                                            (await buyItem(
                                                product.id,
                                                buyCount
                                            ));
                                        navigate("/cart");
                                    }}
                                >
                                    {added ? "Go to Cart" : "Buy Now"}
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
