import { IoMdArrowBack } from 'react-icons/io';
import './Content.css'
import { CiCircleRemove } from 'react-icons/ci';

export function Search(props:any){
    const cities = [
        'Prishtina',
        'Prizren',
        'Peja',
        'Gjakova',
        'Mitrovica',
        'Ferizaj',
        'Gjilan',
        'Vushtrri',
        'Podujeva',
        'Suhareka',
        'Rahovec',
        'Lipjan',
        'Malisheva',
        'Gracanica',
        'Shtime',
        'Obiliq',
        'Dragash',
        'Deçan',
        'Kamenica',
        'Viti',
        'Klina',
        'Partesh',
        'Zubin Potok',
        'Fushë Kosovë',
        'Kaçanik',
        'Zveçan',
        'Junik',
        'Istog',
        'Klinë',
        'Skenderaj',
      ];
      function redirectToJobSearch() {
        window.location.href = "/job-search";
      }
      
    return (
        <div className='title-n-search'>
            {props.job?(
                <div className='back-icon' onClick={redirectToJobSearch}>
                <IoMdArrowBack  />
                </div>
            ):(null)}
        <h1 className='title-text'>WorkWise</h1>
        <div className="has-search">
        <span className="fa fa-search form-control-feedback" />
        <input type="text" className="form-control" placeholder="Search here" />
        <div  style={{borderLeft: '1px solid #DCDCDC', height: '1.3rem',borderColor:'#DCDCDC'}} />
            <select id="location" className='citys-dropdown'>
                <option  value="">Select City</option>
                {cities.map((city) => (
                <option key={city} value={city}>
                    {city}
                </option>
                ))}
        </select>
        </div>

    </div>
    )
}


export function Profile(){
    return(
        <div className='profile-content'>
            <div className='photo-and-name'>
                <img src="https://image-placeholder.com/images/actual-size/75x75.png" alt="" />
                <div className='listat'>
                <ul>
                    <li className='primary-text'>First and LastName</li>
                    <li className='secondary-text'>Aldrin Islami</li>
                </ul>
                <ul>
                    <li className='primary-text'>Email</li>
                    <li className='secondary-text'>aldrin@gmail.com</li>
                </ul>
                </div>
            </div>
            <div className="about"> 
                <h3 className='primary'>About You</h3>
                <textarea className='about-me-area' id="" cols={80} rows={10}></textarea>
                <button className='save-butoni'>Save Changes</button>
            </div>
        </div>
    )
}

export function Experience(){
    return(
        <div className="experience">
            <h3>Please tell us about your work experience</h3>
            <hr />
            <div className="experience-item" id='first'>
                <CiCircleRemove className="remove" />
                <p className='primary-text'>
                Apple</p>
                <p className="primary-text">Software Developer</p>
                <p className="secondary-text">Start Date: 19.05.2020</p>
                <p className="secondary-text">End Date: 10.06.2021</p>
            </div>
            <button className='add-butoni'>Add Experience</button>
        </div>
    )
}

export function Education(){
    return(
        <div className="experience">
        <h3>Please tell us about your Education</h3>
        <hr />
        <div className="experience-item" id='first'>

            <p className='primary-text'>
            
            UBT</p>
            <p className="primary-text">Computer Science and Engineering</p>
            <p className="secondary-text">Start Date: 19.05.2020</p>
            <p className="secondary-text">End Date: 10.06.2021</p>
        </div>
        <div className="experience-item">
          
            <p className='primary-text'>
            SHFMU "Bafti Haxhiu"</p>
            <p className="primary-text">Natural Science</p>
            <p className="secondary-text">Start Date: 19.05.2020</p>
            <p className="secondary-text">End Date: 10.06.2021</p>
        </div>
        <button className='add-butoni'>Add Education</button>
    </div>
    )
}

export function Skills(){
    return(
        <div className="experience">
        <h3>Please tell us about your Skills</h3>
        <hr />
        <div className="experience-item" id='first'>
   
            <p className='primary-text'>Advanced Java</p>
            <p className="secondary-text">Remove</p>
        </div>
        <div className="experience-item">
      
        <p className='primary-text'>Advanced C# Programming</p>
            <p className="secondary-text">Remove</p>
        </div>
        <div className="experience-item">
    
             <p className='primary-text'>HTML CSS JS</p>
             <p className="secondary-text">Remove</p>
        </div>
        <div className="experience-item">
     
             <p className='primary-text'>ASP.Net Core</p>
             <p className="secondary-text">Remove</p>
        </div>
        <button className='add-butoni'>Add Skill</button>
    </div>
    )
}