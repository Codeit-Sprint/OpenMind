import styled from 'styled-components';
import { BodyRegular3, BodyBold3, CaptionBold1 } from '../../styles/typography';

import IMAGES from '../../assets';
import { device } from '../../styles/mediaQuery';

const HomePageBox = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  background-image: url(${IMAGES.indexBackground});
  background-repeat: no-repeat;
  background-position: center bottom;
  background-image: url(${IMAGES.indexBackground});
  background-color: ${(props) => props.theme['grayscale-20']};
  background-size: contain;
`;

const HomePageLogoImage = styled.img`
  width: 35.5rem;
  height: 18rem;
  @media ${device.pc} {
  }

  @media ${device.mobile} {
    width: 24.8rem;
    height: 9.8rem;
    margin-top: 0rem;
  }
  cursor: pointer;
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

  p {
    color: ${(props) => props.theme['brown-40']};
    ${BodyBold3}
  }

  img {
    width: 1.8rem;
    height: 1.8rem;
  }

  &:hover {
    outline: 1px solid ${(props) => props.theme['brown-40']};
  }

  @media ${device.pc} {
    top: 4.5rem;
    right: 12.5rem;
  }
  @media ${device.tablet} {
    top: 4.4rem;
    right: 4.5rem;
  }
  @media ${device.mobile} {
    padding: 0.8rem 1.2rem;
    gap: 0.4rem;
    top: 43%;
    left: 50%;
    transform: translate(-50%, -50%);

    p {
      ${CaptionBold1}
    }
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
