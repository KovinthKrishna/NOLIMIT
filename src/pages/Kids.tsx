import { Button, Grid, GridItem, HStack } from "@chakra-ui/react";
import FilteredCards from "../components/FilteredCards";
import KidsBanner from "../components/KidsBanner";

const Kids = () => {
    return (
        <Grid>
            <GridItem backgroundColor="#F4F3F1" paddingY={{ base: 30, lg: 0 }}>
                <KidsBanner />
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
                <FilteredCards category="Kids" />
            </GridItem>
        </Grid>
    );
};

export default Kids;
