import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Explore from "./pages/Explore";
import DestinationDetails from "./pages/DestinationDetails";
import AIPlanner from "./pages/AIPlanner";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Explore />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/destination/:id"
          element={<DestinationDetails />}
        />

        <Route
          path="/ai-planner"
          element={
            <>
              <Navbar />
              <AIPlanner />
            </>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;