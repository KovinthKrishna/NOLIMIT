import { Button, Grid, GridItem, Show, Text } from "@chakra-ui/react";
import FrontCards from "./FrontCards";

const Trending = () => {
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
                    TRENDING RIGHT NOW
                </Text>
                <Text fontSize={14} fontWeight="800" paddingY={2}>
                    Want to find out whats the trends among our customers? Lets
                    check out.
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
                <FrontCards startIndex={5} endIndex={15} />
            </GridItem>
        </Grid>
    );
};

export default Trending;
