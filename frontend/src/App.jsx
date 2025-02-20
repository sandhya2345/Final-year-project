import { Routes, Route } from 'react-router-dom'; 
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import About from './components/About';
import Services from './components/Services';
import Hospital from './components/Hospital';
import News from './components/News';
import PredictDisease from './components/PredictDisease';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard'; 
import PrivateRoute from './utils/PrivateRoute';
import { AuthProvider } from './context/AuthContext';
import Diabetes from './components/Diabetes';
import Footer from './components/Footer';
import Thyroid from './components/Thyroid';
import Details from './components/HospitalDetail';
import Kidney from './components/Kidney';
import Heart from './components/Heart';
import Result from './components/Result';

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/hospital" element={<Hospital />} />
        <Route path="/news" element={<News />} />
        <Route path="/predict" element={<PredictDisease />} />
        <Route path="/diabetes" element={<Diabetes />} />
        <Route path="/thyroid" element={<Thyroid />} />
        <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
        <Route path="/hospitaldetails" element={<Details />} />
        <Route path="/kidney" element={<Kidney />} />
        <Route path="/heart" element={<Heart />} />
        <Route path="/result" element={<Result />} />
      </Routes>
      <Footer/>
    </AuthProvider>
  );
}

export default App;
