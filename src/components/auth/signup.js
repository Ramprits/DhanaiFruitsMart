import React, { Fragment } from "react";
import PropTypes from "prop-types";

const Signup = props => {
  return (
    <Fragment>
      <h2>Welcome to signup</h2>
    </Fragment>
  );
};

Signup.propTypes = {
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
};

export default Signup;
