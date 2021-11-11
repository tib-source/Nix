import React from "react";
import styled from "styled-components";
import LOGO from "./../../../Images/Brand/Nix-Logo.png";
import UserInfo from "./UserInfo";
import PROFILE_PIC from "./../../../Images/default_profile_pic.jpg";
import { Color } from "./../../Data/Color";
import Profile from "../../Utils/Profile";

const TaskbarContainer = styled.div`
  width: 300px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${Color.main.taskbar};
  flex-direction: column;
  color: white;
`;

const ProfileInfo = styled.div`
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
  text-align: center;
  letter-spacing: 10px;
`;

const User = styled.div`
  display: flex;
  gap: 1.25rem;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;

const Fullname = styled.div`
  font-weight: 700;
  font-size: 1.25rem;
  margin-bottom: 0.25rem;
`;
const Username = styled.div`
  font-weight: 400;
  font-size: 0.8rem;
  opacity: 0.7;
`;

const Taskbar = (props) => {
  const user = {
    fullname: "Lebron Smith",
    username: "leeboySmith",
    data: {
      posts: 312,
      followers: 1334300,
      following: 3241,
    },
    profilePic: PROFILE_PIC,
    story: true,
  };

  return (
    <TaskbarContainer>
      {/* logo  */}
      <Logo>
        <h1>NIX</h1>
      </Logo>
      {/* User infromation */}
      <ProfileInfo className="profile">
        <User className="User">
          <Profile src={user.profilePic} story={user.story} />
          <div>
            <Fullname>{user.fullname}</Fullname>
            <Username>@{user.username}</Username>
          </div>
        </User>
        <Info className="User-details">
          <UserInfo label="Posts" ammount={user.data.posts} />
          <UserInfo label="Followers" ammount={user.data.posts} />
          <UserInfo label="Following" ammount={user.data.posts} />
        </Info>
      </ProfileInfo>
      {/* navigation links */}
    </TaskbarContainer>
  );
};

export default Taskbar;
