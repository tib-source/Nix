import React, { useEffect, useState } from "react";
import Profile from "../Utils/Profile";
import styled from "styled-components";
import { mock_data } from "../../Data/mock_user_data";
import MOCK_PIC from "../../Images/default_profile_pic.jpg";
import { BsPlayCircle } from "react-icons/bs";
import axios from "axios";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;
`;

const SectionTitle = styled.div`
  font-size: 2.15rem;
  font-weight: 300;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-size: 1rem;
  font-weight: 300;
  cursor: pointer;
  .left__large {
    font-size: 2rem;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  overflow-y: hidden;
  overflow-x: scroll;
  margin-top: 1rem;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const Stories = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=20")
      .then((response) => {
        return response.data.results;
      })
      .then((data) => {
        data.sort((a, b) => {
          return a.gender == "male" && b.gender == "male"
            ? 0
            : a.gender === "male"
            ? -1
            : 1;
        });
        setPeople(data);
      });
  }, []);

  return (
    <Container>
      <Title>
        <SectionTitle>Stories</SectionTitle>
        <Left>
          <BsPlayCircle className="left__large" />
          Watch all
        </Left>
      </Title>
      <Wrapper>
        {people.map((person, index) => {
          return (
            <Profile
              onFeed={true}
              story={person.gender === "male" ? true : false}
              src={person.picture.large}
              key={index}
            />
          );
        })}
      </Wrapper>
    </Container>
  );
};

export default Stories;
