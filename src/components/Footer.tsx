import { SimpleGrid } from "@chakra-ui/react";
import About from "./About";
import MainMenu from "./MainMenu";
import Links from "./Links";
import Contact from "./Contact";

const Footer = () => {
    return (
        <SimpleGrid columns={{ base: 1, lg: 4 }} padding="4%" spacing="60px">
            <About />
            <MainMenu />
            <Links />
            <Contact />
        </SimpleGrid>
    );
};

export default Footer;
