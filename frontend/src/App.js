import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar';
import AbhaVerification from './components/AbhaVerification';
import PatientLogin from './components/PatientLogin';
import WrapperRegistration from './components/WrapperRegistration';
import WrapperAssignment from './components/WrapperAssignment';
import WrapperPatientSearch from './components/WrapperPatientSearch';
import WrapperPatientConsultation from './components/WrapperPatientConsultation';
import WrapperPatientDashboard from './components/WrapperPatientDashboard';
import ReceptionistLogin from './components/ReceptionistLogin';
import DoctorLogin from './components/DoctorLogin';
import AdminLogin from './components/AdminLogin';
import NoMatch from './components/NoMatch';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>

        <Route path='receptionistlogin' element={<ReceptionistLogin/>}></Route>
        <Route path='abha' element={<AbhaVerification/>}></Route>
        <Route path='registration' element={<WrapperRegistration/>}></Route>
        <Route path='assignment' element={<WrapperAssignment/>}></Route> 

        <Route path='doctorlogin' element={<DoctorLogin/>}></Route>
        
        <Route path='search' element={<WrapperPatientSearch />}></Route>
        <Route path='consultation' element={<WrapperPatientConsultation />}></Route>
        <Route path='dashboard' element={<WrapperPatientDashboard/>}></Route>
        <Route path='assignment' element={<WrapperAssignment/>}></Route> 
        
        <Route path='patientlogin' element={<PatientLogin/>}></Route>
        <Route path='adminlogin' element={<AdminLogin/>}></Route>

        <Route path='*' element={<NoMatch/>}></Route>
      </Routes>
    </>
  );
}

export default App;
