import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import Gifts from "./pages/Gifts";
import Collections from "./pages/Collections";

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
    ]);
}

export default Router;
