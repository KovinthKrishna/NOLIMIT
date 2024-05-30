import { CheckIcon } from "@chakra-ui/icons";
import { Card, Image, Stack, Text, HStack, IconButton } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { setItem } from "../hooks/useItem";
import { AppContext } from "../App";

interface Collections {
    id: number;
    image: string;
    category: string;
    name: string;
    price: string;
}

interface Props {
    collectionDetails: Collections;
}

const Cards = ({ collectionDetails }: Props) => {
    const handleShowAlert = useContext(AppContext);

    const [button, setButton] = useState(false);
    const buyItem = async (id: number, count: number) => {
        setButton(true);
        const result = await setItem(id, count);
        handleShowAlert(result ?? "");
        setTimeout(() => {
            setButton(false);
        }, 2000);
    };

    return (
        <Card overflow="hidden" borderRadius="10px">
            <Link to={`/products/${collectionDetails.id}`}>
                <Image src={collectionDetails.image}></Image>
            </Link>
            <hr />
            <HStack justifyContent="space-between" padding={1}>
                <Stack padding={3} spacing={0}>
                    <Text color="#9CA3AF" fontSize="12px" fontWeight="900">
                        {collectionDetails.category}
                    </Text>
                    <Text fontSize="12px" fontWeight="900">
                        {collectionDetails.name}
                    </Text>
                    <Text fontSize="12px" paddingY={2} fontWeight="900">
                        LKR {collectionDetails.price}
                    </Text>
                </Stack>
                <IconButton
                    colorScheme="gray"
                    variant="ghost"
                    aria-label="Add"
                    icon={button ? <CheckIcon /> : <FaCartPlus />}
                    size="lg"
                    isDisabled={button}
                    onClick={() => {
                        buyItem(collectionDetails.id, 1);
                    }}
                ></IconButton>
            </HStack>
        </Card>
    );
};

export default Cards;
