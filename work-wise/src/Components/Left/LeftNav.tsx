import './LeftNav.css'
import { RiMenu5Fill } from "react-icons/ri";
import { IoBriefcaseOutline } from "react-icons/io5";
import {AiFillStar} from "react-icons/ai"
import { IoSend } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";

function LeftNav(){
    return (
        <div className='left-nav'>
            <div className="box">
                <RiMenu5Fill />
            </div>
            <div className="box">
                <div className='selected'>
                <IoBriefcaseOutline />
                </div >
                <div className='selected'>
                <AiFillStar />
                </div>
                <div className='selected'>
                <IoSend />
                </div>
                <div className='selected'>
                <IoMdSettings />
                </div>
            </div>
            <div className="box">
                <FiLogOut />
            </div>
        </div>
    )
}
export default LeftNav