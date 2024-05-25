import { Heading, SimpleGrid, VStack, Text, Image } from "@chakra-ui/react";
import women from "../assets/women.webp";
import men from "../assets/men.webp";
import kids from "../assets/kids.webp";

interface Props {
    category: string;
}

const CategoryBanner = ({ category }: Props) => {
    return (
        <SimpleGrid
            columns={{ base: 1, lg: 2 }}
            justifyItems="center"
            padding="4%"
            spacingY={10}
        >
            <VStack
                alignItems="left"
                justifyContent="center"
                order={{ base: 2, lg: 1 }}
                width="100%"
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
            </VStack>
            <Image
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
            ></Image>
        </SimpleGrid>
    );
};

export default CategoryBanner;
