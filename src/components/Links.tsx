import { Heading, VStack, Text } from "@chakra-ui/react";

const Links = () => {
    return (
        <VStack alignItems="start">
            <Heading fontSize="12px" fontWeight="900" paddingY="15px">
                QUICK LINKS
            </Heading>
            <Text
                fontSize="12px"
                fontWeight="bold"
                paddingY="2px"
                style={{ cursor: "pointer" }}
            >
                About Us
            </Text>
            <Text
                fontSize="12px"
                fontWeight="bold"
                paddingY="2px"
                style={{ cursor: "pointer" }}
            >
                Privacy & Policy
            </Text>
            <Text
                fontSize="12px"
                fontWeight="bold"
                paddingY="2px"
                style={{ cursor: "pointer" }}
            >
                Terms & Conditions
            </Text>
            <Text
                fontSize="12px"
                fontWeight="bold"
                paddingY="2px"
                style={{ cursor: "pointer" }}
            >
                Delivery Details
            </Text>
            <Text
                fontSize="12px"
                fontWeight="bold"
                paddingY="2px"
                style={{ cursor: "pointer" }}
            >
                Return Policy
            </Text>
            <Text
                fontSize="12px"
                fontWeight="bold"
                paddingY="2px"
                style={{ cursor: "pointer" }}
            >
                NOLIMIT CIRCLE
            </Text>
            <Text
                fontSize="12px"
                fontWeight="bold"
                paddingY="2px"
                style={{ cursor: "pointer" }}
            >
                FAQ
            </Text>
            <Text
                fontSize="12px"
                fontWeight="bold"
                paddingY="2px"
                style={{ cursor: "pointer" }}
            >
                Promotions
            </Text>
            <Text
                fontSize="12px"
                fontWeight="bold"
                paddingY="2px"
                style={{ cursor: "pointer" }}
            >
                Track My Order
            </Text>
        </VStack>
    );
};

export default Links;
