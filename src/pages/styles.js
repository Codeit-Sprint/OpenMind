import styled from 'styled-components';
import { BodyRegular3 } from '../styles/typography';
import IMAGES from '../assets';
import { device } from '../styles/mediaQuery';

const HomePageBox = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-repeat: no-repeat;
  /* background-size: contain; */
  background-position: center bottom;
  background-image: url(${IMAGES.indexBackground});
  background-color: ${(props) => props.theme['grayscale-20']};

  @media ${device.tablet} {
    background-size: contain;
  }

  @media ${device.mobile} {
    background-size: contain;
  }
`;

const HomePageLogoImage = styled.img`
  display: flex;
  width: 45.6rem;
  height: 18rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  margin-bottom: 2.4rem;
  margin-top: -17rem;

  @media ${device.mobile} {
    width: 24.8rem;
    height: 9.8rem;
    margin-top: -10rem;
    padding-right: 0px;
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

  @media ${device.mobile} {
    width: 30.5rem;
    margin-top: 10rem;
    gap: 1.6rem;
    padding: 2.4rem;
  }
`;

const HomePageFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  width: 100%;
`;

const HomePageInputBox = styled.div`
  display: flex;
  width: 100%;
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

export {
  HomePageOuterFrame,
  HomePageFrame,
  HomePageInputBox,
  HomePageBox,
  HomePageButton,
  HomePageQuestionButton,
  HomePageLogoImage,
};
