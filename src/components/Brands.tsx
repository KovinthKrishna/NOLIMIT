import mbrk from "../assets/mbrk.webp";
import nlm from "../assets/nlm.webp";
import deedat from "../assets/deedat.webp";
import hd from "../assets/hd.webp";
import fm from "../assets/fm.webp";
import pe from "../assets/pe.webp";
import { HStack, Heading, Image, Show, Text, VStack } from "@chakra-ui/react";

const Brands = () => {
    return (
        <VStack>
            <Heading>OUR BRANDS</Heading>
            <Text
                paddingY="30px"
                fontWeight="bold"
                maxWidth="sm"
                fontSize="12px"
                textAlign="center"
            >
                Our signature collection of brands comes with comfort, style,
                trendy looks. All for a good price.
            </Text>
            <HStack paddingY="30px" width="100%" justifyContent="space-evenly">
                <Image
                    src={mbrk}
                    width="150px"
                    borderRadius="6px"
                    border="1px solid gray"
                ></Image>
                <Image
                    src={nlm}
                    width="150px"
                    borderRadius="6px"
                    border="1px solid gray"
                ></Image>
                <Show above="md">
                    <Image
                        src={deedat}
                        width="150px"
                        borderRadius="6px"
                        border="1px solid gray"
                    ></Image>
                    <Image
                        src={hd}
                        width="150px"
                        borderRadius="6px"
                        border="1px solid gray"
                    ></Image>
                </Show>
                <Show above="lg">
                    <Image
                        src={fm}
                        width="150px"
                        borderRadius="6px"
                        border="1px solid gray"
                    ></Image>
                    <Image
                        src={pe}
                        width="150px"
                        borderRadius="6px"
                        border="1px solid gray"
                    ></Image>
                </Show>
            </HStack>
        </VStack>
    );
};

export default Brands;
