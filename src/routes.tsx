import { createBrowserRouter } from "react-router";
import Header from "./components/Header";
import { App } from "./App";
import GalleryCategoryPage from "./components/GalleryCategoryPage";

export const router = createBrowserRouter([
  {
    path: "/", //este es el principal
    element: <App />,
  },
  {
    path: "/header",
    element: <Header />,
  },
  {
    path: "/galeria/:categorySlug",
    element: <GalleryCategoryPage />,
  },
]);
