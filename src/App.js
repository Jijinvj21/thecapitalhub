import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.scss";

// Wrappers
import ValidateOneLink from "./pages/InvestorView/ValidateOneLink/ValidateOneLink";
import ProtectedInvestorRoutes from "./pages/Investor/ProtectedInvestorRoutes/ProtectedInvestorRoutes";
import BlogWrapper from "./components/Blog/BlogWrapper/BlogWrapper";
import EcommerceLayout from "./components/ECommerace/Layout/Layout/Layout";

// Pages
import Chats from "./pages/ChatPages/Chats/Chats";

// Routes
import StartUpRoutes from "./routes/StartUpRoutes";
import OneLinkRoutes from "./routes/OneLinkRoutes";
import InvestorRoutes from "./routes/InvestorRoutes";
import BlogRoutes from "./routes/BlogRoutes";
import PublicRoutes from "./routes/PublicRoutes";
import EcommerceRoutes from "./routes/EcommerceRoutes";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        {PublicRoutes()}

        {/* Chat */}
        <Route path="/chats" element={<Chats />} />

        {/* StartUp */}
        {StartUpRoutes()}

        {/* OneLink */}
        <Route path="/onelink/:username" element={<ValidateOneLink />}>
          {OneLinkRoutes()}
        </Route>

        {/* Investor */}
        <Route path="/investor" element={<ProtectedInvestorRoutes />}>
          {InvestorRoutes()}
        </Route>

        {/* Blogs */}
        <Route path="/blog" element={<BlogWrapper />}>
          {BlogRoutes()}
        </Route>

        {/* E-Commerce */}
        <Route path="/e-commerce" element={<EcommerceLayout />}>
          {EcommerceRoutes()}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
