import { Card, Image } from "@chakra-ui/react";
import welcome_1 from "../assets/welcome_1.webp";
import welcome_2 from "../assets/welcome_2.webp";
import welcome_3 from "../assets/welcome_3.webp";
import welcome_4 from "../assets/welcome_4.webp";
import { useEffect, useState } from "react";

const HomeCard = () => {
    const images = [welcome_1, welcome_2, welcome_3, welcome_4];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex(
                (prevIndex) => (prevIndex + 1) % images.length
            );
        }, 3000);

        return () => clearInterval(intervalId);
    }, [images]);

    return (
        <Card>
            <Image src={images[currentImageIndex]}></Image>
        </Card>
    );
};

export default HomeCard;
