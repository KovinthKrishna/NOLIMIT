import { Heading, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import cards from "../assets/cards.webp";
import { motion } from "framer-motion";

const MotionVStack = motion(VStack);
const MotionImage = motion(Image);

const GiftBanner = () => {
    return (
        <SimpleGrid
            columns={{ base: 1, lg: 2 }}
            justifyItems="center"
            padding="4%"
        >
            <MotionVStack
                alignItems="left"
                justifyContent="center"
                order={{ base: 2, lg: 1 }}
                width="100%"
                initial={{ opacity: 0, x: -window.innerWidth }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.25 }}
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
                    premium clothing, accessories and fashion experience.
                </Text>
            </MotionVStack>
            <MotionImage
                initial={{ opacity: 0, y: -window.innerHeight }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.25 }}
                src={cards}
                width="100%"
                order={{ base: 1, lg: 2 }}
            />
        </SimpleGrid>
    );
};

export default GiftBanner;
