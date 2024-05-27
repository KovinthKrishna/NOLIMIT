import { Button, Grid, GridItem, Show, Text } from "@chakra-ui/react";
import collectionsDetails from "./collectionsDetails";
import ProductCards from "./ProductCards";

interface Props {
    title: string;
    description: string;
    start: number;
    end: number;
}

const Arrivals = ({ title, description, start, end }: Props) => {
    const products = collectionsDetails.slice(start, end);
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
                    {title}
                </Text>
                <Text fontSize={14} fontWeight="800" paddingY={2}>
                    {description}
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
                <ProductCards products={products} />
            </GridItem>
        </Grid>
    );
};

export default Arrivals;
