import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import {
    Button,
    ButtonGroup,
    Card,
    HStack,
    IconButton,
    Image,
    Text,
    VStack,
} from "@chakra-ui/react";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { setItem } from "../hooks/useItem";
import { useState } from "react";

interface Collection {
    id: number;
    image: string;
    category: string;
    name: string;
    price: string;
}

interface Item {
    id: number;
    count: number;
}

interface Props {
    collectionDetails: Collection;
    item: Item;
    getRefresh: () => void;
}

const CartItem = ({ collectionDetails, item, getRefresh }: Props) => {
    const [button, setButton] = useState(false);

    const buyItem = async (id: number, change: number) => {
        setButton(true);
        await setItem(id, change);
        getRefresh();
        setButton(false);
    };

    return (
        <Card shadow="0 0 4px" borderRadius="5px" key={collectionDetails.id}>
            <HStack justifyContent="space-between" padding={{ base: 2, md: 4 }}>
                <HStack spacing={{ base: 2, lg: 4 }}>
                    <Link to={`/products/${collectionDetails.id}`}>
                        <Image
                            src={collectionDetails.image}
                            height={{
                                base: "80px",
                                md: 40,
                            }}
                            borderRadius="5px"
                            border="2px solid black"
                        ></Image>
                    </Link>
                    <VStack alignItems="left">
                        <Text fontSize="12px" as="b">
                            {collectionDetails.name}
                        </Text>
                        <Text fontSize="12px" as="b">
                            {item.count} * LKR {collectionDetails.price}
                        </Text>
                        <ButtonGroup size="sm" isAttached variant="outline">
                            <IconButton
                                aria-label="Minus"
                                icon={<MinusIcon />}
                                isDisabled={item.count <= 1 || button}
                                onClick={() => {
                                    buyItem(item.id, -1);
                                }}
                            />
                            <Button>{item.count}</Button>
                            <IconButton
                                aria-label="Add"
                                icon={<AddIcon />}
                                isDisabled={button}
                                onClick={() => buyItem(item.id, 1)}
                            />
                        </ButtonGroup>
                    </VStack>
                </HStack>
                <IconButton
                    colorScheme="red"
                    variant="ghost"
                    isRound={true}
                    aria-label="Remove"
                    icon={<MdDelete />}
                    size="lg"
                    onClick={() => {
                        buyItem(item.id, 0);
                    }}
                ></IconButton>
            </HStack>
        </Card>
    );
};

export default CartItem;
