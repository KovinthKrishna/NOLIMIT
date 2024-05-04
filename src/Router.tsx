import { useLocation, useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import Gifts from "./pages/Gifts";
import Collections from "./pages/Collections";
import AboutUs from "./pages/AboutUs";
import Women from "./pages/Women";
import Men from "./pages/Men";
import Kids from "./pages/Kids";
import Cart from "./pages/Cart";
import { Products } from "./pages/Products";
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
                            path: "Women",
                            element: <Women />,
                        },
                        {
                            path: "Men",
                            element: <Men />,
                        },
                        {
                            path: "Kids",
                            element: <Kids />,
                        },
                    ],
                },
            ])}
        </>
    );
}

export default Router;
