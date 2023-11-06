import styled, { css } from 'styled-components';

const common = css`
  color: var(--grayscale-60);
  font-feature-settings: 'clig' off, 'liga' off;
  font-style: normal;
`;

const H1 = styled.h1`
  ${common}
  font-family: Actor;
  font-size: 4rem;
  font-weight: 400;
  line-height: normal;
`;

const H2 = styled.h2`
  ${common}
  font-family: Actor;
  font-size: 3.2rem;
  font-weight: 400;
  line-height: 4rem;
`;

const H3 = styled.h3`
  ${common}
  font-family: Actor;
  font-size: 2.4rem;
  font-weight: 400;
  line-height: 3rem;
`;

const BodyRegular1 = styled.p`
  ${common}
  font-family: Pretendard;
  font-size: 2rem;
  font-weight: 400;
  line-height: 2.5rem;
`;

const BodyBold1 = styled.p`
  ${common}
  font-family: Actor;
  font-size: 2rem;
  font-weight: 400;
  line-height: 2.5rem;
`;

const BodyRegular2 = styled.p`
  ${common}
  font-family: Pretendard;
  font-size: 188rem;
  font-weight: 400;
  line-height: 2.4rem;
`;

const BodyBold2 = styled.p`
  ${common}
  font-family: Actor;
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 2.4rem;
`;

const BodyRegular3 = styled.p`
  ${common}
  font-family: Pretendard;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.2rem;
`;

const BodyBold3 = styled.p`
  ${common}
  font-family: Actor;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.2rem;
`;

const CaptionRegular1 = styled.p`
  ${common}
  font-family: Pretendard;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.8rem;
`;

const CaptionMedium1 = styled.p`
  ${common}
  font-family: Pretendard;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1.8rem;
`;

const CaptionBold1 = styled.p`
  ${common}
  font-family: Actor;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.8rem;
`;

export {
  H1,
  H2,
  H3,
  BodyRegular1,
  BodyBold1,
  BodyRegular2,
  BodyBold2,
  BodyRegular3,
  BodyBold3,
  CaptionRegular1,
  CaptionMedium1,
  CaptionBold1,
};
