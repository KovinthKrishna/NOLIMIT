import { Button, HStack, SimpleGrid } from "@chakra-ui/react";
import { useState } from "react";
import collectionsDetails from "./collectionsDetails";
import Cards from "./Cards";

interface Props {
    category: string;
}

const FilteredCards = ({ category }: Props) => {
    const [page, setPage] = useState(1);
    const products = collectionsDetails.filter(
        (product) => product.category === category
    );
    const pages = Array.from(
        { length: Math.ceil(products.length / 12) },
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
                {products
                    .slice(page * 12 - 12, page * 12)
                    .map((collectionDetails) => {
                        return (
                            <Cards
                                collectionDetails={collectionDetails}
                                key={collectionDetails.id}
                            />
                        );
                    })}
            </SimpleGrid>
            <HStack justifyContent="center" paddingBottom={6} spacing={3}>
                {pages.map((label, index) => {
                    return (
                        <Button
                            key={index}
                            colorScheme="teal"
                            variant={page == label ? "solid" : "outline"}
                            onClick={() => {
                                setPage(label);
                                window.scrollTo({
                                    top: 0,
                                    behavior: "smooth",
                                });
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

export default FilteredCards;
