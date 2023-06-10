import Layout from "./layouts/Layout";
import { Routes, Route } from "react-router-dom";

// import pages
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/storage" lazy={() => import("./pages/Storage")} />
        <Route path="/pomps" lazy={() => import("./pages/Pomps")} />
        <Route path="/coordinates" lazy={() => import("./pages/Coordinates")} />
        <Route path="/about" lazy={() => import("./pages/About")} />
        <Route path="*" element={<Notfound />} />
      </Route>
    </Routes>
  );
}