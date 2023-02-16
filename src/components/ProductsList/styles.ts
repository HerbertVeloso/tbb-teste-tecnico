import styled from 'styled-components';
import { device } from '../../utils/devicesMediaQueries';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const Summary = styled.p`
  @media ${device.lg} {
    padding: 16px 0;
    border-bottom: 1px solid var(--primary);
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;

  @media ${device.md} {
    gap: 32px;
  }

  @media ${device.lg} {
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  }
`;
