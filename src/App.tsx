import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import UserLayout from './layouts/UserLayout';
import AdminLayout from './layouts/AdminLayout';
import UserHome from './pages/user/UserHome';
import UserProfile from './pages/user/UserProfile';
import Sales from './pages/user/Sales';
import Rent from './pages/user/Rent';
import Agent from './pages/user/Agent';
import AgentDetails from './pages/user/AgentDetails';
import PropertyDetails from './pages/user/PropertyDetails';
import VirtualTour from './pages/user/VirtualTour';
import TourDetails from './pages/user/TourDetails';
import RealEstateMap from './pages/user/RealEstateMap';
import AboutUs from './pages/user/AboutUs';
import ContactUs from './pages/user/ContactUs';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminUsers from './pages/admin/AdminUsers';
import AdminSettings from './pages/admin/AdminSettings';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Root redirects to user home */}
        <Route path="/" element={<Navigate to="/user" replace />} />
        
        {/* User Portal Routes */}
        <Route path="/user" element={<UserLayout />}>
          <Route index element={<UserHome />} />
          <Route path="sales" element={<Sales />} />
          <Route path="rent" element={<Rent />} />
          <Route path="profile" element={<UserProfile />} />
          <Route path="agent" element={<Agent />} />
          <Route path="agent/:id" element={<AgentDetails />} />
          <Route path="property/:id" element={<PropertyDetails />} />
          <Route path="virtual-tour" element={<VirtualTour />} />
          <Route path="virtual-tour/:id" element={<TourDetails />} />
          <Route path="real-estate-map" element={<RealEstateMap />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="contact" element={<ContactUs />} />
        </Route>

        {/* Admin Portal Routes - accessible only via direct URL */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="/admin/dashboard" replace />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="users" element={<AdminUsers />} />
          <Route path="settings" element={<AdminSettings />} />
        </Route>

        {/* Catch all - redirect to user home */}
        <Route path="*" element={<Navigate to="/user" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
