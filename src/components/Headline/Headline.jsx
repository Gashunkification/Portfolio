import React from 'react';
import styled from 'styled-components';

const HeadlineContainer = styled.div`
  width: 100%;
  min-height: 70px;
  padding: 12px;
  background: #fff;
  text-align: ${({ centered }) => (centered ? 'center' : 'left')};
`;

const H1 = styled.h1`
  font-size: 36px;
  font-weight: normal;
  margin: 0;
`;

const Headline = ({ children, centered }) => (
  <HeadlineContainer centered={centered}>
    <H1>{children}</H1>
  </HeadlineContainer>
);

export default Headline;
