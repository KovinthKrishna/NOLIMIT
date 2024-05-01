import { Heading, SimpleGrid, VStack, Text, Image } from "@chakra-ui/react";
import kids from "../assets/kids.webp";

const KidsBanner = () => {
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
                    Kids
                </Heading>
                <Text fontSize="14px" fontWeight="bolder">
                    NOLIMIT Kids collection for you
                </Text>
                <Text fontSize="12px" fontWeight="bolder" paddingY="40px">
                    Check the Kids collection in our store. Shop with us for a
                    premium clothing, accessories and fashion experience.
                </Text>
            </VStack>
            <Image src={kids} width="100%" order={{ base: 1, lg: 2 }}></Image>
        </SimpleGrid>
    );
};

export default KidsBanner;
