import { useLocation, useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import Gifts from "./pages/Gifts";
import Collections from "./pages/Collections";
import AboutUs from "./pages/AboutUs";
import Cart from "./pages/Cart";
import Category from "./pages/Category";
import Products from "./pages/Products";
import { useEffect } from "react";

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, [pathname]);

    return null;
};

function Router() {
    return (
        <>
            <ScrollToTop />
            {useRoutes([
                {
                    path: "",
                    element: <Home />,
                },
                {
                    path: "gift-vouchers",
                    element: <Gifts />,
                },
                {
                    path: "cart",
                    element: <Cart />,
                },
                {
                    path: "collections",
                    children: [
                        {
                            path: "Offers",
                            element: <Collections />,
                        },
                    ],
                },
                {
                    path: "products",
                    children: [
                        {
                            path: ":id",
                            element: <Products />,
                        },
                    ],
                },
                {
                    path: "customer-care",
                    children: [
                        {
                            path: "about-us",
                            element: <AboutUs />,
                        },
                    ],
                },
                {
                    path: "categories",
                    children: [
                        {
                            path: ":category",
                            element: <Category />,
                        },
                    ],
                },
            ])}
        </>
    );
}

export default Router;
