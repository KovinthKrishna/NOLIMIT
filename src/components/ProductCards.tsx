import { CgChevronLeft, CgChevronRight } from "react-icons/cg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./ProductCards.css";
import Cards from "./Cards";
import { useParams } from "react-router-dom";

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

const CustomLeftArrow = ({ onClick }: { onClick?: () => void }) => {
    return (
        <div className="custom-arrow custom-left-arrow" onClick={onClick}>
            <CgChevronLeft />
        </div>
    );
};

const CustomRightArrow = ({ onClick }: { onClick?: () => void }) => {
    return (
        <div className="custom-arrow custom-right-arrow" onClick={onClick}>
            <CgChevronRight />
        </div>
    );
};

const ProductCards = ({ products }: Props) => {
    const { id } = useParams();
    const responsive = {
        desktop: {
            breakpoint: { max: 4000, min: 992 },
            items: 4,
        },
        tablet: {
            breakpoint: { max: 991, min: 768 },
            items: 3,
        },
        mobile: {
            breakpoint: { max: 767, min: 0 },
            items: 1,
        },
    };
    return (
        <Carousel
            key={parseInt(id ?? "0")}
            responsive={responsive}
            infinite={true}
            containerClass="carousel-container"
            itemClass="carousel-item"
            customLeftArrow={<CustomLeftArrow />}
            customRightArrow={<CustomRightArrow />}
        >
            {products.map((collectionDetails) => {
                return (
                    <Cards
                        collectionDetails={collectionDetails}
                        key={collectionDetails.id}
                    />
                );
            })}
        </Carousel>
    );
};

export default ProductCards;
