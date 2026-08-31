import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import PageLoader from "./components/layout/PageLoader";
import ScrollToTop from "./components/layout/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/services";
import ServiceDetails from "./pages/ServiceDetails";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <PageLoader />

      <div className="min-h-screen bg-black text-white">
        <Navbar />

        <main className="pb-20 md:pb-0">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/about" element={<About />} />

            <Route path="/services" element={<Services />} />

            <Route path="/services/:id" element={<ServiceDetails />} />

            <Route path="/projects" element={<Projects />} />

            <Route
              path="/projects/:slug"
              element={<ProjectDetails />}
            />

            <Route path="/contact" element={<Contact />} />

            <Route
              path="*"
              element={
                <div className="flex min-h-screen items-center justify-center">
                  <div className="text-center">
                    <h1 className="text-6xl font-medium">
                      404
                    </h1>

                    <p className="mt-4 text-neutral-500">
                      Page not found.
                    </p>
                  </div>
                </div>
              }
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}