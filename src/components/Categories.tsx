import { SimpleGrid } from "@chakra-ui/react";
import CategoriesCard from "./CategoriesCard";

interface Categories {
    link: string;
    image: string;
    name: string;
}

interface Props {
    categories: Categories[];
}

const Categories = ({ categories }: Props) => {
    return (
        <SimpleGrid
            columns={{ base: 1, lg: 3 }}
            spacing="20px"
            justifyItems="center"
        >
            {categories.map((category, index) => {
                return <CategoriesCard category={category} key={index} />;
            })}
        </SimpleGrid>
    );
};

export default Categories;
