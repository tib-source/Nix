import React from "react";
import styled from "styled-components";
import { Color } from "../../Data/Color";
import Stories from "../Stories/Stories";
import Feed from "../Feed/Feed";
import MainPageHeader from "../MainPageHeader/MainPageHeader";

const Container = styled.div`
  flex: 0.825;
  width: 100%;
  height: 100vh;
  background-color: ${Color.main.background};
  border-top-left-radius: 2rem;
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  width: 100%;
  padding: 0 5rem;
  color: ${Color.login.form};
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: scroll;
`;

const MainContent = () => {
  return (
    <Container>
      <Content>
        <MainPageHeader />
        <Stories />
        <Feed />
      </Content>
    </Container>
  );
};

export default MainContent;
