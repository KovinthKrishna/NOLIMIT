import { Grid, GridItem } from "@chakra-ui/react";
import GiftBanner from "../components/GiftBanner";
import GiftCards from "../components/GiftCards";

const Gifts = () => {
    return (
        <Grid>
            <GridItem backgroundColor="#F4F3F1" paddingY={{ base: 30, lg: 0 }}>
                <GiftBanner />
            </GridItem>
            <GridItem paddingX="3%" paddingY={10}>
                <GiftCards />
            </GridItem>
        </Grid>
    );
};

export default Gifts;
