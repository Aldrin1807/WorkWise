import './Job.css'

function Job(props:any){
    function redirectToJobPage() {
        window.location.href = "/job-page";
      }
      
    return(
        <div className='job-card' id={props.jobpage ? 'job-page-card' : ''} onClick={redirectToJobPage}>
            <img src="https://image-placeholder.com/images/actual-size/57x57.png" alt="" />
            <div className='lists'>
             <ul>
                <li className='primary-text'>Senior React Developer</li>
                <li className='secondary-text'>Apple</li>
            </ul>
            <ul>
                <li className='primary-text'>Full-time</li>
                <li className='secondary-text'>Type</li>
            </ul>
            <ul>
                <li className='primary-text'>$20,000-35,000k</li>
                <li className='secondary-text'>Monthly salary</li>
            </ul>
            </div>
        </div>
    )
}
export default Job