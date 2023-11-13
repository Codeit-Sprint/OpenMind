import styled from 'styled-components';
import { device } from '../../styles/mediaQuery';
import theme from '../../styles/theme';
import { BodyRegular1 } from '../../styles/typography';

/*
TODO.
1. 닉네임 폰트 적용 >> H1, H2, H3
2. 헤더 이미지 꽉 차게
*/

const AnswerPageBox = styled.div`
  width: 100vm;
  height: 100vh;
  display: flex;
  padding-top: 100px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${theme['grayscale-20']};
`;
// 헤더 div : logo와 profile, header이미지를 포함
const HeaderDiv = styled.div`
  display: flex;
  flex-direction: row; /*수평 정렬*/
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 240px;
`;

// 헤더 이미지
const HeaderImage = styled.img`
  object-fit: cover;
  display: flex;
  position: relative;
  z-index: 1;
  width: 1200px;
  height: 234px;
  justify-content: center;
  align-items: top;
  flex-shrink: 0;
  margin-bottom: 2.4rem;
  margin-top: -17rem;

  @media ${device.mobile} {
    width: 906px;
    height: 177px;
  }
`;
// profile 이미지
const ProfileImg = styled.img`
  width: 136px;
  height: 136px;
  position: absolute;

  z-index: 2;
  @media ${device.mobile} {
    width: 104px;
    height: 104px;
  }
`;

// 사용자 이름과 SNS 버튼을 담는 div
const UserDiv = styled.div`
  display: flex;
  padding-top: 100px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// 사용자 이름
const UserName = styled.h2`
  ${(props) => props.theme['grayscale-60']}
  ${BodyRegular1};
  padding: 10px;
`;

// SNS 버튼 div
const SNSDiv = styled.div`
  display: flex;
  flex-direction: row; /*수평 정렬*/
  align-items: center;
  justify-content: center;
  gap: 12px;
`;
// 질문 container
const QuestionContainer = styled.div``;
// 질문 리스트
const QuestionList = styled.div`
  display: flex;
  width: 716px;
  height: 400px;
  background-color: ${theme['brown-10']};
`;

const DeleteButtonDiv = styled.div`
  display: flex;
  justify-content: end;
  padding: 12px 24px 12px 24px;
`;
// 몇 개의 질문이 있습니다 div
const QuestionDiv = styled.div``;

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

export {
  HeaderImage,
  HeaderDiv,
  AnswerPageBox,
  ProfileImg,
  UserDiv,
  UserName,
  SNSDiv,
  QuestionList,
  QuestionDiv,
  DeleteButtonDiv,
  QuestionContainer,
  FloatingDeleteButton,
};
