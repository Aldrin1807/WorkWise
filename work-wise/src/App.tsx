
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import JobPage from './Pages/JobPage/JobPage';
import JobSearch from './Pages/JobSearch/JobSearch';
import Settings from './Pages/Settings';
import Sent from './Pages/Sent';
import LoginRegister from '../src/Components/Login/LoginRegister';
import LoginEmployer from './Components/Login/LoginEmployer';

function App() {

  return (
    <div className='content'>
      <BrowserRouter>
          <Routes>   
          <Route index element={<JobSearch />} />
          <Route path="job-page" element={<JobPage />} />
          <Route path="job-search" element={<JobSearch />} />
          <Route path="settings" element={<Settings />} />
          <Route path="sent" element={<Sent />} />
          <Route path="login" element={<LoginRegister />} />
          <Route path="LoginEmployer" element={<LoginEmployer />} />
         </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
