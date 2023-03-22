import HomePage from "pages/HomePage";
import PageNotFound from "pages/PageNotFound";
import ProjectDetailsPage from "pages/projects/ProjectDetailsPage";
import ProjectsPage from "pages/projects/ProjectsPage";
import { Route, Routes } from "react-router-dom";

import routes from "./routes";
import useEnhancedCustomRouterUtilities from "./useEnhancedCustomRouterUtilities";
import LandingPage from "pages/landingPage/LandingPage";

const AppRouter = (): JSX.Element => {
  useEnhancedCustomRouterUtilities();
  return (
    <Routes>
      <Route path={routes.HOME_PAGE} element={<HomePage />} />
      <Route path={routes.PROJECTS_PAGE} element={<ProjectsPage />} />


      <Route path={routes.LANDING_PAGE} element={<LandingPage />} />
      <Route
        path={routes.PROJECT_DETAILS_PAGE}
        element={<ProjectDetailsPage />}
      />

      {/* 404 PAGE: NOTE THIS MUST BE THE LAST ROUTE */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AppRouter;
