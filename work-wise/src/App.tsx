
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
  
  const logged = localStorage.getItem('logged-in')||0;


  return (
    <div className='content'>
      <BrowserRouter>
          <Routes>   
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="job-page" element={<JobPage logged={logged} />} />
          <Route path="job-search" element={<JobSearch logged={logged} />} />
          <Route path="settings" element={<Settings logged={logged} />} />
          <Route path="sent" element={<Sent logged={logged} />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
         </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
