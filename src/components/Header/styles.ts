import styled from 'styled-components';

export const Wrapper = styled.header`
  background-color: var(--secondary);
  padding-top: 64px;
  position: relative;
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 32px;
  color: var(--white);
`;

export const Shape = styled.div`
  height: 32px;
  background-color: var(--background);
  border-top-left-radius: 100%;
  border-top-right-radius: 100%;
`;
