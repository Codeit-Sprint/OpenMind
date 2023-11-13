import styled from 'styled-components';
import theme from '../../styles/theme';
import { device } from '../../styles/mediaQuery';
import * as S from '../../styles/typography';

//가변적 width: media query 적용, height은 min-content 적용

// 카드 컨테이너
const CardContainer = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 684px;
  height: min-content;
  padding: 32px;
  border-radius: 16px;
  gap: 32px;
  background-color: ${theme['grayscale-10']};
  box-shadow: ${theme['shadow-1pt']};

  vertical-align: center;
  p {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row; /*수평 정렬*/
    align-items: center;
  }

  &:text {
    color: ${theme['grayscale-40']};
  }
  @media ${device.tablet} {
    width: 672px;
  }
  @media ${device.mobile} {
    width: 100%;
    width: 295px;
  }
`;
// 답변완료 여부와 케밥 아이콘을 담는 섹션
const Header = styled.section`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

//케밥 아이콘
const Icon = styled.img`
  width: 26px;
  height: 26px;
  cursor: pointer;
`;

// 프로필과 텍스트를 담는 섹션
const MainSection = styled.section`
  display: flex;
  gap: 12px;
`;
// 프로필 이미지
const StyledProfile = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 48px;

  @media ${device.mobile} {
    width: 32px;
    height: 32px;
    border-radius: 32px;
  }
`;

// 사용자 이름과 텍스트를 포함하는 섹션
const ProfileSection = styled.section``;

// 사용자 이름
const UserName = styled.span`
  ${S.BodyBold2};
  color: ${theme['grayscale-60']};
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

// 구분 줄
const Line = styled.hr`
  color: ${(props) => props.theme['grayscale-30']};
  width: 100%;
  height: 1px;
  border: 1px solid;
`;

//질문 컨테이너
const QuestionContainer = styled.div`
  gap: 12px;
`;

const QuestionDiv = styled.div`
  ${S.BodyRegular3};

  word-break: break-all;
`;

// 프로필과 텍스트를 구분하기 위한 텍스트 전용
const AnswerDiv = styled.div``;

// 리액션 버튼을 담기 위한 div
const ReactionDiv = styled.div`
  display: flex;
  gap: 32px;
`;

const LineUnderDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export {
  CardContainer,
  Header,
  Icon,
  MainSection,
  StyledProfile,
  ProfileSection,
  UserName,
  Date,
  Post,
  Line,
  QuestionDiv,
  AnswerDiv,
  ReactionDiv,
  QuestionContainer,
  LineUnderDiv,
};
