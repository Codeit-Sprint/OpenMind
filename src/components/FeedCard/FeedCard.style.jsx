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

//질문 컨테이너
const QuestionContainer = styled.div`
  gap: 12px;
`;

// 포스팅 날짜
const Date = styled.span`
  ${S.CaptionMedium1};
  color: ${theme['grayscale-40']};
`;

const QuestionDiv = styled.div`
  ${S.BodyRegular3};

  word-break: break-all;
`;

// 구분 줄
const Line = styled.hr`
  color: ${(props) => props.theme['grayscale-30']};
  width: 100%;
  height: 1px;
  border: 1px solid;
`;

const LineUnderDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

// 리액션 버튼을 담기 위한 div
const ReactionDiv = styled.div`
  display: flex;
  gap: 32px;

  @media ${device.mobile} {
    gap: 0.8rem;
  }
`;

export {
  CardContainer,
  Header,
  Icon,
  QuestionContainer,
  Date,
  QuestionDiv,
  Line,
  LineUnderDiv,
  ReactionDiv,
};
