import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Vendor from './pages/Vendor';
import APT from './pages/APT';
import VendorDetails from './pages/VendorDetails';
import DetailPage from './pages/APTDetail';
import NewThreat from './pages/NewThreat';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const location = useLocation();

  return (
    <>
      {/* Render Navbar only if the current path is not "/dashboard" */}
      {location.pathname !== '/dashboard' && <Navbar />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/vendors' element={<Vendor />} />
        <Route 
          path='/dashboard' 
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } 
        />
        <Route path='/apt' element={<APT />} />
        <Route path='/newthreat' element={<NewThreat />} />
        <Route path='/vendor/details/:id' element={<VendorDetails />} />
        <Route path='/vendors/details/:id' element={<VendorDetails />} />
        <Route path='/apt/details/:id' element={<DetailPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
