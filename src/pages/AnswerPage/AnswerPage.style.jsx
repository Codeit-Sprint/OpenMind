import styled from 'styled-components';
import { device } from '../../styles/mediaQuery';

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 71.6rem;
  margin: 0 auto;

  @media ${device.mobile} {
    width: 32.7rem;
  }
`;

const FloatingDeleteButton = styled.div`
  cursor: pointer;

  margin: 0 auto;
  position: absolute;
  top: 35.4rem;

  display: flex;
  width: 100px;
  height: 35px;
  padding: 12px 24px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;

  border-radius: 200px;
  background: var(--brown-40, #542f1a);

  /* 3pt */
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  p {
    color: var(--grayscale-10, #fff);
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: Actor;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px; /* 166.667% */
  }

  @media ${device.mobile} {
    top: 32.2rem;
  }
`;

export { FloatingDeleteButton, ButtonWrapper };
