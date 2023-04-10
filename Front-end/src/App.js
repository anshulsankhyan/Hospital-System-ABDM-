import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Navbar from './components/Navbar';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
// import Registration from './components/Registration';
// import PatientSearch from './components/PatientSearch';
// import PatientConsultation from './components/PatientConsultation';
// import PatientDashboard from './components/PatientDashboard';
// import DoctorAssignment from './components/DoctorAssignment';
import AbhaVerification from './components/AbhaVerification';
import PatientLogin from './components/PatientLogin';
import WrapperRegistration from './components/WrapperRegistration';
import WrapperAssignment from './components/WrapperAssignment';
import WrapperPatientSearch from './components/WrapperPatientSearch';
import WrapperPatientConsultation from './components/WrapperPatientConsultation';
import WrapperPatientDashboard from './components/WrapperPatientDashboard';
library.add(fab, faCheckSquare, faCoffee)

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='login' element={<Login />}></Route>
        <Route path='registration' element={WrapperRegistration}></Route>
        <Route path='search' element={<WrapperPatientSearch />}></Route>
        <Route path='consultation' element={<WrapperPatientConsultation />}></Route>
        <Route path='dashboard' element={<WrapperPatientDashboard/>}></Route>
        <Route path='assignment' element={<WrapperAssignment/>}></Route> 
        <Route path='abha' element={<AbhaVerification/>}></Route>
        <Route path='patientlogin' element={<PatientLogin/>}></Route>
      </Routes>
    </>
  );
}

export default App;
