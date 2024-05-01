import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import Gifts from "./pages/Gifts";
import Collections from "./pages/Collections";
import AboutUs from "./pages/AboutUs";

function Router() {
    return useRoutes([
        {
            path: "",
            element: <Home />,
        },
        {
            path: "gift-vouchers",
            element: <Gifts />,
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
            path: "customer-care",
            children: [
                {
                    path: "about-us",
                    element: <AboutUs />,
                },
            ],
        },
    ]);
}

export default Router;
