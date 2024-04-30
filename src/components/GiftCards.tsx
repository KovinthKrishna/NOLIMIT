import { Container, Image, SimpleGrid, Text } from "@chakra-ui/react";
import gv_500 from "../assets/gv_500.webp";
import gv_1000 from "../assets/gv_1000.webp";
import gv_2000 from "../assets/gv_2000.webp";
import gv_5000 from "../assets/gv_5000.webp";

const GiftCards = () => {
    const cardsDetails = [
        {
            id: 1,
            image: gv_500,
            price: "500.00",
        },
        {
            id: 2,
            image: gv_1000,
            price: "1000.00",
        },
        {
            id: 3,
            image: gv_2000,
            price: "2000.00",
        },
        {
            id: 4,
            image: gv_5000,
            price: "5000.00",
        },
    ];

    return (
        <SimpleGrid columns={{ base: 2, lg: 4 }} justifyItems="center">
            {cardsDetails.map((cardDetails) => {
                return (
                    <Container
                        key={cardDetails.id}
                        marginBottom={{ base: 2, lg: 0 }}
                    >
                        <Image src={cardDetails.image}></Image>
                        <Text fontSize={12} fontWeight="800" paddingY={2}>
                            LKR {cardDetails.price}
                        </Text>
                    </Container>
                );
            })}
        </SimpleGrid>
    );
};

export default GiftCards;
