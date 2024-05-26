import { SimpleGrid, VStack, Text, Heading, Image } from "@chakra-ui/react";
import sale from "../assets/sale.png";

const CollectionBanner = () => {
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
                width="100%"
            >
                <Text fontSize="12px" color="#374151" fontWeight="bolder">
                    Home | Collection
                </Text>
                <Heading fontSize={{ base: 30, lg: 60 }} fontWeight="bolder">
                    Offers
                </Heading>
                <Text fontSize="12px" fontWeight="bolder">
                    Check the Offers in our store. Shop with us for a premium
                    clothing, accessories and fashion experience.
                </Text>
            </VStack>
            <Image src={sale} width="100%" order={{ base: 1, lg: 2 }}></Image>
        </SimpleGrid>
    );
};

export default CollectionBanner;
