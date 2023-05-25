import { useState } from "react";
import LeftNav from "../Components/Left/LeftNav";
import { Education, Experience, Profile, Search, Skills } from "../Components/Middle/Content";
import RightNav from "../Components/Right/RightNav";
import './Settings.css'

export default function Settings(){
    const [content,setContent] = useState(1);
    const handleNavClick = (index:any) => {
        setContent(index);
    };
    return(
        <>
        <LeftNav  icon={'settings'}/>
        <div className="container">
            <Search job={true} />
            <div className="contenti">
                <div className="left-side">
                    <ul className="list">
                        <li  className={`${content === 0 ? "active" : ""}`} onClick={() => handleNavClick(0)}>Profile</li>
                        <li  className={`${content === 1 ? "active" : ""}`} onClick={() => handleNavClick(1)}>Experience</li>
                        <li  className={`${content === 2 ? "active" : ""}`} onClick={() => handleNavClick(2)}>Education</li>
                        <li  className={`${content === 3 ? "active" : ""}`} onClick={() => handleNavClick(3)}>Skills</li>
                    </ul>
                </div>
                <div className="main-content">
                {content === 0 && <Profile />}
                {content === 1 && <Experience />}
                {content === 2 && <Education />} 
                {content === 3 && <Skills />}
                </div>
            </div>
        </div>
        <RightNav />
        </>
    )
}