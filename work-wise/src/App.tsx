
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import JobPage from './Pages/JobPage/JobPage';
import JobSearch from './Pages/JobSearch/JobSearch';
import Settings from './Pages/Settings';
import Sent from './Pages/Sent';
import Home from './Home';
import Login from './Pages/Login & Register/Login';
import Register from './Pages/Login & Register/Register';

function App() {

  return (
    <div className='content'>
      <BrowserRouter>
          <Routes>   
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="job-page" element={<JobPage />} />
          <Route path="job-search" element={<JobSearch />} />
          <Route path="settings" element={<Settings />} />
          <Route path="sent" element={<Sent />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
         </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
