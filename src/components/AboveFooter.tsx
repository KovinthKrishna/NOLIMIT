import { SimpleGrid, Text } from "@chakra-ui/react";

const AboveFooter = () => {
    return (
        <SimpleGrid columns={{ base: 2, lg: 4 }}>
            <Text
                fontSize="14px"
                fontWeight="bold"
                backgroundColor="#2E3D52"
                color="white"
                paddingY="25px"
                width="99%"
                textAlign="center"
            >
                Island wide deliveries
            </Text>
            <Text
                fontSize="14px"
                fontWeight="bold"
                backgroundColor="#2E3D52"
                color="white"
                paddingY="25px"
                width="99%"
                textAlign="center"
            >
                Secured Payment Method
            </Text>
            <Text
                fontSize="14px"
                fontWeight="bold"
                backgroundColor="#2E3D52"
                color="white"
                paddingY="25px"
                width="99%"
                textAlign="center"
            >
                Buy Now, Pay in 3 Installments
            </Text>
            <Text
                fontSize="14px"
                fontWeight="bold"
                backgroundColor="#2E3D52"
                color="white"
                paddingY="25px"
                width="99%"
                textAlign="center"
            >
                Exchange at any outlet
            </Text>
        </SimpleGrid>
    );
};

export default AboveFooter;
