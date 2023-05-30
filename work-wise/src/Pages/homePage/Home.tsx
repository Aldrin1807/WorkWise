import { AiOutlineArrowRight } from "react-icons/ai";
import LeftNav from "../../Components/Left/LeftNav";

import "./Home.css";
function Home() {
  return (
    <>
        <LeftNav icon={"home"} />
        <div className="home-content">
        <div className="first-section">
          <h1 className="title">WORKWISE</h1>
         
          <h2 className="description">
           The Easiest Way to Get Your New Job
          </h2>
          <h3 className="start-searching" onClick={()=>window.location.href='/job-search'}>Start searching now <AiOutlineArrowRight /> </h3>
        </div>
        <h2 className="description">
           What do we offer?
          </h2>
        <div className="second-section">
          <img src="https://superpuna.rks-gov.net/images/p_1.webp" alt="" className="foto"/>
          <div className="texti">
          <h2 className="description-t">
              JobSeekers
          </h2>
          <p>
          Are you ready to take the next step in your career? Join WorkWise, the ultimate jobseeker's paradise! Unlock endless opportunities, connect with top companies, and showcase your skills to the world. Our user-friendly platform empowers you to search and apply for jobs with ease
          </p>
          </div>
        </div>

        <div className="second-section">
          
          <div className="texti">
          <h2 className="description-t">
              Employers
          </h2>
          <p>
          Are you seeking exceptional talent to drive your company's success? Look no further than WorkWise, your ultimate hiring partner. Our platform offers a seamless and efficient recruitment process, allowing you to reach a pool of qualified candidates and find the perfect fit for your organization.  </p>
          </div>
          <img src="https://superpuna.rks-gov.net/images/p_2.webp" alt="" className="foto"/>
        </div>
     <div className="footer">
 	
    <div className="row text-center">						
      <div className="contenti-footer">
        <div className="footer_menu">
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/settings">Settings</a></li>
            <li><a href="/job-search">Jobs</a></li>
          </ul>
        </div>						
        <div className="footer_copyright">
          <p>© 2023 WorkWise. All Rights Reserved.</p>
        </div>	
        <div className="footer_profile">
          <ul>
            <li><a href="#"><i className="fa fa-facebook" /></a></li>
            <li><a href="#"><i className="fa fa-twitter" /></a></li>
            <li><a href="#"><i className="fa fa-instagram" /></a></li>
            <li><a href="#"><i className="fa fa-pinterest" /></a></li>
          </ul>
        </div>						
      </div>{/*- END COL */}							
    </div>{/*- END ROW */}					
  </div>{/*- END CONTAINER */}


  
      </div>
    </>
  );
}

export default Home;
