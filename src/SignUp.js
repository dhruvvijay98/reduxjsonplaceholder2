import React, { useState } from "react";
import validate from "./Validate";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signup } from "./reducer/signupSlicer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faUser,
  faPhone,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";

function SignUp() {
  const [value, setValue] = useState({
    username: "",
    contact: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate(value);
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      dispatch(signup(value));
      console.log("Form submitted successfully", value);
      toast.success("User signed in successfully");
      setTimeout(() => navigate("/login"), 2000);
    }
  };

  return (
    <div className="wrapper">
      <ToastContainer />
      <form className="signupCard" onSubmit={handleSubmit}>
        <h2 className="text-center">Sign Up</h2>
        <div className="mb-3">
          <label className="form-label">
            <FontAwesomeIcon icon={faUser} style={{ marginRight: "10px" }} />
            Username
          </label>
          <input
            type="text"
            className={`form-control ${errors.username ? "is-invalid" : ""}`}
            name="username"
            value={value.username}
            onChange={handleChange}
            placeholder="Enter your username"
          />
          {errors.username && (
            <div className="invalid-feedback">{errors.username}</div>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">
            <FontAwesomeIcon icon={faPhone} style={{ marginRight: "10px" }} />
            Contact
          </label>
          <input
            type="number"
            className={`form-control ${errors.contact ? "is-invalid" : ""}`}
            name="contact"
            value={value.contact}
            onChange={handleChange}
            placeholder="Enter your contact"
          />
          {errors.contact && (
            <div className="invalid-feedback">{errors.contact}</div>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">
            <FontAwesomeIcon
              icon={faEnvelope}
              style={{ marginRight: "10px" }}
            />
            Email Address
          </label>
          <input
            type="email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            name="email"
            value={value.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
          {errors.email && (
            <div className="invalid-feedback">{errors.email}</div>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">
            <FontAwesomeIcon icon={faLock} style={{ marginRight: "10px" }} />
            Password
          </label>
          <input
            type="password"
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
            name="password"
            value={value.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
          {errors.password && (
            <div className="invalid-feedback">{errors.password}</div>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">
            <FontAwesomeIcon
              icon={faCheckCircle}
              style={{ marginRight: "10px" }}
            />
            Confirm Password
          </label>
          <input
            type="password"
            className={`form-control ${errors.confirmpassword ? "is-invalid" : ""}`}
            name="confirmpassword"
            value={value.confirmpassword}
            onChange={handleChange}
            placeholder="Re-enter your password"
          />
          {errors.confirmpassword && (
            <div className="invalid-feedback">{errors.confirmpassword}</div>
          )}
        </div>

        <div className="btnwrapper">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => navigate("/")}
          >
            Cancel
          </button>
        </div>
        <div className="btnwrapper1">
          <p style={{ margin: "2px", color: "#f8f9fa" }}>
            Already have an account?
          </p>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
