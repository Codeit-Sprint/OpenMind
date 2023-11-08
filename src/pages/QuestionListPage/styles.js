import styled from 'styled-components';
import { device } from '../../styles/mediaQuery';

const NavbarOuterBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const NavbarBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4.5rem;
  width: 100%;
  max-width: 95.5rem;
  @media ${device.mobile} {
    display: grid;
    place-items: center;
    grid-template-columns: 1fr;
    grid-template-rows: 2fr;
  }
  @media ${device.tablet} {
    max-width: 95.5rem;
    padding: 0 max(5rem);
  }
`;

const LogoImage = styled.img`
  width: 14.6rem;
  height: 5.7rem;
`;

const AnswerButton = styled.button`
  display: inline-flex;
  padding: 1.2rem 2.4rem;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme['brown-40']};
  background-color: ${(props) => props.theme['brown-10']};

  @media ${device.pc} {
  }

  @media ${device.tablet} {
  }

  @media ${device.mobile} {
  }
`;

const QuestionBarBox = styled.div`
  margin-top: 3.3rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  @media ${device.mobile} {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 2.4rem;
  }
`;

const QuestionBarHeader = styled.h2`
  color: ${(props) => props.theme['grayscale-60']};
  text-align: center;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Actor;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 1.2rem;

  @media ${device.mobile} {
    font-size: 24px;
    line-height: 30px; /* 125% */
  }
`;

const QuestionMainBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 3rem auto 0;

  @media ${device.pc} {
    width: 100%;
  }

  @media ${device.tablet} {
    margin: 3rem 3.2rem 0;
  }
  @media ${device.mobile} {
  }
  /* padding:  */
`;

const PaginationBox = styled.div`
  display: inline-flex;
  align-items: flex-start;
`;

const CardList = styled.div`
  display: grid;
  gap: 2rem;
  max-width: 94rem;
  width: 100%;
  padding: 0 3.2rem;
  place-items: center;
  grid-template-columns: repeat(4, 1fr);
  transition: 1s;

  ${(props) => props.$width && { gridTemplateColumns: 'repeat(3, 1fr);' }}

  @media ${device.mobile} {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.6rem;
    margin: 0 2.4rem;
  }
`;

export {
  NavbarOuterBox,
  NavbarBox,
  LogoImage,
  QuestionBarBox,
  QuestionMainBox,
  PaginationBox,
  AnswerButton,
  CardList,
  QuestionBarHeader,
};
