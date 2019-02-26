import React, { Fragment } from "react";
import PropTypes from "prop-types";

const Signin = props => {
  return (
    <Fragment>
      <h2>Welcome to login</h2>
    </Fragment>
  );
};

Signin.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
};

export default Signin;
