import React from "react";
import Layout from "./layouts/Layout";
import { Routes, Route } from "react-router-dom";

// import pages
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";
const Storage = React.lazy(() => import('./pages/Storage'))
const Pomps = React.lazy(() => import('./pages/Pomps'))
const Coordinates = React.lazy(() => import('./pages/Coordinates'))
const About = React.lazy(() => import('./pages/About'))


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/storage" element={
          <React.Suspense fallback={<p></p>}>
            <Storage />
          </React.Suspense>
        } />
        <Route path="/pomps" element={
          <React.Suspense fallback={<p></p>}>
            <Pomps />
          </React.Suspense>
        } />
        <Route path="/coordinates" element={
          <React.Suspense fallback={<p></p>}>
            <Coordinates />
          </React.Suspense>
        } />
        <Route path="/about" element={
          <React.Suspense fallback={<p></p>}>
            <About />
          </React.Suspense>
        } />
        <Route path="*" element={<Notfound />} />
      </Route>
    </Routes>
  );
}