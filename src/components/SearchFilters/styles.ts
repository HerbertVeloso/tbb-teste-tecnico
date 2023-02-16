import styled from 'styled-components';
import { device } from '../../utils/devicesMediaQueries';

export const Wrapper = styled.aside``;

export const FiltersHeader = styled.header`
  padding: 16px 0 ;
  border-bottom: 1px solid var(--primary);
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 16px;

  @media ${device.lg} {
    margin-bottom: 32px;
  }
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  display: flex;
  align-items: center;

  span {
    margin-left: 0.5rem;
    font-size: 1rem;
    color: var(--text-color);
    font-weight: 300;
  }

  @media ${device.lg} {
    font-size: 1rem;

    span {
      font-size: 0.75rem;
    }
  }
`;

type ButtonProps = {
  isOpen: boolean;
}

export const Button = styled.button<ButtonProps>`
  background-color: ${({ isOpen }) => isOpen ? 'var(--red)' : 'var(--secondary)'};
  border: none;
  padding: 0.75rem;
  border-radius: 0.5rem;
  color: var(--white);
  font-size: 1.25rem;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: all 0.2s;

  @media ${device.lg} {
    display: none;
  }
`;

type ListProps = {
  isOpen: boolean;
}

export const List = styled.ul<ListProps>`
  list-style: none;
  overflow: hidden;
  max-height: ${({ isOpen }) => isOpen ? '20rem' : '0'};
  margin: 0 16px;
  margin-bottom: ${({ isOpen }) => isOpen ? '16px' : '0'};

  transition: all 0.2s;

  li + li {
    margin-top: 16px;
  }

  @media ${device.lg} {
    max-height: fit-content;
    margin: 0;
  }
`;
