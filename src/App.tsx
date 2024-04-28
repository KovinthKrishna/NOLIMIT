import { Grid, GridItem, Text } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import HomeCard from "./components/HomeCard";
import Offers from "./components/Offers";
import Categories from "./components/Categories";
import Brands from "./components/Brands";
import AboveFooter from "./components/AboveFooter";
import Footer from "./components/Footer";

const App = () => {
    return (
        <Grid>
            <GridItem>
                <NavBar />
            </GridItem>
            <GridItem>
                <HomeCard />
            </GridItem>
            <GridItem padding="4%">
                <Offers />
            </GridItem>
            <GridItem padding="4%" backgroundColor="#F3F4F6">
                <Categories />
            </GridItem>
            <GridItem paddingY="6%">
                <Brands />
            </GridItem>
            <GridItem>
                <AboveFooter />
            </GridItem>
            <GridItem>
                <Footer />
            </GridItem>
            <hr />
            <GridItem textAlign="center">
                <Text fontSize="10px" fontWeight="800" paddingY="15px">
                    © 2024 NOLIMIT Online Store. All rights reserved. Powered by
                    GPOS
                </Text>
            </GridItem>
        </Grid>
    );
};

export default App;
