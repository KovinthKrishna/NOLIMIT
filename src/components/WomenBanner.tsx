import { Heading, SimpleGrid, VStack, Text, Image } from "@chakra-ui/react";
import women from "../assets/women.webp";

const WomenBanner = () => {
    return (
        <SimpleGrid
            columns={{ base: 1, lg: 2 }}
            justifyItems="center"
            padding="4%"
        >
            <VStack
                alignItems="left"
                justifyContent="center"
                order={{ base: 2, lg: 1 }}
            >
                <Text fontSize="12px" color="#374151" fontWeight="bolder">
                    Home | Category
                </Text>
                <Heading fontSize={{ base: 30, lg: 60 }} fontWeight="bolder">
                    Women
                </Heading>
                <Text fontSize="14px" fontWeight="bolder">
                    NOLIMIT Women collection for you
                </Text>
                <Text fontSize="12px" fontWeight="bolder" paddingY="40px">
                    Check the Women collection in our store. Shop with us for a
                    premium clothing, accessories and fashion experience.
                </Text>
            </VStack>
            <Image src={women} width="100%" order={{ base: 1, lg: 2 }}></Image>
        </SimpleGrid>
    );
};

export default WomenBanner;
