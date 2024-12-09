import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import validate from "./Validate";
import "./Login.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./reducer/loginSlicer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

function Login() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state?.signupReducer);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate(data);
    console.log("Form Errors:", formErrors);
    setErrors(formErrors);
    if (Object.keys(formErrors).length === 0) {
      console.log("Form submitted successfully", data);
    }

    if (validateUser()) {
      console.log("Form submitted successfully", data);
      dispatch(login(data));
      navigate("/home");
    }
  
  };
  const validateUser = () => {
    const userError = {};
    const registeredEmail = user.map((u) => u.email);
    if (!registeredEmail.includes(data.email)) {
      userError.email = "User does not exist, please sign up";
    } else {
      const matchedUser = user.find((u) => u.email === data.email);
      if (matchedUser.password !== data.password) {
        userError.password = "Incorrect password";
      }
    }
    setErrors(userError);
    return Object.keys(userError).length === 0;
  };

  return (
    <div className="wrapper">
      <div className="loginCard shadow">
        <h2 className="text-center">Log In</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group mb-3">
            <span className="input-group-text">
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            <input
              type="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              name="email"
              placeholder="Email"
              value={data.email}
              onChange={handleChange}
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email}</div>
            )}
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">
              <FontAwesomeIcon icon={faLock} />
            </span>
            <input
              type="password"
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
              name="password"
              placeholder="Password"
              value={data.password}
              onChange={handleChange}
            />
            {errors.password && (
              <div className="invalid-feedback">{errors.password}</div>
            )}
          </div>
          <button type="submit" className="btn btn-primary w-100 mb-3">
            Log In
          </button>
        
        </form>
        <div className="text-center mt-3">
          <p>Don't have an account? <span className="link" onClick={() => navigate("/signup")}>Sign Up</span></p>
        </div>
      </div>
    </div>
  );
}

export default Login;
