import { Navigate, createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { MAIN_PATH } from "../constant";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: MAIN_PATH.root,
        element: <Navigate to={`/${MAIN_PATH.browse}`} />,
      },
      {
        path: MAIN_PATH.browse,
        lazy: () => import("../pages/HomePage"),
      },
    ],
  },
]);
export default router;
