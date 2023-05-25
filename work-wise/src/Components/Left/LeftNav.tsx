import './LeftNav.css'
import { RiMenu5Fill } from "react-icons/ri";
import { IoBriefcaseOutline } from "react-icons/io5";
import { IoSend } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";
import { useState } from 'react';

function LeftNav(props:any){
    const [selectedIcon, setSelectedIcon] = useState(props.icon);


    const handleIconClick = (icon:any,location:any) => {
      window.location.href = `/${location}`
      setSelectedIcon(icon);
    };
  
    return (
      <div className="left-nav">
        <div className="box">
          <RiMenu5Fill />
        </div>
        <div className="box">
          <div className={selectedIcon === 'briefcase' ? 'selected' : ''} onClick={() => handleIconClick('briefcase','job-search')}>
            <IoBriefcaseOutline />
          </div>
          <div className={selectedIcon === 'send' ? 'selected' : ''} onClick={() => handleIconClick('send','sent')}>
            <IoSend />
          </div>
          <div className={selectedIcon === 'settings' ? 'selected' : ''} onClick={() => handleIconClick('settings','settings')}>
            <IoMdSettings />
          </div>
        </div>
        <div className="box">
          <FiLogOut />
        </div>
      </div>
    );
}
export default LeftNav