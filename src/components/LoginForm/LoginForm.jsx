import React from "react";
import { useNavigate } from "react-router-dom";

const initialState = {
  userName: "",
  password: "",
};

const successMsg = (
  <div className="text-center my-3">
    <h6 className="alert alert-success">Logged in successfully </h6>
    <p>Redirecting you to Dashboard</p>
  </div>
);

export default function LoginForm() {
  const [loginState, setLoginState] = React.useState(initialState);
  const [msg, setMsg] = React.useState(false);

  const storageData = JSON.parse(localStorage.getItem("data"));

  const navigate = useNavigate();

  const handleChange = (e) => {
    let value = e.target.value;
    setLoginState({
      ...loginState,
      [e.target.name]: value,
    });
  };

  const checkFields = () => {
    if (
      loginState.userName === storageData.userName &&
      loginState.password === storageData.password
    ) {
      console.log(loginState, storageData);
      setMsg(true);
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    } else {
      console.log(loginState, storageData);
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-center align-items-center">
        <div className="my-4 rounded-3 w-75 border border-1">
          <h1 className="m-4 rounded-3 p-4 bg-dark text-light text-center">
            Login form
          </h1>
          <div className="m-4  py-4">
            <div className="mb-3 row">
              <label htmlFor="inputName" className="col-md-2 col-form-label">
                Username
              </label>
              <div className="col-md-10">
                <input
                  type="text"
                  name="userName"
                  placeholder="Enter Username"
                  className="form-control"
                  id="inputName"
                  value={loginState.userName}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label
                htmlFor="inputPassword"
                className="col-md-2 col-form-label"
              >
                Password
              </label>
              <div className="col-md-10">
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  id="inputPassword"
                  placeholder="Enter Password"
                  value={loginState.password}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="d-flex justify-content-end gap-3">
              <button className="btn btn-primary" onClick={checkFields}>
                Submit
              </button>
              <button
                className="btn btn-danger"
                onClick={() => setLoginState(initialState)}
              >
                Cancel
              </button>
            </div>
            {msg && successMsg}
          </div>
        </div>
      </div>
    </div>
  );
}
