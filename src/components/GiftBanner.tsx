import { Heading, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import cards from "../assets/cards.webp";

const GiftBanner = () => {
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
                    Home | Gift Vouchers
                </Text>
                <Heading fontSize={{ base: 30, lg: 60 }} fontWeight="bolder">
                    Gift Vouchers
                </Heading>
                <Text fontSize="14px" fontWeight="bolder">
                    Nolimit Gift Vouchers for you
                </Text>
                <Text fontSize="12px" fontWeight="bolder" paddingY="40px">
                    Check the Gift Vouchers in our store. Shop with us for a
                    premium clothing, accessories and fashion experience. Found
                    4 products for gift-vouchers in 1 pages
                </Text>
            </VStack>
            <Image src={cards} width="100%" order={{ base: 1, lg: 2 }}></Image>
        </SimpleGrid>
    );
};

export default GiftBanner;
