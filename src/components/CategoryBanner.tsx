import { Heading, SimpleGrid, VStack, Text, Image } from "@chakra-ui/react";
import women from "../assets/women.webp";
import men from "../assets/men.webp";
import kids from "../assets/kids.webp";
import { motion } from "framer-motion";

interface Props {
    category: string;
}

const MotionVStack = motion(VStack);
const MotionImage = motion(Image);

const CategoryBanner = ({ category }: Props) => {
    return (
        <SimpleGrid
            columns={{ base: 1, lg: 2 }}
            justifyItems="center"
            padding="4%"
            spacingY={10}
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
                    Home | Category
                </Text>
                <Heading fontSize={{ base: 30, lg: 60 }} fontWeight="bolder">
                    {category}
                </Heading>
                <Text fontSize="14px" fontWeight="bolder">
                    NOLIMIT {category} collection for you
                </Text>
                <Text fontSize="12px" fontWeight="bolder" paddingY="40px">
                    Check the {category} collection in our store. Shop with us
                    for a premium clothing, accessories and fashion experience.
                </Text>
            </MotionVStack>
            <MotionImage
                initial={{ opacity: 0, y: -window.innerHeight }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.25 }}
                src={
                    category === "Women"
                        ? women
                        : category === "Men"
                        ? men
                        : category === "Kids"
                        ? kids
                        : ""
                }
                width="100%"
                order={{ base: 1, lg: 2 }}
            />
        </SimpleGrid>
    );
};

export default CategoryBanner;
