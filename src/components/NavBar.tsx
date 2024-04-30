import { Button, HStack, IconButton, Image, Show } from "@chakra-ui/react";
import logo from "../assets/logo.svg";
import { MdOutlineShoppingBag } from "react-icons/md";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <HStack justifyContent="space-between" paddingX="50px" height="75px">
            <Link to="/">
                <Image src={logo} boxSize="120px" />
            </Link>
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
                    <Link to="/gift-vouchers">
                        <Button
                            variant="ghost"
                            fontSize="12px"
                            fontWeight="bolder"
                            colorScheme="red"
                        >
                            GIFT CARDS
                        </Button>
                    </Link>
                    <Link to="/collections/Offers">
                        <Button
                            variant="solid"
                            fontSize="12px"
                            fontWeight="bolder"
                            colorScheme="red"
                        >
                            SALE
                        </Button>
                    </Link>
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
