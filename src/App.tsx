import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Home from "@/pages/Home";
import ProjectDetail from "@/pages/ProjectDetail";
import SmoothScroll from "@/components/SmoothScroll";
import Cursor from "@/components/Cursor";
import Loader from "@/components/Loader";
import { projects } from "@/data/content";

export default function App() {
  useEffect(() => {
    // Preload project images during initial load so they display instantly in 0ms
    projects.forEach((p) => {
      if (p.image) {
        const img = new Image();
        img.src = p.image;
      }
      if (p.detailImage) {
        const img = new Image();
        img.src = p.detailImage;
      }
    });
  }, []);

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
