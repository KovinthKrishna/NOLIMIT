import { Button, Grid, GridItem, HStack } from "@chakra-ui/react";
import CategoryBanner from "../components/CategoryBanner";
import FilteredCards from "../components/FilteredCards";
import { useParams } from "react-router-dom";
import CollectionBanner from "../components/CollectionBanner";

const Category = () => {
    const { category } = useParams();
    return (
        <Grid>
            <GridItem backgroundColor="#F4F3F1" paddingY={{ base: 30, lg: 0 }}>
                {category ? (
                    <CategoryBanner category={category} />
                ) : (
                    <CollectionBanner />
                )}
            </GridItem>
            <GridItem>
                <HStack paddingX={{ base: 4, lg: 10 }} paddingY={6}>
                    <Button colorScheme="teal" variant="outline">
                        Order By - Newest
                    </Button>
                    <Button colorScheme="teal" variant="solid">
                        Filter
                    </Button>
                </HStack>
                <hr />
            </GridItem>
            <GridItem>
                <FilteredCards category={category} />
            </GridItem>
        </Grid>
    );
};

export default Category;
