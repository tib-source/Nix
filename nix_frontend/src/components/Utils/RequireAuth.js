import { push } from "connected-react-router";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const requireAuth = (Component) => {
  const AuthenticatedComponent = (props) => {
    const checkAuth = () => {
      if (!props.isAuthenticated) {
        const redirectAfterLogin = props.location.pathname;
        props.dispatch(push(`/login?next=${redirectAfterLogin}`));
      }
    };

    useEffect(checkAuth, [props]);

    return <div>{props.isAuthenticated && <Component {...props} />}</div>;
  };

  AuthenticatedComponent.propType = {
    isAuthenticated: PropTypes.bool.isRequired,
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }).isRequired,
    dispatch: PropTypes.func.isRequired,
  };

  const mapStateToProps = (state) => {
    return {
      isAuthenticated: state.auth.isAuthenticated,
      token: state.auth.token,
    };
  };

  return connect(mapStateToProps)(AuthenticatedComponent);
};

export default requireAuth;
