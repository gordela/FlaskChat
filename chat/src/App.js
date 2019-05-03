import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <React.Fragment>
      <ul class="list-unstyled" id="messages" />
      <div className="input-group mb-3">
        <input class="form-control" type="text" id="myMessage" />
        <div class="input-group-append">
          <button id="sendbutton" class="btn btn-outline-secondary">
            Send
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
