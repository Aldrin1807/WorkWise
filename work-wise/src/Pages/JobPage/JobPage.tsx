import Job from '../../Components/Job'
import LeftNav from '../../Components/Left/LeftNav'
import { Search } from '../../Components/Middle/Content'
import RightNav from '../../Components/Right/RightNav'
import './JobPage.css'


function JobPage(props:any){
    return(
    <>
        <LeftNav icon={'briefcase'} />

            <div className='container'>
                <Search job={true} />
                <div className="job">
                    <Job jobpage={true} />
                    <div className='job-content'>
                    <h1 className='job-desc'>Job Description</h1>
                    <p className="job-text">
                    Morbi tempor pretium aliquam est vel. Interdum mi mauris netus amet lobortis in. Sed at eu sed sodales orci amet ac dis. Morbi tempor pretium aliquam est vel. Interdum mi mauris netus amet lobortis in. Sed at eu sed sodales orci amet ac dis. Morbi tempor pretium aliquam est vel. Interdum mi mauris netus amet lobortis in. Sed at eu sed sodales orci amet ac dis. Morbi tempor pretium aliquam est vel. Interdum mi mauris netus amet lobortis in. Sed at eu sed sodales orci amet ac dis. Morbi tempor pretium aliquam est vel. Interdum mi mauris netus amet lobortis in. Sed at eu sed sodales orci amet ac dis. Morbi tempor pretium aliquam est vel. Interdum mi mauris netus amet lobortis in. Sed at eu sed sodales orci amet ac dis.Morbi tempor pretium aliquam est vel. Interdum mi mauris netus amet lobortis in. Sed at eu sed sodales orci amet ac dis. Morbi tempor pretium aliquam est vel. Interdum mi mauris netus amet lobortis in. Sed at eu sed sodales orci amet ac dis. Morbi tempor pretium aliquam est vel. Interdum mi mauris netus amet lobortis in. Sed at eu sed sodales orci amet ac dis. Morbi tempor pretium aliquam est vel. Interdum mi mauris netus amet lobortis in. Sed at eu sed sodales orci amet ac dis. Morbi tempor pretium aliquam est vel. Interdum mi mauris netus amet lobortis in. Sed at eu sed sodales orci amet ac dis. Morbi tempor pretium aliquam est vel. Interdum mi mauris netus amet lobortis in. Sed at eu sed sodales orci amet ac dis.
                    </p>
                    <button className='apply-button'>Apply now</button>
                    <p className='job-text'>or email a copy of your resume and online portfolio to: random@workwise.com </p>
                    <p className='job-text'>CC random@workwise.com</p>
                </div>
                </div>
                
            </div>

        <RightNav />
    </>
    )
}

export default JobPage