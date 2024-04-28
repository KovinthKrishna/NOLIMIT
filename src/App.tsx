import { Grid, GridItem, Text } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import AboveFooter from "./components/AboveFooter";
import Footer from "./components/Footer";
import Router from "./Router";

const App = () => {
    return (
        <Grid>
            <GridItem>
                <NavBar />
            </GridItem>
            <GridItem>
                <Router />
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
