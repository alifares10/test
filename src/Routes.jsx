import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const SignupLoginModule = React.lazy(() => import("pages/SignupLoginModule"));
const VideoLibrary = React.lazy(() => import("pages/VideoLibrary"));
const PerformanceTracker = React.lazy(() => import("pages/PerformanceTracker"));
const Employeelogin = React.lazy(() => import("pages/Employeelogin"));
const SalesReporting = React.lazy(() => import("pages/SalesReporting"));
const RolesPermissions = React.lazy(() => import("pages/RolesPermissions"));
const InventoryTrendAnalysis = React.lazy(() =>
  import("pages/InventoryTrendAnalysis")
);
const ProjectsTracking = React.lazy(() => import("pages/ProjectsTracking"));
const GraphicalCharts = React.lazy(() => import("pages/GraphicalCharts"));
const SwitchAccount = React.lazy(() => import("pages/SwitchAccount"));
const DemoAccount = React.lazy(() => import("pages/DemoAccount"));
const Tasklist = React.lazy(() => import("pages/Tasklist"));
const Scheduling = React.lazy(() => import("pages/Scheduling"));
const BaslineReporting = React.lazy(() => import("pages/BaslineReporting"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/baslinereporting" element={<BaslineReporting />} />
          <Route path="/scheduling" element={<Scheduling />} />
          <Route path="/tasklist" element={<Tasklist />} />
          <Route path="/demoaccount" element={<DemoAccount />} />
          <Route path="/switchaccount" element={<SwitchAccount />} />
          <Route path="/graphicalcharts" element={<GraphicalCharts />} />
          <Route path="/projectstracking" element={<ProjectsTracking />} />
          <Route
            path="/inventorytrendanalysis"
            element={<InventoryTrendAnalysis />}
          />
          <Route path="/rolespermissions" element={<RolesPermissions />} />
          <Route path="/salesreporting" element={<SalesReporting />} />
          <Route path="/employeelogin" element={<Employeelogin />} />
          <Route path="/performancetracker" element={<PerformanceTracker />} />
          <Route path="/videolibrary" element={<VideoLibrary />} />
          <Route path="/signuploginmodule" element={<SignupLoginModule />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
