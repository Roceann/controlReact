// src/routes/Router.jsx

import { Routes, Route } from "react-router";
import Home from "../pages/home/Home";
import HeroDetails from "../Components/heroDetails/HeroDetails";
import Contact from "../pages/contact/Contact";
import PrivateRoute from "./PrivateRoute";
import Page404 from "../pages/404pages/404page";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hero/:id" element={<HeroDetails />} />
      <Route
        path="/contact"
        element={
          <PrivateRoute>
            <Contact />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
