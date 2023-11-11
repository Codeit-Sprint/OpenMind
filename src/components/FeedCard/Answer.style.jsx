import styled from 'styled-components';
import theme from '../../styles/theme';
import * as S from '../../styles/typography';
import { device } from '../../styles/mediaQuery';
// 프로필과 텍스트를 담는 섹션
const MainSection = styled.section`
  display: flex;
  width: 100%;
  height: min-content;
  flex-direction: row;
  gap: 12px;
`;

// 사용자 이름과 텍스트를 포함하는 섹션
const ProfileSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
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
  ${S.BodyBold2};
  color: ${theme['grayscale-60']};
`;

const AnswerDiv = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
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

// 포스팅 날짜
const Date = styled.span`
  ${S.CaptionMedium1};
  color: ${theme['grayscale-40']};
`;

// 포스트 텍스트
const Post = styled.p`
  ${S.BodyRegular3};
  color: ${(props) =>
    props.status === '답변거절'
      ? props.theme['red-50']
      : props.theme['grayscale-50']};
`;

export {
  MainSection,
  AnswerDiv,
  AnswerButton,
  InputSection,
  Date,
  Post,
  Profile,
  ProfileSection,
  UserName,
};
