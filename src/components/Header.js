import React from "react";
import Nav from "./Nav";
import styled from 'styled-components'

const Wrapper = styled.header`
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding:30px 60px;
    h1{
        margin:0
    }
`
const Header = () => {
  return (
    <Wrapper>
      <h1>Fruit Emporium</h1>
      <Nav />
    </Wrapper>
  );
};

export default Header;
