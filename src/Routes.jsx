import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Vaccinedropdown = React.lazy(() => import("pages/Vaccinedropdown"));
const VaccineOne = React.lazy(() => import("pages/VaccineOne"));
const Covid2State = React.lazy(() => import("pages/Covid2State"));
const Vaccine = React.lazy(() => import("pages/Vaccine"));
const CovidError = React.lazy(() => import("pages/CovidError"));
const CovidAbout = React.lazy(() => import("pages/CovidAbout"));
const CovidBargraphs = React.lazy(() => import("pages/CovidBargraphs"));
const CovidSelect = React.lazy(() => import("pages/CovidSelect"));
const CovidState = React.lazy(() => import("pages/CovidState"));
const CovidSearchvarients = React.lazy(() =>
  import("pages/CovidSearchvarients"),
);
const CovidSearch = React.lazy(() => import("pages/CovidSearch"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<CovidSearch />} />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/covidsearchvarients"
            element={<CovidSearchvarients />}
          />
          <Route path="/covidstate" element={<CovidState />} />
          <Route path="/covidselect" element={<CovidSelect />} />
          <Route path="/covidbargraphs" element={<CovidBargraphs />} />
          <Route path="/covidabout" element={<CovidAbout />} />
          <Route path="/coviderror" element={<CovidError />} />
          <Route path="/vaccine" element={<Vaccine />} />
          <Route path="/covid2state" element={<Covid2State />} />
          <Route path="/vaccineone" element={<VaccineOne />} />
          <Route path="/vaccinedropdown" element={<Vaccinedropdown />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
