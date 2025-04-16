import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigationType,
} from "react-router-dom";
import { useEffect } from "react";
import { LandingPage } from "./pages/LandingPage";
import { FeaturesPage } from "./pages/FeaturesPage";
import { PricingPage } from "./pages/PricingPage";
import { WhoWeServePage } from "./pages/WhoWeServePage";
import { CompanyPage } from "./pages/CompanyPage";
import { ServicesPage } from "./pages/ServicesPage";
import { ResourcesPage } from "./pages/ResourcesPage";
import { ConsultingPage } from "./pages/ConsultingPage";
import { PrivacyPage } from "./pages/PrivacyPage";
import { TermsPage } from "./pages/TermsPage";
import { PrismPage } from "./pages/PrismPage";
import { BlogListPage } from "./pages/BlogListPage";
import { BlogDetailPage } from "./pages/BlogDetailPage";
// import { ComingSoonPage } from "./pages/ComingSoonPage";

// Google Analytics tracking (this is just the initialization)
function initializeGoogleAnalytics() {
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${
    import.meta.env.VITE_GA_MEASUREMENT_ID
  }`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function (...args) {
    window.dataLayer.push(args);
  };
  window.gtag("js", new Date());
  window.gtag("config", import.meta.env.VITE_GA_MEASUREMENT_ID);
}

// Analytics tracking component
function AnalyticsTracker() {
  const location = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    if (typeof window.gtag === "function") {
      window.gtag("event", "page_view", {
        page_path: location.pathname + location.search,
        page_location: window.location.href,
        page_title: document.title,
      });
    }
  }, [location, navigationType]);

  return null;
}

function App() {
  useEffect(() => {
    initializeGoogleAnalytics();
  }, []);

  return (
    <Router>
      <AnalyticsTracker />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/solutions" element={<FeaturesPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/who-we-serve" element={<WhoWeServePage />} />
        <Route path="/company" element={<CompanyPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/consulting" element={<ConsultingPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/prism" element={<PrismPage />} />
        {/* Add new blog routes */}
        <Route path="/blogs" element={<BlogListPage />} />
        <Route path="/blogs/:slug" element={<BlogDetailPage />} />
        {/* <Route path="/coming-soon" element={<ComingSoonPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
