import { Heading, Text, VStack } from "@chakra-ui/react";

const MainMenu = () => {
    return (
        <VStack alignItems="start">
            <Heading fontSize="12px" fontWeight="900" paddingY="15px">
                MAIN MENU
            </Heading>
            <Text
                fontSize="12px"
                fontWeight="bold"
                paddingY="2px"
                style={{ cursor: "pointer" }}
            >
                Women
            </Text>
            <Text
                fontSize="12px"
                fontWeight="bold"
                paddingY="2px"
                style={{ cursor: "pointer" }}
            >
                Men
            </Text>
            <Text
                fontSize="12px"
                fontWeight="bold"
                paddingY="2px"
                style={{ cursor: "pointer" }}
            >
                Kids
            </Text>
        </VStack>
    );
};

export default MainMenu;
