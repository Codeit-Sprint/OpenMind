import styled from 'styled-components';
import {
  BodyBold1,
  BodyBold2,
  BodyRegular3,
  CaptionMedium1,
} from '../../../styles/typography';
import { device } from '../../../styles/mediaQuery';

const Container = styled.div`
  max-width: 22rem;
  height: 18.7rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
  border: 0.1rem solid ${(props) => props.theme['grayscale-40']};
  border-radius: 16px;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
    transition: 0.2s;
    border: 0.2rem solid ${(props) => props.theme['grayscale-60']};
  }
  transition: 0.2s;
  background: ${(props) => props.theme['grayscale-10']};

  width: 100%;
  @media ${device.pc} {
    min-width: 18.6rem;
    max-width: 22rem;
  }

  @media ${device.tablet} {
    min-width: 18.6rem;
  }

  @media ${device.mobile} {
    min-width: 15.55rem;
    /* max-width: 22rem; */
    padding: 1.6rem;
  }
`;

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  ${BodyBold1}
  p {
    @media ${device.mobile} {
      ${BodyBold2}
    }
  }
`;

const ProfileImage = styled.img`
  width: 6rem;
  height: 6rem;
  border-radius: 60px;

  @media ${device.mobile} {
    width: 4.8rem;
    height: 4.8rem;
    flex-shrink: 0;
  }
`;

const Question = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.theme['grayscale-40']};
  ${BodyRegular3};

  p {
    @media ${device.mobile} {
      ${CaptionMedium1}
    }
  }
`;

const QuestionInnerBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;

  img {
    width: 1.8rem;
    height: 1.8rem;

    @media ${device.mobile} {
      width: 1.6rem;
      height: 1.6rem;
    }
  }

  p {
    color: ${(props) => props.theme['grayscale-40']};
    ${BodyRegular3}

    @media ${device.mobile} {
      ${CaptionMedium1}
    }
  }
`;

export { Container, Profile, ProfileImage, Question, QuestionInnerBox };
