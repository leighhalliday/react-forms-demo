import React from "react";

const Error = ({ message }) =>
  message ? (
    <div className="form-message invalid">{message}</div>
  ) : (
    <div className="form-message valid">all good</div>
  );

export default Error;
