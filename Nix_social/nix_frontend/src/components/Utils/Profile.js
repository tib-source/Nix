import React from "react";
import styled from "styled-components";
import { Color } from "../../Data/Color";

const Img = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 50%;
  padding: 10px;
  border: ${({ story }) =>
    story === true ? `2px solid ${Color.main.story}` : "none"};
  cursor: pointer;
`;
const Profile = ({ story, src }) => {
  return <Img story={story} src={src} alt="user profile picture" />;
};

export default Profile;
