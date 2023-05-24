import './LeftNav.css'
import { RiMenu5Fill } from "react-icons/ri";
import { IoBriefcaseOutline } from "react-icons/io5";
import {AiFillStar} from "react-icons/ai"
import { IoSend } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";
import { useState } from 'react';

function LeftNav(){
    const [selectedIcon, setSelectedIcon] = useState('briefcase');

    const handleIconClick = (icon:any) => {
      setSelectedIcon(icon);
    };
  
    return (
      <div className="left-nav">
        <div className="box">
          <RiMenu5Fill />
        </div>
        <div className="box">
          <div className={selectedIcon === 'briefcase' ? 'selected' : ''} onClick={() => handleIconClick('briefcase')}>
            <IoBriefcaseOutline />
          </div>
          <div className={selectedIcon === 'star' ? 'selected' : ''} onClick={() => handleIconClick('star')}>
            <AiFillStar />
          </div>
          <div className={selectedIcon === 'send' ? 'selected' : ''} onClick={() => handleIconClick('send')}>
            <IoSend />
          </div>
          <div className={selectedIcon === 'settings' ? 'selected' : ''} onClick={() => handleIconClick('settings')}>
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