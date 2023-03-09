import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorComponents from "./components/ErrorComponents";
import Animus from "./screens/Animus";
import Home from "./screens/Home";
import NotFound from "./screens/NotFound";
import Atma from "./screens/Atma";
import Options from "./screens/Options";

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
        errorElement: <ErrorComponents />,
      },
      {
        path: "options",
        element: <Options />,
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
