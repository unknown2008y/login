import React, {useState} from 'react';
import * as ReactDOMClient from 'react-dom/client'
import './styles/main.css'

document.addEventListener('DOMContentLoaded', function () {
  const userAgent = navigator.userAgent.toLowerCase();
  const isMobile_Ipad = /ipod|android|blackberry|windows phone/.test(userAgent);
  const Iphones = /iphone/.test(userAgent)
  const result = document.getElementById('result');

  if (isMobile_Ipad) {
    result.style.transform = "translateY(-340px)"
  }

  else if (Iphones) {
    document.body.style.height = "85vh"
    result.style.transform = "translateY(-260px)"
  }

  else {
    result.style.transform = "translateY(-250px)"
  }
})

document.addEventListener('touchstart', function(event) {
  if (event.touches.length > 1) {
    event.preventDefault();
  }
}, { passive: false });




function Message1({ eyeClass }) {
  const typePassword = eyeClass === 'fa-solid fa-eye-slash' ? 'text' : 'password';

  return (
    <div className="login-description1">
      <form>
        <h1 className="logIn">Login</h1>
        <input
          id="email"
          type="email" required
          className="inputField1"
          placeholder=" "
        />
        <label className="email" htmlFor="email">Email</label>

        <div className="login-description2">
          <input
            id="password"
            type={typePassword} required
            className="inputField2"
            placeholder=" "
          />
          <label className="password" htmlFor="password">Password</label>
        </div>
        <div className='login_down'>
          <button type='submit'>Login</button>
        </div>
      </form>
    </div>
  );
}

function Div({ onClick }) {
  const [classNameEye, setClassNameEye] = useState('fa-regular fa-eye');

  const handleClick = () => {
    const newClass = classNameEye === 'fa-regular fa-eye' ? 'fa-solid fa-eye-slash' : 'fa-regular fa-eye';
    setClassNameEye(newClass);
    onClick(newClass); 
  };

  return (
    <div>
      <div className="centerDiv"></div>
      <i className={classNameEye} onClick={handleClick}></i>
      <i class="fa-regular fa-envelope"></i>
    </div>
  );
}



function App() {
  const [eyeClass, setEyeClass] = useState('fa-regular fa-eye');

  return (
    <div>
      <Div onClick={setEyeClass} />
      <Message1 eyeClass={eyeClass} />
    </div>
  );
}

const result = ReactDOMClient.createRoot(document.getElementById('result'));
result.render(<App />);

