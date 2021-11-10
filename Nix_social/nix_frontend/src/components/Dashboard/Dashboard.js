import React from "react";
import { logout } from "../Login/LoginActions";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import styled from "styled-components";
import PropTypes from "prop-types";
import NIX_LOGO from "./../../Images/Brand/Nix-Logo.png";
import { withRouter } from "react-router";

const Header = styled.header`
  display: flex;
  padding: 2rem;
  justify-content: space-between;
  align-items: center;
  background: tomato;
  img {
    width: 100%;
    object-fit: contain;
  }
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
        <LOGO className="logo">
          <img src={NIX_LOGO} alt="Company Logo" />
        </LOGO>
        <TaskBar />
        <Links className="links">
          <Button onClick={onLogout}>Log Out</Button>
        </Links>
      </Header>
    </div>
  );
};

Dashboard.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  console.log(state, "asfdas");
  return {
    auth: state.auth,
  };
};
export default connect(mapStateToProps, { logout })(withRouter(Dashboard));
