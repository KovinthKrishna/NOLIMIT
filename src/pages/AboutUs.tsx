import { useEffect } from "react";
import { Grid, Text } from "@chakra-ui/react";

const AboutUs = () => {
    useEffect(() => {
        document.title = "NOLIMIT | About Us";
    }, []);
    return (
        <Grid padding={14}>
            <hr />
            <Text fontSize="12px" fontWeight="800" paddingY={2}>
                Home {">"} About Us
            </Text>
            <hr />
            <Text fontSize="16px" fontWeight="1000" paddingTop={5}>
                About Us
            </Text>
            <Text fontSize="14px" paddingY={4}>
                NOLIMIT – Sri Lanka’s biggest fashion chain offers a wide range
                of clothes and accessories for Men, Women and Kids. The retail
                store houses a range of Homeware and Lifestyle products to
                compliment a comprehensive family shopping experience for all
                our customers. Our showrooms are located in strategic cities
                across the Island, in addition to our head office which is
                located in Dehiwala.
            </Text>
            <Text fontSize="14px">
                NOLIMIT has been growing from strength to strength over the last
                29 years with a team of 1800 people serving millions of
                customers every year. The retail chain takes pride in its Sri
                Lankan roots but offers a world-class retail experience that
                drives customer loyalty while simultaneously setting new
                benchmarks in customer-centricity to take the art of retailing
                to a new level.
            </Text>
        </Grid>
    );
};

export default AboutUs;
