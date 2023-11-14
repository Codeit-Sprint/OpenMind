import styled from 'styled-components';
import theme from '../../styles/theme';
import { device } from '../../styles/mediaQuery';
import * as S from '../../styles/typography';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: min-content;
  gap: 32px;
`;

// 프로필과 텍스트를 담는 섹션
const MainSection = styled.section`
  display: flex;
  width: 100%;
  height: min-content;
  flex-direction: row;
  gap: 12px;

  border: 1px solid blue;
`;

// 프로필 이미지
const Profile = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 48px;
  @media ${device.mobile} {
    width: 32px;
    height: 32px;
    border-radius: 32px;
  }
`;

// 사용자 이름
const UserName = styled.span`
  ${S.CaptionBold1};
  color: ${theme['grayscale-60']};
`;

const AnswerDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

// 인풋 텍스트와 버튼을 담는 섹션
const InputSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AnswerButton = styled.button`
  width: 100%;
  height: 46px;
  border-radius: 8px;
  background-color: ${theme['brown-30']};
  color: ${theme['grayscale-10']};
`;

const Send = styled.div`
  display: flex;
  width: 100%;
  margin-top: 0.8rem;
  padding: 12px 24px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  border-radius: 8px;
  cursor: pointer;
  background-color: ${(props) =>
    props.$hasContent ? props.theme['brown-40'] : props.theme['brown-30']};
  color: ${(props) => props.theme['grayscale-10']};
  ${S.BodyRegular3};

  &:hover {
    background-color: ${(props) => props.theme['brown-40']};
  }
`;

export {
  Profile,
  UserName,
  CardContainer,
  MainSection,
  AnswerDiv,
  AnswerButton,
  InputSection,
  Send,
};
