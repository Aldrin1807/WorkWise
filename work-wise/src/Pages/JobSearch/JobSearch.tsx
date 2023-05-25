import Job from '../../Components/Job'
import LeftNav from '../../Components/Left/LeftNav'
import { Search } from '../../Components/Middle/Content'
import RightNav from '../../Components/Right/RightNav'
import './JobSearch.css'



function JobSearch(){
    
    return(
        <>
        <LeftNav />

            <div className="container">
               <Search />
                <div className='container-1'>
               <h2 className='h2-text'>Results displayed after filtering</h2>
               <p className='p-text'>All posted 1 Week ago</p>
               </div>
               <div className='container-2'>
                 <Job />
                 <Job />
                 <Job />
                 <Job />
               </div>
            </div>

        <RightNav />
        </>
    )
}

export default JobSearch