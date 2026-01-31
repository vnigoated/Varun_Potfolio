import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Pages & Components
import LoadingScreen from './components/UI/LoadingScreen';
import CustomCursor from './components/UI/CustomCursor';
import Post from './pages/Post';
import IDELayout from './components/IDE/IDELayout';

// Scroll to Top Component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Router>
      <ScrollToTop />
      <CustomCursor />
      <div className="bg-slate-950 min-h-screen">

        <AnimatePresence>
          {isLoading && <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />}
        </AnimatePresence>

        {!isLoading && (
          <Routes>
            <Route path="/post/:id" element={<Post />} />
            <Route path="*" element={<IDELayout />} />
          </Routes>
        )}

      </div>
    </Router>
  );
}

export default App;
