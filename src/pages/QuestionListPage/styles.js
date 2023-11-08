import styled from 'styled-components';
import { device } from '../../styles/mediaQuery';

const LogoImage = styled.img`
  position: absolute;
  left: 13rem;
  top: 4rem;
  display: flex;
  width: 14.6rem;
  height: 5.7rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;

const AnswerButton = styled.button`
  position: absolute;

  display: inline-flex;
  padding: 1.2rem 2.4rem;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme['brown-40']};
  background-color: ${(props) => props.theme['brown-10']};

  @media ${device.pc} {
    top: 4.5rem;
    right: 12.5rem;
  }

  @media ${device.tablet} {
    top: 4.4rem;
    right: 4.5rem;
  }

  @media ${device.mobile} {
    /* top: 25.2rem; */
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const QuestionBarBox = styled.div`
  margin-top: 13.7rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const QuestionMainBox = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
  width: 94rem;
  margin: auto 3.2rem;
`;

const PaginationBox = styled.div`
  display: inline-flex;
  align-items: flex-start;
`;

const CardList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  width: 100%;

  @media ${device.tablet} {
  }
  @media ${device.mobile} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const CardBox = styled.div`
  display: flex;
  width: 100%;
  height: 187px;
  padding: 20px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  border-radius: 16px;
  border: 1px solid var(--grayscale-40, #818181);
  background: var(--grayscale-10, #fff);
`;

const CardTopBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
`;

const CardBottomBox = styled.div`
  display: flex;
  height: 22px;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  align-self: stretch;
`;

const CardProfileBox = styled.div`
  display: flex;
  width: 60px;
  height: 60px;
  justify-content: center;
  align-items: center;
`;

const CardImgBox = styled.div`
  img {
    display: flex;
    border-radius: 60px;
    width: 60px;
    height: 60px;
    justify-content: center;
    align-items: center;
  }
`;

export {
  LogoImage,
  QuestionBarBox,
  QuestionMainBox,
  PaginationBox,
  CardBox,
  AnswerButton,
  CardTopBox,
  CardBottomBox,
  CardImgBox,
  CardProfileBox,
  CardList,
};
