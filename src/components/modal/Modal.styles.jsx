import styled from 'styled-components';
import { device } from '../../styles/mediaQuery';
import {
  BodyBold1,
  BodyBold2,
  BodyRegular3,
  H3,
} from '../../styles/typography';

const Background = styled.div`
  position: fixed;
  top: 0;

  width: 100%;
  height: 100%;
  background: var(--Dim, rgba(0, 0, 0, 0.56));
`;

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 612px;
  height: 454px;
  flex-shrink: 0;
  padding: 40px;
  border-radius: 24px;
  background: var(--grayscale-10, #fff);

  /* 2pt */
  box-shadow: 0px 16px 20px 0px rgba(48, 48, 48, 0.62);

  @media ${device.mobile} {
    width: 32.7rem;
    flex-shrink: 0;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 30px;
  margin-bottom: 4.3rem;
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  ${H3};

  @media ${device.mobile} {
    ${BodyBold1}
  }
`;

const Close = styled.img`
  width: 2.8rem;
  height: 2.8rem;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }

  @media ${device.mobile} {
    width: 2.2rem;
    height: 2.2rem;
  }
`;

const To = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  ${BodyBold2};
  margin-bottom: 1.2rem;
`;

const Profile = styled.img`
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 2.8rem;
`;

const Send = styled.div`
  display: flex;
  width: 100%;
  margin-top: 0.8rem;
  padding: 12px 24px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  border-radius: 8px;
  cursor: pointer;
  background-color: ${(props) =>
    props.$hasContent ? props.theme['brown-40'] : props.theme['brown-30']};
  color: ${(props) => props.theme['grayscale-10']};
  ${BodyRegular3};

  &:hover {
    background-color: ${(props) => props.theme['brown-50']};
  }
`;

export { Background, Container, Title, Info, Close, To, Profile, Send };
