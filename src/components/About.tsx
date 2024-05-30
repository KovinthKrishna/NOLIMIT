import { Button, HStack, Image, Input, Text, VStack } from "@chakra-ui/react";
import logo from "../assets/logo.svg";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AppContext } from "../App";
import { serverUrl } from "../hooks/useItem";

const About = () => {
    const handleShowAlert = useContext(AppContext);
    const [email, setEmail] = useState("");
    const [button, setButton] = useState(false);
    useEffect(() => {
        setButton(email.includes("@"));
    }, [email]);

    const submit = () => {
        axios
            .post(`${serverUrl}/add/users`, {
                email,
            })
            .then(() => {
                setEmail("");
                handleShowAlert("Subscribed");
            })
            .catch((err) => console.error(err));
    };

    return (
        <VStack alignItems="start">
            <Image src={logo} boxSize="120px" maxHeight="75px"></Image>
            <Text fontSize="12px" fontWeight="bolder" lineHeight="30px">
                NOLIMIT, retail chain takes pride in its Sri Lankan roots but
                offers a world-class retail experience that drives customer
                loyalty while simultaneously setting new benchmarks in
                customer-centricity to take the art of retailing to a new level.
            </Text>
            <HStack paddingY="30px">
                <Input
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                ></Input>
                <Button
                    colorScheme="teal"
                    variant="solid"
                    isDisabled={!button}
                    onClick={submit}
                >
                    Subscribe
                </Button>
            </HStack>
        </VStack>
    );
};

export default About;
