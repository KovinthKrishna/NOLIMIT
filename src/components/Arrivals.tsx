import { Button, Grid, GridItem, Show, Text } from "@chakra-ui/react";
import FrontCards from "./FrontCards";

const Arrivals = () => {
    const today = new Date();

    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();

    const formattedDate = `${year} - ${month < 10 ? "0" + month : month} - ${
        day < 10 ? "0" + day : day
    }`;

    return (
        <Grid>
            <GridItem>
                <Show above="md">
                    <Text fontSize={12} fontWeight="800">
                        {formattedDate}
                    </Text>
                </Show>
                <Text fontSize={{ base: 30, lg: 36 }} fontWeight="900">
                    NEW ARRIVALS
                </Text>
                <Text fontSize={14} fontWeight="800" paddingY={2}>
                    Lets explore what is the new-in in our store.
                </Text>
                <Button
                    colorScheme="gray"
                    variant="outline"
                    paddingX={6}
                    paddingY={3}
                    marginTop={6}
                >
                    View All
                </Button>
            </GridItem>
            <GridItem>
                <FrontCards startIndex={24} endIndex={30} />
            </GridItem>
        </Grid>
    );
};

export default Arrivals;
