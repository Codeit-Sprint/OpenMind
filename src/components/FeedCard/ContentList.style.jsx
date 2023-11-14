// 기존 Feed/Question.style.jsx 파일입니다.

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
    margin: 0 auto;
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

export { Container, Info, Text };
