import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "./components/layout/Layout";
import paths from "./constants/paths";

import Home from "./pages/home";
import Prompt from "./pages/prompt";
import Result from "./pages/result";
import Splash from "./pages/splash";
import Survival from "./pages/survival";
import Final from "./pages/final";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path={paths.home} element={<Home />} />
      <Route path={paths.prompt} element={<Prompt />} />
      <Route path={paths.result} element={<Result />} />
      <Route path={paths.splash} element={<Splash />} />
      <Route path={paths.survival} element={<Survival />} />
      <Route path={paths.final} element={<Final />} />
    </Route>
  )
);

export default router;
