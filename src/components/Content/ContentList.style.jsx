// 기존 Feed/Question.style.jsx 파일입니다.

import styled from 'styled-components';
import { BodyBold1 } from '../../styles/typography';
import { device } from '../../styles/mediaQuery';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-content: space-between;
  align-items: center;

  min-height: 330px;
  padding: 1.6rem 2.4rem;
  gap: 8px;
  flex-shrink: 0;
  margin: 0 auto 14rem;

  border-radius: 16px;
  border: 1px solid var(--brown-20, #e4d5c9);
  background: var(--brown-10, #f5f1ee);

  @media ${device.pc} {
    width: 716px;
  }

  @media ${device.tablet} {
    width: 70.4rem;
  }

  @media ${device.mobile} {
    width: 32.7rem;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 1.6rem;
`;

const MsgImg = styled.img`
  margin-bottom: 6.5rem;
`;

const Text = styled.div`
  color: var(--brown-40, #542f1a);
  font-feature-settings: 'clig' off, 'liga' off;
  ${BodyBold1}
`;

export { Container, Info, MsgImg, Text };
