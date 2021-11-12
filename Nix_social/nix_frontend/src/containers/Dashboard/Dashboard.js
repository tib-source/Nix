import React from "react";
import { logout } from "../Login/LoginActions";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import styled from "styled-components";
import PropTypes from "prop-types";
import NIX_LOGO from "./../../Images/Brand/Nix-Logo.png";
import { withRouter } from "react-router";
import Taskbar from "../../components/Taskbar/Taskbar";
import { Color } from "../../Data/Color";
import MainContent from "../../components/MainContent/MainContent";

const Container = styled.header`
  width: 100%;
  height: 100vh;
  background: ${Color.main.taskbar};
  display: flex;
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
    <Container>
      <Taskbar onLogout={onLogout} />
      <MainContent />
    </Container>
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
