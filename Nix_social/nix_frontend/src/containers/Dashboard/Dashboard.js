import React from "react";
import { logout } from "../../components/Login/LoginActions";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import styled from "styled-components";
import PropTypes from "prop-types";
import NIX_LOGO from "./../../Images/Brand/Nix-Logo.png";
import { withRouter } from "react-router";
import Taskbar from "../../components/Taskbar/Taskbar";

const Header = styled.header`
  display: flex;
  padding: 2rem;
  justify-content: space-between;
  align-items: center;
  background: tomato;
`;

const LOGO = styled.div`
  margin-left: 3rem;
`;

const Links = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  padding: 1rem;
  color: black;
`;

const Dashboard = (props) => {
  const onLogout = (event) => {
    event.preventDefault();
    props.logout();
  };

  console.log(props);
  return (
    <div>
      <Header>
        <Taskbar onLogout={onLogout} />
      </Header>
    </div>
  );
};

Dashboard.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};
export default connect(mapStateToProps, { logout })(withRouter(Dashboard));
