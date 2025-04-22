import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Dashboard from './pages/Dashboard';
import DashboardLanding from './pages/DashboardLanding';

const App = () => {
  const path = window.location.pathname;
  if (path.startsWith("/about")) return <AboutPage />;
  if (path.startsWith("/privacy")) return <PrivacyPolicy />;
  if (path.startsWith("/dashboard") && path.includes("?code=")) return <Dashboard />;
  if (path.startsWith("/dashboard")) return <DashboardLanding />;
  return <HomePage />;
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);