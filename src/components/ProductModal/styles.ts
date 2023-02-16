import styled, { keyframes } from 'styled-components';

const fadein = keyframes`
  from {
		opacity:0;
	}
	to {
		opacity:1;
	}
`;

const scale = keyframes`
  from {
    transform: scale(0);
	}
	to {
    transform: scale(1);
	}
`;

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4.5px);
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;

  animation: ${fadein} 0.1s;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 480px;
  background-color: var(--white);
  border-radius: 16px;
  padding: 32px;
  position: relative;
  animation: ${fadein} 0.4s, ${scale} 0.4s;
`;

export const CloseButton = styled.button`
  border: none;
  background-color: var(--red);
  font-size: 16px;
  color: var(--white);
  padding: 8px;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: -12px;
  right: -12px;
`;

export const Image = styled.img`
  width: 100%;
  aspect-ratio: 1/1;
  margin-bottom: 24px;
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 16px;
  font-size: 1.5rem;
`;

export const Description = styled.p`
  text-align: center;
  line-height: 1.5rem;
  margin-bottom: 16px;
`;

export const Category = styled.p`
  text-align: center;

  span {
    font-weight: 500;
    margin-right: 0.5rem;
  }
`;
