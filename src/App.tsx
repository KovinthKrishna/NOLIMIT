import { createContext, useState } from "react";
import { Grid, GridItem, Text } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import AboveFooter from "./components/AboveFooter";
import Footer from "./components/Footer";
import Router from "./Router";
import CartAlert from "./components/CartAlert";

type ContextType = (result: string) => void;

interface Alerts {
    id: number;
    result: string;
}

export const AppContext = createContext<ContextType>(() => {});

const App = () => {
    const [alerts, setAlerts] = useState<Alerts[]>([]);
    const handleShowAlert = (result: string) => {
        const id = Date.now();
        setAlerts([...alerts, { id, result }]);
        setTimeout(() => {
            setAlerts((alerts) => alerts.filter((alert) => alert.id !== id));
        }, 2000);
    };

    return (
        <AppContext.Provider value={handleShowAlert}>
            <Grid>
                <GridItem position="sticky" top={0} zIndex={1}>
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
                        © 2024 NOLIMIT Online Store. All rights reserved.
                        Powered by GPOS
                    </Text>
                </GridItem>
            </Grid>
            <CartAlert alerts={alerts} />
        </AppContext.Provider>
    );
};

export default App;
