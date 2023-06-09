import Job from '../../Components/Job'
import LeftNav from '../../Components/Left/LeftNav'
import { Search } from '../../Components/Middle/Content'
import RightNav from '../../Components/Right/RightNav'
import './JobSearch.css'



function JobSearch(props:any){
    
    return(
        <>
        <LeftNav icon={'briefcase'}/>

            <div className="container">
               <Search />
                <div className='container-1'>
               <h2 className='h2-text'>Results displayed after filtering</h2>
               <p className='p-text'>lorem ipsum</p>
               </div>
               <div className='container-2'>
                 <Job />
                 <Job />
                 <Job />
                 <Job />
                 <div className='container-3'>
                    <ul>
                        <li>{'<'}</li>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>{'...'}</li>
                        <li>10</li>
                        <li>{'>'}</li>
                    </ul>
               </div>
               </div>
            </div>

        <RightNav logged={props.logged} />
        </>
    )
}

export default JobSearch