import { Card, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Category } from "./Categories";

interface Props {
    category: Category;
}

const CategoriesCard = ({ category }: Props) => {
    return (
        <Link to={category.link}>
            <Card maxWidth="md" overflow="hidden" borderRadius="10px">
                <Image src={category.image}></Image>
                <Stack paddingX="20px" paddingY="5px" marginY="10px">
                    <Heading fontSize="14px">{category.name}</Heading>
                    <Text
                        fontSize="14px"
                        textDecoration="underline"
                        fontWeight="600"
                    >
                        Shop Now
                    </Text>
                </Stack>
            </Card>
        </Link>
    );
};

export default CategoriesCard;
