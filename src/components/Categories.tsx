import women from "../assets/women.webp";
import men from "../assets/men.webp";
import kids from "../assets/kids.webp";
import {
    Card,
    Heading,
    Image,
    SimpleGrid,
    Stack,
    Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Categories = () => {
    return (
        <SimpleGrid
            columns={{ base: 1, lg: 3 }}
            spacing="20px"
            justifyItems="center"
        >
            <Link to="/categories/Women">
                <Card
                    maxWidth="md"
                    overflow="hidden"
                    borderRadius="10px"
                    style={{ cursor: "pointer" }}
                >
                    <Image src={women}></Image>
                    <Stack paddingX="20px" paddingY="5px" marginY="10px">
                        <Heading fontSize="14px">WOMEN</Heading>
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
            <Link to="/categories/Men">
                <Card
                    maxWidth="md"
                    overflow="hidden"
                    borderRadius="10px"
                    style={{ cursor: "pointer" }}
                >
                    <Image src={men}></Image>
                    <Stack paddingX="20px" paddingY="5px" marginY="10px">
                        <Heading fontSize="14px">MEN</Heading>
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
            <Link to="/categories/Kids">
                <Card
                    maxWidth="md"
                    overflow="hidden"
                    borderRadius="10px"
                    style={{ cursor: "pointer" }}
                >
                    <Image src={kids}></Image>
                    <Stack paddingX="20px" paddingY="5px" marginY="10px">
                        <Heading fontSize="14px">KIDS</Heading>
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
        </SimpleGrid>
    );
};

export default Categories;
