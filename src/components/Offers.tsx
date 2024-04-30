import arrivals from "../assets/new.webp";
import sale from "../assets/sale.png";
import cards from "../assets/cards.webp";
import {
    Card,
    Heading,
    Image,
    SimpleGrid,
    Stack,
    Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Offers = () => {
    return (
        <SimpleGrid
            columns={{ base: 1, lg: 3 }}
            spacing="20px"
            justifyItems="center"
        >
            <Card
                maxWidth="md"
                overflow="hidden"
                borderRadius="10px"
                backgroundColor="#F9FAFB"
                style={{ cursor: "pointer" }}
            >
                <Image src={arrivals}></Image>
                <Stack paddingX="20px" paddingY="5px" marginY="10px">
                    <Heading fontSize="14px">NEW ARRIVALS</Heading>
                    <Text
                        fontSize="14px"
                        textDecoration="underline"
                        fontWeight="600"
                    >
                        Shop Now
                    </Text>
                </Stack>
            </Card>
            <Link to="/collections/Offers">
                <Card
                    maxWidth="md"
                    overflow="hidden"
                    borderRadius="10px"
                    backgroundColor="#F9FAFB"
                    style={{ cursor: "pointer" }}
                >
                    <Image src={sale}></Image>
                    <Stack paddingX="20px" paddingY="5px" marginY="10px">
                        <Heading fontSize="14px">OFFERS</Heading>
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
            <Link to="/gift-vouchers">
                <Card
                    maxWidth="md"
                    overflow="hidden"
                    borderRadius="10px"
                    backgroundColor="#F9FAFB"
                    style={{ cursor: "pointer" }}
                >
                    <Image src={cards}></Image>
                    <Stack paddingX="20px" paddingY="5px" marginY="10px">
                        <Heading fontSize="14px">GIFT CARDS</Heading>
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

export default Offers;
