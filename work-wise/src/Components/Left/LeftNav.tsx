import './LeftNav.css'
import { GoHome } from "react-icons/go";
import { IoBriefcaseOutline } from "react-icons/io5";
import { IoSend } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";
import { useState } from 'react';
import { CiUser } from 'react-icons/ci';
import { Button, Modal, TextField } from '@mui/material';
// Importing all styles
import '@mui/material/styles';




export default function LeftNav(props:any){
    const [selectedIcon, setSelectedIcon] = useState(props.icon);
  const logged = localStorage.getItem('logged-in');
    const [loggedin,setLoggedin] = useState(logged);
    if(loggedin=='0'){
      localStorage.setItem('logged-in','0');
    }
    const handleIconClick = (icon:any,location:any) => {
      window.location.href = `/${location}`
      setSelectedIcon(icon);
    };
    
    const [showModal,setShowModal] = useState(false);
    return (
      <div className="left-nav">
        <div className="box">
          <div className={selectedIcon === 'home' ? 'selected' : ''} onClick={() => handleIconClick('home','home')}>
            <GoHome  />
            </div>
          </div>
    
        {loggedin=='0'?( <div className="box">
          <div className={selectedIcon === 'briefcase' ? 'selected' : ''} id='notLogged' onClick={() => handleIconClick('briefcase','job-search')}>
          <IoBriefcaseOutline />
        </div>
        </div>):(null)}
        {loggedin=='1'?(   <div className="box">
          <div className={selectedIcon === 'briefcase' ? 'selected' : ''} onClick={() => handleIconClick('briefcase','job-search')}>
          <IoBriefcaseOutline />
        </div>
        <div className={selectedIcon === 'send' ? 'selected' : ''} onClick={() => handleIconClick('send','sent')}>
          <IoSend />
        </div>
        <div className={selectedIcon === 'settings' ? 'selected' : ''} onClick={() => handleIconClick('settings','settings')}>
          <IoMdSettings />
        </div>
        </div>):null}
        {loggedin=='2'?(<div className="box">
          <div className={selectedIcon === 'briefcase' ? 'selected' : ''} onClick={() => setShowModal(!showModal)}>
          <IoBriefcaseOutline />
        </div>
        <div className={selectedIcon === 'send' ? 'selected' : ''} onClick={() => handleIconClick('send','sent')}>
          <IoSend />
        </div>
        <div className={selectedIcon === 'settings' ? 'selected' : ''} onClick={() => handleIconClick('settings','settings')}>
          <IoMdSettings />
        </div>
        </div>):null}
        
        <div className="box">
          {(loggedin=='1'||logged=='2')?(<FiLogOut onClick={()=>setLoggedin('0')} />):(<CiUser onClick={()=>{window.location.href='login'}} />)}
        </div>
        <Modal open={showModal} onClose={() => setShowModal(!showModal)}>
        <div className="modal-content">
          <h2>Add a Job</h2>
          <form className='forma-add' >
          <TextField
            label="Job Title"
            required
            className='inputs'
          />
          <TextField
            label="Job Salary"
            required
            className='inputs'
          />
          <TextField
            label="Job Description"
            multiline
            rows={7}
            required
            className='inputs'
          />
          <TextField
            label="Valid Date"
            type="date"
            required
            InputLabelProps={{
              shrink: true,
            }}
          />
            <div className="modal-actions">
              <Button variant="contained" onClick={() => setShowModal(!showModal)}>
                Cancel
              </Button>
              <Button variant="contained" type="submit">
                Add
              </Button>
            </div>
          </form>
        </div>
      </Modal>
      
      </div>
    );
}
