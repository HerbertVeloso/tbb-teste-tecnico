import styled from 'styled-components';

export const Wrapper = styled.form`
  grid-column-start: 1;
  grid-column-end: 3;
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  display: flex;
  align-items: center;
  background-color: var(--white);
  border-radius: 4px;
  border: 1px solid var(--primary);

  svg {
    font-size: 2rem;
    margin: 0 8px;
    color: var(--text-color);
  }

  &:focus-within {
    outline: 2px solid var(--primary);
  }

`;

export const Input = styled.input`
  flex: 1;
  height: 2.75rem;
  padding: 0 12px;
  font-size: 1.25rem;
  background-color: transparent;
  border: none;
  outline: none;
`;
