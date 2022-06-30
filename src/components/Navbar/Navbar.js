import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <h2 className="m-0" onClick={() => localStorage.clear()}>
            GeekSynergy
          </h2>
        </a>
      </div>
    </nav>
  );
}
