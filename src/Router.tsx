import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import Gifts from "./pages/Gifts";

function Router() {
    return useRoutes([
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/gift-vouchers",
            element: <Gifts />,
        },
    ]);
}

export default Router;
