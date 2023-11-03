import { css } from 'styled-components';

const common = css`
  color: var(--grayscale-60);
  font-feature-settings: 'clig' off, 'liga' off;
  font-style: normal;
`;

const styledH1 = css(common)`
  font-family: Actor;
  font-size: 4rem;
  font-weight: 400;
  line-height: normal;
`;

const styledH2 = css(common)`
  font-family: Actor;
  font-size: 3.2rem;
  font-weight: 400;
  line-height: 4rem;
`;

const styledH3 = css(common)`
  font-family: Actor;
  font-size: 2.4rem;
  font-weight: 400;
  line-height: 3rem;
`;

const styledBodyRegular1 = css(common)`
  font-family: Pretendard;
  font-size: 2rem;
  font-weight: 400;
  line-height: 2.5rem;
`;

const styledBodyBold1 = css(common)`
  font-family: Actor;
  font-size: 2rem;
  font-weight: 400;
  line-height: 2.5rem;
`;

const styledBodyRegular2 = css(common)`
  font-family: Pretendard;
  font-size: 188rem;
  font-weight: 400;
  line-height: 2.4rem;
`;

const styledBodyBold2 = css(common)`
  font-family: Actor;
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 2.4rem;
`;

const styledBodyRegular3 = css(common)`
  font-family: Pretendard;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.2rem;
`;

const styledBodyBold3 = css(common)`
  font-family: Actor;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.2rem;
`;

const styledCaptionRegular1 = css(common)`
  font-family: Pretendard;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.8rem;
`;

const styledCaptionMedium1 = css(common)`
  font-family: Pretendard;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1.8rem;
`;

const stlyedCaptionBold1 = css(common)`
  font-family: Actor;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.8rem;
`;

export {
  styledH1,
  styledH2,
  styledH3,
  styledBodyRegular1,
  styledBodyBold1,
  styledBodyRegular2,
  styledBodyBold2,
  styledBodyRegular3,
  styledBodyBold3,
  styledCaptionRegular1,
  styledCaptionMedium1,
  stlyedCaptionBold1,
};
