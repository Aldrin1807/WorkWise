import './LeftNav.css'
import { GoHome } from "react-icons/go";
import { IoBriefcaseOutline } from "react-icons/io5";
import { IoSend } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";
import { useState } from 'react';
import { CiUser } from 'react-icons/ci';

function LeftNav(props:any){
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
  
    return (
      <div className="left-nav">
        <div className="box">
          <div className={selectedIcon === 'home' ? 'selected' : ''} onClick={() => handleIconClick('home','home')}>
            <GoHome  />
            </div>
          </div>
    
        {loggedin=='0'?( <div className="box">
          <div className={selectedIcon === 'briefcase' ? 'selected' : ''} onClick={() => handleIconClick('briefcase','job-search')}>
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
        
        <div className="box">
          {(loggedin=='1'||logged=='2')?(<FiLogOut onClick={()=>setLoggedin('0')} />):(<CiUser onClick={()=>{window.location.href='login'}} />)}
        </div>
      </div>
    );
}
export default LeftNav;