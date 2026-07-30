import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Home from "@/pages/Home";
import ProjectDetail from "@/pages/ProjectDetail";
import SmoothScroll from "@/components/SmoothScroll";
import Cursor from "@/components/Cursor";
import Loader from "@/components/Loader";



export default function App() {
  return (
    <BrowserRouter>
      <Loader />
      <SmoothScroll />
      <Cursor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/:slug" element={<ProjectDetail />} />
      </Routes>
      <Analytics />
    </BrowserRouter>
  );
}
