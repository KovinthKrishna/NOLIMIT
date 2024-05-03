import { Heading, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const MainMenu = () => {
    return (
        <VStack alignItems="start">
            <Heading fontSize="12px" fontWeight="900" paddingY="15px">
                MAIN MENU
            </Heading>
            <Link to="/categories/Women">
                <Text
                    fontSize="12px"
                    fontWeight="bold"
                    paddingY="2px"
                    style={{ cursor: "pointer" }}
                >
                    Women
                </Text>
            </Link>
            <Link to="/categories/Men">
                <Text
                    fontSize="12px"
                    fontWeight="bold"
                    paddingY="2px"
                    style={{ cursor: "pointer" }}
                >
                    Men
                </Text>
            </Link>
            <Link to="/categories/Kids">
                <Text
                    fontSize="12px"
                    fontWeight="bold"
                    paddingY="2px"
                    style={{ cursor: "pointer" }}
                >
                    Kids
                </Text>
            </Link>
        </VStack>
    );
};

export default MainMenu;
