import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorComponents from "./components/ErrorComponents";
import Animus from "./screens/Animus";
import Home from "./screens/Home";
import NotFound from "./screens/NotFound";
import Zenith from "./screens/Zenith";
import Atma from "./screens/Atma";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
        errorElement: <ErrorComponents />,
      },
      {
        path: "zenith",
        element: <Zenith />,
      },
      {
        path: "atma",
        element: <Atma />,
      },
      {
        path: "animus",
        element: <Animus />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
