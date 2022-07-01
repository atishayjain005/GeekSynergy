import React from "react";
import { useNavigate } from "react-router-dom";

var initialState = {
  userName: "",
  phoneNumber: "",
  email: "",
  password: "",
  profession: "",
};

const successMsg = (
  <div className="text-center my-3">
    <h6 className="alert alert-success">Form successfully Submitted</h6>
    <p>Redirecting you to login page</p>
  </div>
);

export default function SignUpFrom() {
  const navigate = useNavigate();
  const [state, setState] = React.useState(initialState);
  const [msg, setMsg] = React.useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setState({
      ...state,
      [e.target.name]: value,
    });
  };

  const pushData = () => {
    if (state ===initialState ) {
      alert("Please fill all the fields");
    } else {
      const data = JSON.stringify(state);
      localStorage.setItem("data", data);
      setState(initialState);
      setMsg(true);
      return setTimeout(() => {
        navigate("./login");
      }, 2000);
    }
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-center align-items-center">
        <div className="my-4 rounded-3 w-75 border border-1">
          <h1 className="m-4 rounded-3 p-4 bg-dark text-light text-center">
            Sign Up form
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
                  value={state.userName}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="inputNumber" className="col-md-2 col-form-label">
                Ph.no.
              </label>
              <div className="col-md-10">
                <input
                  type="number"
                  name="phoneNumber"
                  className="form-control"
                  id="inputNumber"
                  placeholder="Enter Phone Number"
                  value={state.phoneNumber}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="inputEmail" className="col-md-2 col-form-label">
                Email
              </label>
              <div className="col-md-10">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter Email"
                  id="inputEmail"
                  value={state.email}
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
                  value={state.password}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label
                htmlFor="selectProfession"
                className="col-md-2 col-form-label"
              >
                Profession
              </label>
              <div className="col-md-10">
                <select
                  name="profession"
                  className="form-select"
                  id="selectProfession"
                  aria-label="Default select example"
                  value={state.profession}
                  onChange={handleChange}
                >
                  <option defaultValue={state.profession}>
                    Select Profession
                  </option>
                  <option value="Actor">Actor</option>
                  <option value="Director">Director</option>
                </select>
              </div>
            </div>
            <div className="d-flex justify-content-end gap-3">
              <button className="btn btn-primary" onClick={pushData}>
                Submit
              </button>
              <button
                className="btn btn-danger"
                onClick={() => setState(initialState)}
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
