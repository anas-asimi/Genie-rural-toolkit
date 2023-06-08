import Layout from "./layouts/Layout";
import { Routes, Route } from "react-router-dom";

// import pages
import Home from "./pages/Home";
import Storage from "./pages/Storage";
import Pomps from "./pages/Pomps";
import Coordinates from "./pages/Coordinates";
import About from "./pages/About";
import Notfound from "./pages/Notfound";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/storage" element={<Storage />} />
        <Route path="/pomps" element={<Pomps />} />
        <Route path="/coordinates" element={<Coordinates />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Notfound />} />
      </Route>
    </Routes>
  );
}