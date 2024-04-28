import { Button, HStack, IconButton, Image, Show } from "@chakra-ui/react";
import logo from "../assets/logo.svg";
import { MdOutlineShoppingBag } from "react-icons/md";

const NavBar = () => {
    return (
        <HStack justifyContent="space-between" paddingX="50px" height="75px">
            <Image src={logo} boxSize="120px" />
            <Show above="md">
                <HStack>
                    <Button variant="ghost" fontSize="12px" fontWeight="bolder">
                        WOMEN
                    </Button>
                    <Button variant="ghost" fontSize="12px" fontWeight="bolder">
                        MEN
                    </Button>
                    <Button variant="ghost" fontSize="12px" fontWeight="bolder">
                        KIDS
                    </Button>
                    <Button
                        variant="ghost"
                        fontSize="12px"
                        fontWeight="bolder"
                        colorScheme="red"
                    >
                        GIFT CARDS
                    </Button>
                    <Button
                        variant="solid"
                        fontSize="12px"
                        fontWeight="bolder"
                        colorScheme="red"
                    >
                        SALE
                    </Button>
                </HStack>
                <HStack>
                    <IconButton
                        variant="ghost"
                        isRound={true}
                        aria-label="Cart"
                        icon={<MdOutlineShoppingBag />}
                    ></IconButton>
                    <Button
                        variant="outline"
                        fontSize="12px"
                        fontWeight="bolder"
                        shadow="0px 0px 1px"
                    >
                        Track My Order
                    </Button>
                </HStack>
            </Show>
        </HStack>
    );
};

export default NavBar;
