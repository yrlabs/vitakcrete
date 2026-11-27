import React, { Suspense, lazy, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import { Toaster } from "react-hot-toast";
import Loader from "./components/Loader";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Log = lazy(() => import("./pages/Log"));
const LogDetail = lazy(() => import("./pages/LogDetail"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => {
  useEffect(() => {
    const handleContextMenu = (event) => {
      event.preventDefault();
    };

    document.addEventListener("contextmenu", handleContextMenu);
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  return (
    <div className="App">
      <Router basename="/vitakcrete">
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/log" element={<Log />} />
            <Route path="/log/:slug" element={<LogDetail />} />
            <Route path="/work/:slug" element={<ProjectDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Router>
      <Toaster />
    </div>
  );
};

export default App;
