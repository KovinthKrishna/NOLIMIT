import { SimpleGrid, VStack, Text, Heading, Image } from "@chakra-ui/react";
import sale from "../assets/sale.png";
import { motion } from "framer-motion";

const MotionVStack = motion(VStack);
const MotionImage = motion(Image);

const CollectionBanner = () => {
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
                    Home | Collection
                </Text>
                <Heading fontSize={{ base: 30, lg: 60 }} fontWeight="bolder">
                    Offers
                </Heading>
                <Text fontSize="12px" fontWeight="bolder">
                    Check the Offers in our store. Shop with us for a premium
                    clothing, accessories and fashion experience.
                </Text>
            </MotionVStack>
            <MotionImage
                initial={{ opacity: 0, y: -window.innerHeight }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.25 }}
                src={sale}
                width="100%"
                order={{ base: 1, lg: 2 }}
            />
        </SimpleGrid>
    );
};

export default CollectionBanner;
