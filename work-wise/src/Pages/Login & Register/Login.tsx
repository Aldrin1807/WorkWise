import './LoginRegister.css'


function Login(){
    const login=(param:number)=>{
        param==0?  localStorage.setItem('logged-in','1'):  localStorage.setItem('logged-in','2');
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

        <button className='submit' type="submit"> Login </button>
        <p className="toggle-form" onClick={()=>window.location.href='/register'} >
         Don't have an account? Register
        </p>
      </form>
    </div>
        
        </>
    )
}
export default Login


