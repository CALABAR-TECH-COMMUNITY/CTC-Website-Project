import HomePage from "pages/HomePage";
import PageNotFound from "pages/PageNotFound";
import ProjectDetailsPage from "pages/projects/ProjectDetailsPage";
import ProjectsPage from "pages/projects/ProjectsPage";
import { Route, Routes } from "react-router-dom";

import AppRoutes from "./routes";
import useEnhancedCustomRouterUtilities from "./useEnhancedCustomRouterUtilities";

const AppRouter = (): JSX.Element => {
  useEnhancedCustomRouterUtilities();
  return (
    <Routes>
      <Route path={AppRoutes.HOME_PAGE} element={<HomePage />} />
      <Route path={AppRoutes.PROJECTS_PAGE} element={<ProjectsPage />} />
      <Route
        path={AppRoutes.PROJECT_DETAILS_PAGE}
        element={<ProjectDetailsPage />}
      />

      {/* 404 PAGE: NOTE THIS MUST BE THE LAST ROUTE */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AppRouter;
