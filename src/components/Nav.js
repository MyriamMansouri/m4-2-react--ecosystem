import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.nav`
  a {
    padding: 5px 0;
    margin: 0 20px;
    position: relative;
    font-weight:bold;
  }
  a:last-child {
    margin-right: 0;
  }
  a:hover {
    color: deeppink;
  }
  a:before {
    content: "";
    position: absolute;
    width: 0;
    height: 3px;
    bottom: 0;
    left: 0;
    background-color:deeppink;
    transition: width 0.2s
  }
  a:hover:before {
    width: 70%;
  }
`;
const Nav = () => {
  return (
    <Wrapper>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </Wrapper>
  );
};

export default Nav;
