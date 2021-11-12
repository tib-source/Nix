import styled, { css } from "styled-components";
import { Color } from "../../Data/Color";
import { Link } from "react-router-dom";

export const LoginContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${Color.login.background};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginWrapper = styled.div`
  width: min(90vw, 400px);
  height: 700px;
  background-color: ${Color.login.form};
  border-radius: 0.5rem;
  color: ${Color.login.text};
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Icon = styled.div`
  width: 30%;
  height: fit-content;

  img {
    width: 100%;
    object-fit: contain;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 60%;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;

  label {
    text-align: left;
    width: 100%;
  }
`;

export const InputCss = css`
  padding: 0.5rem 1rem;
  width: 100%;
  border: none;
  outline: none;
  border-radius: 6px;
`;

export const Button = styled.button`
  ${InputCss}
  background: ${Color.login.button};
  font-weight: 700;
  cursor: pointer;
  color: ${Color.login.form};
`;

export const Line = styled.hr`
  width: 60%;
  height: 3px;
  background: black;
  border-radius: 10px;
  opacity: 0.5;
  margin: 2rem 0;
`;

export const Forgot = styled(Link)`
  margin: 1rem 0rem;
  text-decoration: none;
`;

export const NewUser = styled.div`
  margin: 2rem 0;
  padding: 0.5rem;
  width: 60%;
  border: 2px solid ${Color.login.text};
  text-align: center;
  border-radius: 3px;
  opacity: 0.6;
  cursor: pointer;
  transition: 0.4s;
  &:hover {
    opacity: 1;
  }
`;
