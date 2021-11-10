import React from "react";
import styled from "styled-components";
import LOGO from "./../../../Images/Brand/Nix-Logo.png";
import UserInfo from "./UserInfo";

const TaskbarContainer = styled.div`
  width: 300px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  background-color: hsl(226deg 14% 18%);
  flex-direction: column;
  color: white;
`;

const Profile = styled.div`
  width: 100%;
  padding: 0 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
`;

const Info = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  width: 100px;
  text-align: center;
  letter-spacing: 10px;
  img {
    width: 100%;
    object-fit: contain;
  }
`;
const Taskbar = (props) => {
  return (
    <TaskbarContainer>
      {/* logo  */}
      <Logo>
        <h1>NIX</h1>
      </Logo>
      {/* User infromation */}
      <Profile className="profile">
        {/* profile picture */}
        <div className="User"></div>
        <Info className="User-details">
          <UserInfo label="Posts" ammount={300} />
          <UserInfo label="Followers" ammount={1334000} />
          <UserInfo label="Following" ammount={2123} />
        </Info>
        {/* name */}
        {/* username */}

        {/* followers and post information */}
      </Profile>
      {/* navigation links */}
    </TaskbarContainer>
  );
};

export default Taskbar;
