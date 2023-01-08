import { createBrowserRouter } from "react-router-dom";
import Root from "./routes/root";
import FormOne from "./routes/formOne";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "forms/simpleform",
        element: <FormOne />,
      },
    ],
  },
]);

export default router;
