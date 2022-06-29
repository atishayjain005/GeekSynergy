import React from "react";

export default function SignUpFrom() {
  return (
    <div className="container">
    div.my-3
      <div className="mb-3 row">
        <label for="inputName" className="col-sm-2 col-form-label">
          Name
        </label>
        <div className="col-sm-10">
          <input type="text" className="form-control" id="inputName" />
        </div>
      </div>
      <div className="mb-3 row">
        <label for="inputNumber" className="col-sm-2 col-form-label">
          Phone Number
        </label>
        <div className="col-sm-10">
          <input type="number" className="form-control" id="inputNumber" />
        </div>
      </div>
      <div className="mb-3 row">
        <label for="inputEmail" className="col-sm-2 col-form-label">
          Email
        </label>
        <div className="col-sm-10">
          <input type="email" className="form-control" id="inputEmail" />
        </div>
      </div>
      <div className="mb-3 row">
        <label for="inputPassword" className="col-sm-2 col-form-label">
          Password
        </label>
        <div className="col-sm-10">
          <input type="password" className="form-control" id="inputPassword" />
        </div>
      </div>
      <div className="mb-3 row">
        <label for="selectProfession" className="col-sm-2 col-form-label">
          Profession
        </label>
        <div className="col-sm-10">
          <select class="form-select" id="selectProfession" aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option value="1">Actor</option>
            <option value="2">Director</option>
          </select>
        </div>
      </div>
    </div>
  );
}
