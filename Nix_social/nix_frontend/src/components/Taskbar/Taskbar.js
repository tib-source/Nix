import React from "react";
import styled from "styled-components";
import LOGO from "./../../Images/Brand/Nix-Logo.png";
import UserInfo from "./UserInfo";
import PROFILE_PIC from "./../../Images/default_profile_pic.jpg";
import { Color } from "../../Data/Color";
import Profile from "../Utils/Profile";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { FiSettings } from "react-icons/fi";
import { FaRegPaperPlane } from "react-icons/fa";
import { BsBell } from "react-icons/bs";
import { MdLogout, MdWebStories, MdTurnedInNot } from "react-icons/md";
import { IoStatsChartOutline } from "react-icons/io5";
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
  gap: 1.5rem;
`;

const ProfileInfo = styled.div`
  width: 100%;
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

  hr {
    height: 80%;
    width: 2px;
    opacity: 0.15;
    border-radius: 10px;
    background: #f0f8ff34;
    border: none;
  }
`;

const Logo = styled.div`
  text-align: center;
  letter-spacing: 10px;
  h1 {
    padding: 0;
    margin: 0;
  }
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

const NavItem = styled(Link)`
  text-decoration: none;
  color: white;
  padding: 0.75rem;
  width: 100%;
  display: flex;
  gap: 1rem;
  align-items: center;
  /* background: ivory; */
  transition: 300ms ease-in-out;
  &:hover {
    font-weight: 500;
    background-color: #f0f8ff34;
    border-left: 3px solid ivory;
  }
`;

const NavigationLinks = styled.div`
  display: grid;
  width: 100%;
  padding: 0 0 0 1rem;

  hr {
    width: 80%;
    height: 2px;
    opacity: 0.15;
    border-radius: 10px;
    background: #f0f8ff34;
    border: none;
  }
`;

const NavText = styled.div``;

const Taskbar = ({ onLogout }) => {
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
          <hr />
          <UserInfo label="Followers" ammount={user.data.posts} />
          <hr />
          <UserInfo label="Following" ammount={user.data.posts} />
        </Info>
      </ProfileInfo>
      {/* navigation links */}
      <NavigationLinks>
        <NavItem to={"/"}>
          <MdWebStories /> <NavText>Feed</NavText>
        </NavItem>
        <NavItem to={"/"}>
          <FaRegPaperPlane /> <NavText>Direct</NavText>
        </NavItem>
        <NavItem to={"/"}>
          <FiSearch /> <NavText>Explore</NavText>
        </NavItem>
        <NavItem to={"/"}>
          <MdTurnedInNot /> <NavText>Favourites</NavText>
        </NavItem>
        <NavItem to={"/"}>
          <IoStatsChartOutline /> <NavText>Stats</NavText>
        </NavItem>
        <NavItem to="/">
          <FiSettings /> <NavText>Settings</NavText>
        </NavItem>
        <hr />
        <NavItem to={"#"} onClick={onLogout}>
          <MdLogout /> <NavText>Logout</NavText>
        </NavItem>
      </NavigationLinks>
    </TaskbarContainer>
  );
};

export default Taskbar;
