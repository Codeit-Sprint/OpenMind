import styled from 'styled-components';
import { BodyBold1 } from '../../styles/typography';
import { device } from '../../styles/mediaQuery';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  width: 716px;
  min-height: 330px;
  padding: 16px 24px;
  gap: 8px;
  flex-shrink: 0;
  margin: 0 auto;

  border-radius: 16px;
  border: 1px solid var(--brown-20, #e4d5c9);
  background: var(--brown-10, #f5f1ee);
  @media ${device.mobile} {
    margin: 0 2.4rem;
    width: 32.7rem;
    /* width: 100%; */
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: cente;
  gap: 8px;

  margin-bottom: 70px;
`;

const Text = styled.div`
  color: var(--brown-40, #542f1a);
  font-feature-settings: 'clig' off, 'liga' off;
  ${BodyBold1}
`;

const FloatingDeleteButton = styled.div`
  position: absolute;
  top: 35.5rem;
  right: 41rem;
  cursor: pointer;
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
`;

export { Container, Text, Info, FloatingDeleteButton };
