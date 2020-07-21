import React from "react";
import styled from 'styled-components'

const Wrapper = styled.main`
    padding:30px 60px;
`

const Page = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Page