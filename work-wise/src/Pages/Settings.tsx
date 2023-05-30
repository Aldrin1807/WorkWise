import { useState } from "react";
import LeftNav from "../Components/Left/LeftNav";
import { Education, Experience, Profile, Search, Skills } from "../Components/Middle/Content";
import RightNav from "../Components/Right/RightNav";
import './Settings.css'

export default function Settings(props:any){
    const [content,setContent] = useState(0);
    const handleNavClick = (index:any) => {
        setContent(index);
    };
    return(
        <>
        <LeftNav  icon={'settings'}/>
        {props.logged==1?(
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
                {content === 0 && <Profile logged={props.logged} />}
                {content === 1 && <Experience />}
                {content === 2 && <Education />} 
                {content === 3 && <Skills />}
                </div>
            </div>
        </div>
        ):(
            <div className="container" id="employer">
            <div className="contenti">
                <div className="left-side">
                    <ul className="list">
                        <li  className={`${content === 0 ? "active" : ""}`} onClick={() => handleNavClick(0)}>Profile</li>
                    </ul>
                </div>
                <div className="main-content">
                {content === 0 && <Profile logged={props.logged} />}
                </div>
            </div>
        </div>
        )}
        {props.logged==1||props.logged==0?(
            <RightNav logged={props.logged}  />
        ):(null)}
        
        </>
    )
}