import { Button, Grid, HStack, Text } from "@chakra-ui/react";

interface Props {
    total: number;
}

const CartBalance = ({ total }: Props) => {
    return (
        <Grid paddingX={{ base: 2, md: 4, lg: 60 }} paddingY={10}>
            <HStack justifyContent="space-between">
                <Text fontSize="16px" as="b">
                    Subtotal :
                </Text>
                <Text fontSize="16px" as="b">
                    LKR{" "}
                    {total.toLocaleString("en-US", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                    })}
                </Text>
            </HStack>
            <Text fontSize="12px" paddingY={4}>
                Shipping, taxes and discounts calculated at checkout.
            </Text>
            <Button colorScheme="teal" variant="solid" isDisabled={total === 0}>
                Checkout
            </Button>
        </Grid>
    );
};

export default CartBalance;
