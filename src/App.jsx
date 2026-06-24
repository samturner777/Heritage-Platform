import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { HomePage } from "./pages/HomePage";
import { SiteDetailPage } from "./pages/SiteDetailPage";
import { FestivalsPage } from "./pages/FestivalsPage";
import { PlannerPage } from "./pages/PlannerPage";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-parchment font-body">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/site/:siteId" element={<SiteDetailPage />} />
          <Route path="/festivals" element={<FestivalsPage />} />
          <Route path="/planner" element={<PlannerPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

function Footer() {
  return (
    <footer className="border-t-2 border-bark/10 mt-12 py-8 px-6 md:px-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-3 items-start md:items-center">
        <p className="font-mono text-[11px] text-bark/40">
          Prototype · African Heritage Discovery Platform · built by theITguy IT Solutions
        </p>
        <p className="font-mono text-[11px] text-bark/40">
          Documented, narrated, and preserved — one site at a time.
        </p>
      </div>
    </footer>
  );
}
