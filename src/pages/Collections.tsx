import { Grid, GridItem } from "@chakra-ui/react";
import CollectionBanner from "../components/CollectionBanner";

const Collections = () => {
    return (
        <Grid>
            <GridItem backgroundColor="#F4F3F1" paddingY={{ base: 30, lg: 0 }}>
                <CollectionBanner />
            </GridItem>
        </Grid>
    );
};

export default Collections;
