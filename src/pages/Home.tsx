import { Grid, GridItem } from "@chakra-ui/react";
import HomeCard from "../components/HomeCard";
import Categories from "../components/Categories";
import Brands from "../components/Brands";
import Arrivals from "../components/Arrivals";
import Trending from "../components/Trending";
import offersDetails from "../components/offersDetails";
import categoriesDetails from "../components/categoriesDetails";

const Home = () => {
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
                <Arrivals />
            </GridItem>
            <GridItem padding="5%" backgroundColor="#F3F4F6">
                <Trending />
            </GridItem>
            <GridItem paddingY="6%">
                <Brands />
            </GridItem>
        </Grid>
    );
};

export default Home;
