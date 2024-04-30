import { Button, Grid, GridItem, HStack } from "@chakra-ui/react";
import CollectionBanner from "../components/CollectionBanner";
import CollectionCards from "../components/CollectionCards";

const Collections = () => {
    return (
        <Grid>
            <GridItem backgroundColor="#F4F3F1" paddingY={{ base: 30, lg: 0 }}>
                <CollectionBanner />
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
                <CollectionCards />
            </GridItem>
        </Grid>
    );
};

export default Collections;
