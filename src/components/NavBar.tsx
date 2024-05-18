import { Button, HStack, IconButton, Image, Show } from "@chakra-ui/react";
import logo from "../assets/logo.svg";
import { MdOutlineShoppingBag } from "react-icons/md";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const NavBar = () => {
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <HStack
            justifyContent="space-between"
            paddingX="50px"
            height="75px"
            shadow="0px 0px 2px"
            backgroundColor={scroll ? "#2E3D52" : "white"}
        >
            <Link to="/">
                <Image src={logo} boxSize="120px" />
            </Link>
            <Show above="md">
                <HStack>
                    <Link to="/categories/Women">
                        <Button
                            variant="ghost"
                            fontSize="12px"
                            fontWeight="bolder"
                            color={scroll ? "white" : "black"}
                            _hover={
                                scroll
                                    ? { color: "black", bgColor: "white" }
                                    : { bgColor: "#F9FAFB" }
                            }
                        >
                            WOMEN
                        </Button>
                    </Link>
                    <Link to="/categories/Men">
                        <Button
                            variant="ghost"
                            fontSize="12px"
                            fontWeight="bolder"
                            color={scroll ? "white" : "black"}
                            _hover={
                                scroll
                                    ? { color: "black", bgColor: "white" }
                                    : { bgColor: "#F9FAFB" }
                            }
                        >
                            MEN
                        </Button>
                    </Link>
                    <Link to="/categories/Kids">
                        <Button
                            variant="ghost"
                            fontSize="12px"
                            fontWeight="bolder"
                            color={scroll ? "white" : "black"}
                            _hover={
                                scroll
                                    ? { color: "black", bgColor: "white" }
                                    : { bgColor: "#F9FAFB" }
                            }
                        >
                            KIDS
                        </Button>
                    </Link>
                    <Link to="/gift-vouchers">
                        <Button
                            variant="ghost"
                            fontSize="12px"
                            fontWeight="bolder"
                            color={scroll ? "white" : "black"}
                            _hover={
                                scroll
                                    ? { color: "#E53E3E", bgColor: "white" }
                                    : { color: "#E53E3E", bgColor: "#F9FAFB" }
                            }
                        >
                            GIFT CARDS
                        </Button>
                    </Link>
                    <Link to="/collections/Offers">
                        <Button
                            variant={scroll ? "solid" : "ghost"}
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
                <Link to="/cart">
                    <IconButton
                        variant="ghost"
                        isRound={true}
                        aria-label="Cart"
                        icon={<MdOutlineShoppingBag />}
                        color={scroll ? "white" : "black"}
                    ></IconButton>
                </Link>
                <Show above="md">
                    <Button
                        variant="outline"
                        fontSize="12px"
                        fontWeight="bolder"
                        shadow="0px 0px 1px"
                        color={scroll ? "white" : "black"}
                    >
                        Track My Order
                    </Button>
                </Show>
            </HStack>
        </HStack>
    );
};

export default NavBar;
