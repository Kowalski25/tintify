import { Routes as AppRoutes, Route } from "react-router-dom";
import { Home, About } from "../pages";

const Routes = () => {
  return (
    <AppRoutes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />

      {/* for non-existent routes/pages */}
      <Route path='*' />
    </AppRoutes>
  );
};

export default Routes;
