import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGoogle,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faUser, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import "./Login.css";

const Login = () => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUpClick = () => {
    setIsRightPanelActive(true);
  };

  const handleSignInClick = () => {
    setIsRightPanelActive(false);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div
      className={`container ${
        isRightPanelActive ? "right-panel-active" : ""
      }`}
      id="container"
    >
      <div className="form-container sign-up-container">
        <form action="#">
          <h1>Create Account</h1>
          <div className="social-container">
            <a href="#" className="social">
              <FontAwesomeIcon icon={faGoogle} />
            </a>
            <a href="#" className="social">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="#" className="social">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <hr className="hr-text gradient" data-content="OR" />
          </div>
          <div className="input-container">
            <FontAwesomeIcon icon={faUser} />
            <input type="text" placeholder="Name" />
          </div>
          <div className="input-container">
            <FontAwesomeIcon icon={faEnvelope} />
            <input type="email" placeholder="Email" />
          </div>
            <div className="input-container">
              <FontAwesomeIcon icon={faLock} />
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="Password" 
              />
              <i
                className={`fa-solid ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
                onClick={togglePasswordVisibility}
                style={{ position: 'absolute', right: '10px', cursor: 'pointer', color: '#5e5b5b' }}
              ></i>
            </div>


          <button>Sign Up</button>
        </form>
      </div>

      <div className="form-container sign-in-container">
        <form action="#">
          <h1>Log in to Account</h1>
          <div className="social-container">
            <a href="#" className="social">
              <FontAwesomeIcon icon={faGoogle} />
            </a>
            <a href="#" className="social">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="#" className="social">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <hr className="hr-text gradient" data-content="OR" />
          </div>
          <div className="input-container">
            <FontAwesomeIcon icon={faEnvelope} />
            <input type="email" placeholder="Email" />
          </div>
          
          <div className="input-container">
            <FontAwesomeIcon icon={faLock} />
            <input 
              type={showPassword ? "text" : "password"} 
              placeholder="Password" 
            />
            <i
              className={`fa-solid ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
              onClick={togglePasswordVisibility}
              style={{ position: 'absolute', right: '10px', cursor: 'pointer', color: '#5e5b5b' }}
            ></i>
          </div>

          <a href="#">Forgot your password?</a>
          <button>Sign In</button>
        </form>
      </div>

      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
          <div className="flex items-center">
          <img src="/logo3.png" alt="Logo" className="h-12 mr-4" />
          
        </div>
            <h1>Welcome Back!</h1>
            <p>To keep connected, please login with your personal info</p>
            <button className="ghost" onClick={handleSignInClick}>
              Sign In
            </button>
          </div>
          <div className="overlay-panel overlay-right">
          <div className="flex items-center">
          <img src="/logo3.png" alt="Logo" className="h-12 mr-4" />
          
        </div>
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start your journey with us</p>
            <button className="ghost" onClick={handleSignUpClick}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
