import { Button, HStack, Image, Input, Text, VStack } from "@chakra-ui/react";
import logo from "../assets/logo.svg";
import { useState } from "react";
import axios from "axios";

const About = () => {
    const [email, setEmail] = useState("");

    const Submit = () => {
        axios
            .post("https://nolimit-server.vercel.app/api/users", { email })
            .then(() => {
                console.log("Subscription successful");
                setEmail("");
            })
            .catch((err) => console.log(err));
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
                    isDisabled={!email.includes("@")}
                    onClick={Submit}
                >
                    Subscribe
                </Button>
            </HStack>
        </VStack>
    );
};

export default About;
