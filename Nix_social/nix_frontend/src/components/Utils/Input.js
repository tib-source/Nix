import React from "react";
import styled from "styled-components";
import { Color } from "../../Data/Color";
const StyledInput = styled.input`
  padding: 0.5rem 1rem;
  width: 100%;
  border: none;
  outline: none;
  border-radius: 6px;
  background: ${Color.login.background};
  border: ${({ error }) =>
    error ? `2px solid ${Color.login.error}` : `1px solid ${Color.login.form}`};
  &:focus {
    border: 1px solid ${Color.login.text};
  }
`;

const Label = styled.label`
  text-align: left;
  width: 100%;
`;

const titleCase = (string) => {
  const items = string.split(" ");
  const returnArr = [];
  for (let item of items) {
    item = item.split("");
    const first = item.shift().toUpperCase();
    const lower = item.join("").toLowerCase();
    returnArr.push(first + lower);
  }
  return returnArr.join(" ");
};
const Error = styled.div`
  font-size: 1rem;
  color: ${Color.login.error};
`;
const Input = ({ type, label, state, setState, error }) => {
  const handleChange = (event) => {
    setState(event.target.value);
  };
  return (
    <div>
      <Label htmlFor={label}>{titleCase(label)}</Label>
      <StyledInput
        onChange={handleChange}
        type={type}
        name={label}
        id={label}
        value={state}
        error={error}
      />
      <Error>{error}</Error>
    </div>
  );
};

export default Input;
