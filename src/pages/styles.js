import styled from 'styled-components';
import { BodyRegular3 } from '../styles/typography';
import IMAGES from '../assets';
import { device } from '../styles/mediaQuery';

const HomePageBox = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${IMAGES.indexBackground});
  background-color: ${(props) => props.theme['grayscale-20']};

  @media ${device.tablet} {
    background-size: contain;
  }

  @media ${device.mobile} {
    background-size: contain;
  }

  img {
    @media ${device.mobile} {
      display: flex;
      width: 24.8rem;
      height: 9.8rem;
      padding-right: 0px;
      justify-content: center;
      align-items: center;
      flex-shrink: 0;
    }
  }
`;

const HomePageOuterFrame = styled.div`
  width: 40rem;
  height: 17.2rem;
  display: inline-flex;
  padding: 3.2rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  border-radius: 16px;

  background-color: ${(props) => props.theme['grayscale-10']};
`;

const HomePageFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

const HomePageInputBox = styled.div`
  display: flex;
  width: 33.6rem;
  padding: 1.2rem 1.6rem;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme['grayscale-40']};
  background: ${(props) => props.theme['grayscale-10']};

  img {
    width: 2rem;
    height: 2rem;
    flex-shrink: 0;
  }

  input {
    flex: 1 0 0;
    color: ${(props) => props.theme['grayscale-40']};
    ${BodyRegular3}
  }
`;

const HomePageButton = styled.button`
  display: flex;
  padding: 1.2rem 2.4rem;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  align-self: stretch;
  border-radius: 0.8rem;
  background: ${(props) => props.theme['brown-40']};

  p {
    color: ${(props) => props.theme['grayscale-10']};
    ${BodyRegular3}
  }

  &:hover {
    background: ${(props) => props.theme['brown-50']};
  }
`;

const HomePageQuestionButton = styled.button`
  position: fixed;
  top: 4.5rem;
  right: 12.5rem;
  display: inline-flex;
  padding: 1.2rem 2.4rem;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme['brown-40']};
  background-color: ${(props) => props.theme['brown-10']};

  @media ${device.tablet} {
    top: 4.4rem;
    right: 4.5rem;
  }

  @media ${device.mobile} {
    top: 40%;
    right: 41.5%;
  }
`;

export {
  HomePageOuterFrame,
  HomePageFrame,
  HomePageInputBox,
  HomePageBox,
  HomePageButton,
  HomePageQuestionButton,
};
