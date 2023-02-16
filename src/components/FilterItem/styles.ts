import styled, { keyframes } from 'styled-components';

const checkBefore = keyframes`
  0% {
    width: 0px;
    top: 0.75rem;
    transform: rotate(45deg);
  }
  100% {
    width: 0.5rem;
    top: 0.75rem;
    transform: rotate(45deg);
  }
`;

const cheackAfter = keyframes`
  0% {
      width: 0px;
    top: 0.75rem;
    transform: rotate(-45deg);
  }
  100% {
    width: 0.85rem;
    top: 0.75rem;
    transform: rotate(-45deg);
  }
`;

const firework = keyframes`
  0% {
    opacity: 1;
    box-shadow: 0 0 0 -2px var(--primary), 0 0 0 -2px var(--primary), 0 0 0 -2px var(--primary), 0 0 0 -2px var(--primary), 0 0 0 -2px var(--primary), 0 0 0 -2px var(--primary);
  }
  30% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    box-shadow: 0 -15px 0 0px var(--primary), 14px -8px 0 0px var(--primary), 14px 8px 0 0px var(--primary), 0 15px 0 0px var(--primary), -14px 8px 0 0px var(--primary), -14px -8px 0 0px var(--primary);
  }
`;

export const Wrapper = styled.li`
  display: grid;
  grid-template-columns: 1.5rem 1fr;
  align-items: center;
  gap: 0.5rem;
`;

export const Label = styled.label`
  width: fit-content;
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;

  span {
    margin-left: 0.25rem;
    font-size: 0.75rem;
    display: flex;
    align-items: center;
  }

  &::before,
  &::after {
    content:"";
    position: absolute;
  }

  &::before {
    height: 2px;
    width: 0.6rem;
    left: -1.55rem;
    background: var(--secondary);
    border-radius: 2px;
    transition: all .2s ease;
  }

  &:after {
    height: 0.25rem;
    width: 0.25rem;
    top: 0.45rem;
    left: -1.4rem;
    border-radius: 50%;
  }
`;

export const Checkbox = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  height: 1.5rem;
  width: 1.5rem;
  background: var(--white);
  border-radius: 0.25rem;
  border: 1px solid var(--secondary);
  position: relative;
  outline: none;
  cursor: pointer;

  transition: all 0.2s ease;

  &::before,
  &::after {
    content:"";
    position: absolute;
    height: 0.25rem;
    top: auto;
    background: var(--primary);
    border-radius: 0.25rem;
  }

  &::before {
    width: 0px;
    right: 60%;
    transform-origin: right bottom;
  }

  &::after {
    width: 0px;
    left: 40%;
    transform-origin: left bottom;
  }

  &:checked {
  border-color: var(--primary);

    &::before {
      animation: ${checkBefore} 0.4s ease forwards;
    }

    &::after {
      animation: ${cheackAfter} 0.4s ease forwards;
    }

    & + label {
      &::before {
        background: transparent;
      }
      &::after {
        animation: ${firework} 0.5s ease forwards .1s;
      }
    }
  }
`;
