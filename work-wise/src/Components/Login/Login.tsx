import { useState } from 'react';
import './LoginRegister.css';

export default function Login() {
  const [isRegister, setIsRegister] = useState(false);
  const [userData, setUserData] = useState({
    name: '',
    personalNumber:'',
    email: '',
    password: '',
    Confirmpassword: '',
    terms: false
  });

  const handleToggleForm = () => {
    setIsRegister(!isRegister);
    setUserData({
      name: '',
      personalNumber:'',
      email: '',
      password: '',
      Confirmpassword: '',
      terms: false
    });
  };

  const handleChange = (e: { target: { name: any; value: any; type: any; checked: any; }; }) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === 'checkbox' ? checked : value;
    setUserData((prevData) => ({
      ...prevData,
      [name]: inputValue
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (isRegister) {
      // Handle registration submission
      console.log('Register form submitted', userData);
    } else {
      // Handle login submission
      console.log('Login form submitted', userData);
    }
  };

  return (
    <div className="login-register-form">
      <form onSubmit={handleSubmit} className="form">
        <h2 className={isRegister ? 'register-heading' : 'login-heading'}>
          {isRegister ? 'Register form' : 'Login form'}
        </h2>

        {isRegister && (
          <div className="form-row">
            <label className="label" htmlFor="name">Name and Surname:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={userData.name}
              onChange={handleChange}
              required
            />
          </div>
        )}
        {isRegister && (
          <div className="form-row">
            <label className="label" htmlFor="personalNumber">Personal number:</label>
            <input
              type="text"
              id="personalNumber"
              name="personalNumber"
              value={userData.personalNumber}
              onChange={handleChange}
              required
            />
          </div>
        )}

        <div className="form-row">
          <label className="label" htmlFor="email">E-mail address:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <label className="label" htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
            required
          />
        </div>

        

        {isRegister && (
          <div className="form-row">
            <label className="label" htmlFor="Confirmpassword">Confirm password:</label>
            <input
              type="password"
              id="Confirmpassword"
              name="Confirmpassword"
              value={userData.Confirmpassword}
              onChange={handleChange}
              required
            />
          </div>
        )}

        {isRegister && (
          <div className="form-row">
            <label className="label" htmlFor="terms">
              Agree to <a href="#">Terms and Conditions</a>:
            </label>
            <input
              type="checkbox"
              id="terms"
              name="terms"
              checked={userData.terms}
              onChange={handleChange}
              required={isRegister}
            />
          </div>
        )}

        <button className='submit' type="submit">{isRegister ? 'Register' : 'Login'}</button>

        <p className="toggle-form" onClick={handleToggleForm}>
          {isRegister ? 'Already have an account? Login' : "Don't have an account? Register"}
        </p>
      </form>
    </div>
  );
}
