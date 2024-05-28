import { useEffect } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import HomeCard from "../components/HomeCard";
import Categories from "../components/Categories";
import Brands from "../components/Brands";
import FrontCards from "../components/FrontCards";
import offersDetails from "../components/offersDetails";
import categoriesDetails from "../components/categoriesDetails";

const Home = () => {
    useEffect(() => {
        document.title = "NOLIMIT | Home";
    }, []);

    return (
        <Grid>
            <GridItem>
                <HomeCard />
            </GridItem>
            <GridItem padding="4%">
                <Categories categories={offersDetails} />
            </GridItem>
            <GridItem padding="4%" backgroundColor="#F3F4F6">
                <Categories categories={categoriesDetails} />
            </GridItem>
            <GridItem padding="5%">
                <FrontCards
                    title="NEW ARRIVALS"
                    description="Lets explore what is the new-in in our store."
                    start={24}
                    end={30}
                />
            </GridItem>
            <GridItem padding="5%" backgroundColor="#F3F4F6">
                <FrontCards
                    title="TRENDING RIGHT NOW"
                    description="Want to find out whats the trends among our customers? Lets
                    check out."
                    start={5}
                    end={15}
                />
            </GridItem>
            <GridItem paddingY="6%">
                <Brands />
            </GridItem>
        </Grid>
    );
};

export default Home;
