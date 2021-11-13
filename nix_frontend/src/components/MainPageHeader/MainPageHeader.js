import React, { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { MdNotifications } from "react-icons/md";
import { FaRegPaperPlane } from "react-icons/fa";
import { BsPlusCircle } from "react-icons/bs";
import Input from "./../Utils/Input";
import { Color } from "../../Data/Color";

const Container = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  color: white;
  font-size: 1rem;
  padding: 0.75rem 1rem;
  border-radius: 0.6rem;
  border: none;
  outline: none;
  background: ${Color.main.gradient};
  cursor: pointer;
  transition: 300ms ease-in;
  &:active {
    transform: scale(0.96);
  }
  &:hover {
    opacity: 0.8;
    transform: scale(1.05);
  }
  &:hover:active {
    opacity: 1;
    transform: scale(0.96);
  }
`;
const SearchBarContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background-color: ${Color.main.search};
  padding: 0.75rem;
  border-radius: 0.6rem;
  font-size: 1.15rem;
`;
const SearchBar = styled.input`
  border: none;
  background: none;
  outline: none;
  font-size: 1.15rem;
  color: ${Color.main.text};
  &::focus {
    outline: none;
  }
`;

const Left = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
`;

const MainPageHeader = () => {
  const [search, setSearch] = useState("");
  return (
    <Container>
      <SearchBarContainer>
        <FaSearch />
        <SearchBar
          type="text"
          placeholder="Find users"
          name="search"
          id="search"
          autoComplete="off"
        />
      </SearchBarContainer>

      <Left>
        <MdNotifications />
        <FaRegPaperPlane />
        <Button>
          <BsPlusCircle /> Add photo
        </Button>
      </Left>
    </Container>
  );
};

export default MainPageHeader;
