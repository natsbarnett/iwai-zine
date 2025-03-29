import {
  Routes,
  Route,
  useNavigate,
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Contributors from "./pages/Contributors";
import Mods from "./pages/Mods";
import Rules from "./pages/Rules";
import MessageSent from "./pages/MessageSent";
import About from "./pages/About";
import FAQ from "./pages/FAQ";

function App() {
  const router = createBrowserRouter([
    {
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/contributors",
          element: <Contributors />,
        },
        {
          path: "/mods",
          element: <Mods />,
        },
        {
          path: "/rules",
          element: <Rules />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/faq",
          element: <FAQ />,
        },
        {
          path: "/message-sent",
          element: <MessageSent />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
