import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";

function Router() {
    return useRoutes([
        {
            path: "/",
            element: <Home />,
        },
    ]);
}

export default Router;
