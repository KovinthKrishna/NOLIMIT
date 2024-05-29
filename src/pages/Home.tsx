import { useEffect } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import HomeCard from "../components/HomeCard";
import Categories from "../components/Categories";
import Brands from "../components/Brands";
import FrontCards from "../components/FrontCards";
import offersDetails from "../components/offersDetails";
import categoriesDetails from "../components/categoriesDetails";
import { motion } from "framer-motion";

const MotionGridItem = motion(GridItem);

const Home = () => {
    useEffect(() => {
        document.title = "NOLIMIT | Home";
    }, []);

    return (
        <Grid>
            <MotionGridItem
                initial={{ opacity: 0, x: -window.innerWidth }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.25 }}
            >
                <HomeCard />
            </MotionGridItem>
            <MotionGridItem
                padding="4%"
                initial={{ opacity: 0, x: window.innerWidth }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.25 }}
            >
                <Categories categories={offersDetails} />
            </MotionGridItem>
            <MotionGridItem
                padding="4%"
                backgroundColor="#F3F4F6"
                initial={{ opacity: 0, x: -window.innerWidth }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.25 }}
            >
                <Categories categories={categoriesDetails} />
            </MotionGridItem>
            <MotionGridItem
                padding="5%"
                initial={{ opacity: 0, x: window.innerWidth }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.25 }}
            >
                <FrontCards
                    title="NEW ARRIVALS"
                    description="Lets explore what is the new-in in our store."
                    start={24}
                    end={30}
                />
            </MotionGridItem>
            <MotionGridItem
                padding="5%"
                backgroundColor="#F3F4F6"
                initial={{ opacity: 0, x: -window.innerWidth }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.25 }}
            >
                <FrontCards
                    title="TRENDING RIGHT NOW"
                    description="Want to find out whats the trends among our customers? Lets
                    check out."
                    start={5}
                    end={15}
                />
            </MotionGridItem>
            <MotionGridItem
                paddingY="6%"
                initial={{ opacity: 0, x: window.innerWidth }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.25 }}
            >
                <Brands />
            </MotionGridItem>
        </Grid>
    );
};

export default Home;
