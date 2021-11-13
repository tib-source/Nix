import React from "react";
import styled from "styled-components";

const Number = styled.div`
  font-weight: 600;
  font-size: 1rem;
  color: white;
`;

const Label = styled.div`
  font-size: 0.8rem;
  opacity: 0.5;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-direction: column;
  flex: 1;
`;

const UserInfo = ({ label, ammount }) => {
  // use this function once a number greated than 1000 is provided
  // it will make the width of the component stay small
  // also people like seeing number with this shit lol
  const suffixifyNumber = (ammount) => {
    const suffix_array = ["", "k", "m"];
    ammount = parseInt(ammount);
    const tier = Math.floor(Math.log10(Math.abs(ammount)) / 3) | 0;

    if (tier === 0) {
      return ammount;
    }
    // the tier variable calculated number of 0's in a number => 1000 => 3
    // we need to see how many bundles of three 0s are there in a number so we divide by three
    const suffix = suffix_array[tier];

    const thousands = Math.pow(10, tier * 3);

    const displayNumber = ammount / thousands;

    return displayNumber.toFixed(1) + suffix;
  };

  return (
    <Container>
      <Number className="num">{suffixifyNumber(ammount)}</Number>
      <Label className="label">{label}</Label>
    </Container>
  );
};

export default UserInfo;
