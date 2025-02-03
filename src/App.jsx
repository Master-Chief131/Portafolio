import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, Suspense } from 'react';
import "./index.css";
import { AnimatePresence } from 'framer-motion';

// mejorar la carga de la página con lazy loading
const Home = React.lazy(() => import('./Pages/Home'));
const About = React.lazy(() => import('./Pages/About'));
const AnimatedBackground = React.lazy(() => import('./components/Background'));
const Navbar = React.lazy(() => import('./components/Navbar'));
const Portofolio = React.lazy(() => import('./Pages/Portofolio'));
const ContactPage = React.lazy(() => import('./Pages/Contact'));
const ProjectDetails = React.lazy(() => import('./components/ProjectDetail'));
const WelcomeScreen = React.lazy(() => import('./Pages/WelcomeScreen'));
const ThankYouPage = React.lazy(() => import('./Pages/ThankYou'));

const LandingPage = ({ showWelcome, setShowWelcome }) => {
  return (
    <>
      <AnimatePresence mode="wait">
        {showWelcome && (
          <WelcomeScreen onLoadingComplete={() => setShowWelcome(false)} />
        )}
      </AnimatePresence>

      {!showWelcome && (
        <>
          <Navbar />
          <AnimatedBackground />
          <Home />
          <About />
          <Portofolio />
          <ContactPage />
          <footer>
            <center>
              <hr className="my-3 border-gray-400 opacity-15 sm:mx-auto lg:my-6 text-center" />
              <span className="block text-sm pb-4 text-gray-500 text-center dark:text-gray-400">
                Copyright © 2025{" "}
                <a href="https://flowbite.com/" className="hover:underline">
                  Luis Márquez
                </a>
                . All Rights Reserved.
              </span>
            </center>
          </footer>
        </>
      )}
    </>
  );
};

const ProjectPageLayout = () => (
  <>
    <ProjectDetails />
    <footer>
      <center>
        <hr className="my-3 border-gray-400 opacity-15 sm:mx-auto lg:my-6 text-center" />
        <span className="block text-sm pb-4 text-gray-500 text-center dark:text-gray-400">
          Copyright © 2025{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Luis Márquez
          </a>
          . All Rights Reserved.
        </span>
      </center>
    </footer>
  </>
);

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<LandingPage showWelcome={showWelcome} setShowWelcome={setShowWelcome} />} />
          <Route path="/project/:id" element={<ProjectPageLayout />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;