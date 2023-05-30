import { useState } from 'react';
import './LoginRegister.css'


function Login(){
    const login=(param:number)=>{
        param==1?  localStorage.setItem('logged-in','1'):  localStorage.setItem('logged-in','2');
    }

    const [values,setValues] = useState({
      email:'',
      password:''
    })

    const handleChange = (event:any) => {
      const { name, value } = event.target;
      setValues((prevValues) => ({
        ...prevValues,
        [name]: value,
      }));
    };

    const handleForm=(e:any)=>{
      e.preventDefault();
      const isSeeker = values.email=='jobseeker@gmail.com';
      const isEmpl = values.email='employer@gmail.com';
     if(isSeeker){
      login(1);
     }else if(isEmpl){
      login(2);
     }
      window.location.href='/home'
    }
  
    

    return(
        <>
       <div className="login-register-form">
      <form  className="form">
        <h2 className='login-heading'>
          Login
        </h2>
        <div className="form-row">
          <label className="label" htmlFor="email">E-mail address:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={values.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-row">
          <label className="label" htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            value={values.password}
            onChange={handleChange}
          />
        </div>

        <button className='submit' type="submit" onClick={handleForm}> Login </button>
        <p className="toggle-form" onClick={()=>window.location.href='/register'} >
         Don't have an account? Register
        </p>
      </form>
    </div>
        
        </>
    )
}
export default Login


