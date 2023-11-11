import styled from 'styled-components';

const SelectMenuBox = styled.div`
  display: flex;
  width: 10.1rem;
  padding: 0.4rem 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 0.1rem solid var(--grayscale-30, #cfcfcf);
  background: var(--grayscale-10, #fff);

  /* 1pt */
  box-shadow: 0 0.4rem 0.4rem 0 rgba(140, 140, 140, 0.25);
`;

const SelectMenuInnerBox = styled.div`
  display: flex;
  padding: 0.6rem 0.8rem;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
  align-self: stretch;

  p {
    color: var(--grayscale-50, #515151);
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: Pretendard;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 500;
    line-height: 18px; /* 128.571% */
  }
  &:hover p {
    color: ${(props) => props.theme['blue-50']};
  }

  &:active p {
    color: ${(props) => props.theme['blue-50']};
    font-weight: 600;
  }

  cursor: pointer;
`;

export { SelectMenuBox, SelectMenuInnerBox };
