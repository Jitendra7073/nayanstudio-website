import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  Gallery,
  About,
  Inquiry,
  StoryList,
  Testimonial,
  Page1,
  Page2,
  Page5,
  Page6,
  Page7,
  Page8,
  NotFound,
  Videos
} from "./pages";
import { Header, Footer, ScrollTop } from "./components";
import Welcome from "./components/Welcome";

function App() {
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");
    if (!hasVisited) {
      setShowWelcome(true);
    }
  }, []);

  const handleEnter = () => {
    localStorage.setItem("hasVisited", "true");
    setShowWelcome(false);
  };

  const handleLogoClick = () => {
    localStorage.removeItem("hasVisited"); // Reset localStorage
    setShowWelcome(true); // Show welcome page
  };

  return (
    <div>
      {showWelcome ? (
        <Welcome action={handleEnter} />
      ) : (
        <div className="all_view">
          <BrowserRouter>
            <Header onLogoClick={handleLogoClick} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/inquiry" element={<Inquiry />} />
              <Route path="/about" element={<About />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/stories" element={<StoryList />} />
              <Route path="/testimonial" element={<Testimonial />} />
              <Route
                path="/stories/Bhagyesh&Khevana"
                element={<Page1 />}
              />
              <Route
                path="/stories/Lancy&Pavan"
                element={<Page2 />}
              />
              <Route
                path="/stories/Yasha&Bhargesh"
                element={<Page5 />}
              />
              <Route
                path="/stories/Vishal&Shreya"
                element={<Page6 />}
              />
              <Route
                path="/stories/Vishal&Shreya"
                element={<Page6 />}
              />
              <Route
                path="/stories/Bhramasini&Shwetanshu"
                element={<Page7 />}
              />
              <Route
                path="/stories/Priyaj&Rushali"
                element={<Page8 />}
              />
              <Route path="*" element={<NotFound />} />
              <Route path="/videos" element={<Videos />} />
            </Routes>
            <Footer />
            <ScrollTop />
          </BrowserRouter>
        </div>
      )}
    </div>
  );
}

export default App;
