import { Button, HStack, IconButton, Image, Show } from "@chakra-ui/react";
import logo from "../assets/logo.svg";
import { MdOutlineShoppingBag } from "react-icons/md";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <HStack
            justifyContent="space-between"
            paddingX="50px"
            height="75px"
            shadow="0px 0px 2px"
        >
            <Link to="/">
                <Image src={logo} boxSize="120px" />
            </Link>
            <Show above="md">
                <HStack>
                    <Link to="categories/Women">
                        <Button
                            variant="ghost"
                            fontSize="12px"
                            fontWeight="bolder"
                        >
                            WOMEN
                        </Button>
                    </Link>
                    <Link to="categories/Men">
                        <Button
                            variant="ghost"
                            fontSize="12px"
                            fontWeight="bolder"
                        >
                            MEN
                        </Button>
                    </Link>
                    <Link to="categories/Kids">
                        <Button
                            variant="ghost"
                            fontSize="12px"
                            fontWeight="bolder"
                        >
                            KIDS
                        </Button>
                    </Link>
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
            </Show>
            <HStack>
                <Link to="cart">
                    <IconButton
                        variant="ghost"
                        isRound={true}
                        aria-label="Cart"
                        icon={<MdOutlineShoppingBag />}
                    ></IconButton>
                </Link>
                <Show above="md">
                    <Button
                        variant="outline"
                        fontSize="12px"
                        fontWeight="bolder"
                        shadow="0px 0px 1px"
                    >
                        Track My Order
                    </Button>
                </Show>
            </HStack>
        </HStack>
    );
};

export default NavBar;
