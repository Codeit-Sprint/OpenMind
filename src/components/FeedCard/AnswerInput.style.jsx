import styled from 'styled-components';
import theme from '../../styles/theme';
import { device } from '../../styles/mediaQuery';
//import * as S from '../../../styles/typography';
const CardContainer = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 684px;
  height: min-content;
  padding: 32px;
  gap: 32px;
`;

// 프로필과 텍스트를 담는 섹션
const MainSection = styled.section`
  display: flex;
  width: min-content;
  height: min-content;
  flex-direction: row;
  gap: 12px;
`;

const AnswerDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

// 인풋 텍스트와 버튼을 담는 섹션
const InputSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InputField = styled.input`
  width: 560px;
  height: 186px;
  placeholder: '답변을 작성하세요.';
  background-color: ${theme['grayscale-20']};
  @media ${device.tablet} {
    width: 548px;
  }
  @media ${device.mobile} {
    width: 203px;
  }
`;

const AnswerButton = styled.button`
  width: 100%;
  height: 46px;
  border-radius: 8px;
  background-color: ${theme['brown-30']};
  color: ${theme['grayscale-10']};
`;
export {
  InputField,
  CardContainer,
  MainSection,
  AnswerDiv,
  AnswerButton,
  InputSection,
};
