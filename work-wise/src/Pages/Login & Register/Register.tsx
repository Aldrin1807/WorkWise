import { useState } from 'react'
import './LoginRegister.css'


function Register(){
    const [employer,setEmployer] = useState(false);

    return(
        <>
        <div className="login-register-form">
            {employer?(
                   <form className="form">
                   <h2 className='register-heading'>
                       Register form
                   </h2>
                     <div className="form-row">
                       <label className="label" htmlFor="name">Company Name:</label>
                       <input
                         type="text"
                         id="name"
                         name="name"
                    
                         required
                       />
                     </div>
                     <div className="form-row">
                       <label className="label" htmlFor="description">Description Company:</label>
                       <textarea
                         id="description"
                         name="description"
                           rows={10}
                           cols={51}
                         required
                       ></textarea>
                     </div>
                     <div className="form-row">
                       <label className="label" htmlFor="name">Address Company:</label>
                       <input
                         type="text"
                         id="name"
                         name="name"
                     
                         required
                       />
                     </div>
                   <div className="form-row">
                     <label className="label" htmlFor="email">E-mail address:</label>
                     <input
                       type="email"
                       id="email"
                       name="email"
                       required
                     />
                   </div>
           
                   <div className="form-row">
                     <label className="label" htmlFor="password">Password:</label>
                     <input
                       type="password"
                       id="password"
                       name="password"
                     
                       required
                     />
                   </div>
                    
                   <button className="submit" type="submit">Register</button>
                   <p className="toggle-form" onClick={()=>window.location.href='/login'} >
                    Already have an account? Login
                   </p>
                   <p className="toggle-form" onClick={()=>setEmployer(false)} >
                    Register as a JobSeeker
                    </p>
                 </form>
            ):(
                <form className="form">
                <h2 className='register-heading'>
                    Register form
                </h2>
                  <div className="form-row">
                    <label className="label" htmlFor="name">First Name:</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                    />
                  </div>
                  <div className="form-row">
                    <label className="label" htmlFor="description">Last Name:</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                    />
                  </div>
                  <div className="form-row">
                    <label className="label" htmlFor="name">Email:</label>
                    <input
                    type="email"
                    id="email"
                    name="email"
                
                    required
                  />
                  </div>
               
        
                <div className="form-row">
                  <label className="label" htmlFor="password">Password:</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    required
                  />
                </div>
                 
                <button className="submit" type="submit">Register</button>
                <p className="toggle-form" onClick={()=>window.location.href='/login'} >
                 Already have an account? Login
                </p>
                    <p className="toggle-form" onClick={()=>setEmployer(true)} >
                        Register as a Employer
                    </p>
              </form>
            )}
         
     
    </div>
        </>
    )
}
export default Register