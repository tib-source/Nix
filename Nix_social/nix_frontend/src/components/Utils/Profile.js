import React from "react";
import styled from "styled-components";
import { Color } from "../../Data/Color";

const Img = styled.img`
  width: ${({ onfeed }) => (onfeed === true ? "100%" : "auto")};
  aspect-ratio: 1;
  max-height: 120px;
  object-fit: cover;
  transition: transform 400ms;
  border-radius: 50%;
  padding: 5px;
  border: ${({ story }) =>
    story === true ? `2px solid ${Color.main.story}` : "none"};
  cursor: pointer;
`;
const Profile = ({ story, src, onFeed }) => {
  return (
    <Img onfeed={onFeed} story={story} src={src} alt="user profile picture" />
  );
};

export default Profile;
