import styled from 'styled-components';
import { device } from '../../utils/devicesMediaQueries';

export const Wrapper = styled.div`
  width: 100%;
  background-color: #FFF;
  padding: 16px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;

  transition: all 0.2s;

  @media ${device.lg} {
    padding: 32px;
    border: 1px solid transparent;

    &:hover{
      transform: scale(1.1);
      border-color: var(--secondary);
    }
  }
`;

export const Image = styled.img`
  width: 100%;
  aspect-ratio: 1/1;
  margin-bottom: 24px;
`;

export const Title = styled.strong`
  text-align: center;
  margin-bottom: 16px;
  flex: 1;
`;

export const Button = styled.button`
  width: 3rem;
  height: 3rem;
  background-color: var(--secondary);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3rem;
  color: var(--white);
  border: none;
  outline-color: var(--secondary);

  transition: all 0.2s;

  span {
    max-width: 0;
    font-size: 0.75rem;
    white-space: nowrap;
    opacity: 0;
    overflow: hidden;
    transition: all 0.2s;
  }

  @media ${device.md} {
    &:hover {
      width: 100%;

      span {
        max-width: 8rem;
        opacity: 1;
        margin-left: 0.5rem;
      }
    }

    span {
      font-size: 1rem;
    }
  }
`;
