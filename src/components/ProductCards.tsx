import { SimpleGrid, HStack, IconButton } from "@chakra-ui/react";
import { CgChevronLeft, CgChevronRight } from "react-icons/cg";
import { useEffect, useState } from "react";
import Cards from "./Cards";

interface Products {
    id: number;
    image: string;
    category: string;
    name: string;
    price: string;
}

interface Props {
    products: Products[];
}

const ProductCards = ({ products }: Props) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const [start, setStart] = useState(0);
    const length = windowWidth < 768 ? 1 : windowWidth < 992 ? 3 : 4;
    if (start > products.length - length) {
        setStart(products.length - length);
    }
    useEffect(() => {
        setStart(0);
    }, [products]);

    return (
        <HStack paddingTop={14} justifyContent="center" spacing={0}>
            <IconButton
                colorScheme="gray"
                aria-label="Previous"
                icon={<CgChevronLeft />}
                size="lg"
                onClick={() => {
                    setStart(start - 1);
                }}
                isDisabled={start == 0}
            />
            <SimpleGrid
                columns={{ base: 1, md: 3, lg: 4 }}
                justifyItems="center"
                spacing={6}
            >
                {products
                    .slice(start, start + length)
                    .map((collectionDetails) => {
                        return (
                            <Cards
                                collectionDetails={collectionDetails}
                                key={collectionDetails.id}
                            />
                        );
                    })}
            </SimpleGrid>
            <IconButton
                colorScheme="gray"
                aria-label="Next"
                icon={<CgChevronRight />}
                size="lg"
                onClick={() => {
                    setStart(start + 1);
                }}
                isDisabled={products.length == start + length}
            />
        </HStack>
    );
};

export default ProductCards;
