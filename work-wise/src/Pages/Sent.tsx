import LeftNav from "../Components/Left/LeftNav";
import { Search } from "../Components/Middle/Content";
import RightNav from "../Components/Right/RightNav";
import './Sent.css'

export default function Sent(){
    return(
        <>
        <LeftNav  icon={'send'}/>
        <div className="container">
            <Search job={true} />
            <div className="sent-content" >
                <h1 className="primary">Here you can see all the jobs you have applied</h1>
                <div className="item" id="first">
                <p className='primary-text'>Apple</p>
                <p className="primary-text">React Developer</p>
                <p className="secondary-text">Apply Date: 19.05.2023</p>
                <p className="secondary-text">Status: Applied</p>
                </div>
                <div className="item" >
                <p className='primary-text'>Apple</p>
                <p className="primary-text">React Developer</p>
                <p className="secondary-text">Apply Date: 19.05.2023</p>
                <p className="secondary-text">Status: Applied</p>
                </div>
                <div className="item" >
                <p className='primary-text'>Apple</p>
                <p className="primary-text">React Developer</p>
                <p className="secondary-text">Apply Date: 19.05.2023</p>
                <p className="secondary-text">Status: Applied</p>
                </div>
            </div>
        </div>
        <RightNav />

        </>
    )
}