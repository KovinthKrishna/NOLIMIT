import {
    Heading,
    VStack,
    Text,
    HStack,
    IconButton,
    Image,
} from "@chakra-ui/react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import winner from "../assets/winner.webp";

const Contact = () => {
    return (
        <VStack alignItems="start">
            <Heading fontSize="12px" fontWeight="900" paddingY="15px">
                GET IN TOUCH
            </Heading>
            <Text
                fontSize="12px"
                fontWeight="bold"
                paddingY="2px"
                style={{ cursor: "pointer" }}
            >
                No.10 Kawdana Road, Dehiwala.
            </Text>
            <Text
                fontSize="12px"
                fontWeight="bold"
                paddingY="2px"
                style={{ cursor: "pointer" }}
            >
                +94 773540816
            </Text>
            <Text
                fontSize="12px"
                fontWeight="bold"
                paddingY="2px"
                style={{ cursor: "pointer" }}
            >
                care@nolimit.lk
            </Text>
            <Text
                fontSize="12px"
                fontWeight="bold"
                paddingY="2px"
                style={{ cursor: "pointer" }}
            >
                Open hours : 8:30AM - 06:00PM
            </Text>
            <HStack paddingY="10px">
                <IconButton
                    isRound={true}
                    variant="solid"
                    colorScheme="facebook"
                    aria-label="Facebook"
                    fontSize="20px"
                    icon={<FaFacebookF />}
                />
                <IconButton
                    isRound={true}
                    variant="solid"
                    colorScheme="pink"
                    aria-label="Instagram"
                    fontSize="20px"
                    icon={<FaInstagram />}
                />
                <IconButton
                    isRound={true}
                    variant="solid"
                    colorScheme="whatsapp"
                    aria-label="WhatsApp"
                    fontSize="20px"
                    icon={<FaWhatsapp />}
                />
            </HStack>
            <Image src={winner} boxSize="128px"></Image>
        </VStack>
    );
};

export default Contact;
