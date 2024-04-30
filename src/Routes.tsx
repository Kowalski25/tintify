import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

const Routes = createBrowserRouter([
  {
    path: '',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  
  // unhandled or nonexisting routes
  {
    path: "*",
  }
]);

export default Routes;
