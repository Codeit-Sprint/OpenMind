import styled from 'styled-components';
import IMAGES from '../../../assets';

const ButtonBox = styled.div`
  display: flex;
  width: 10.3rem;
  height: 3.8rem;
  padding: 4px 0px;
  justify-content: center;
  align-items: center;

  border-radius: 8px;
  border: 1px solid var(--grayscale-30, #cfcfcf);
  background: var(--grayscale-10, #fff);
  cursor: pointer;

  /* 1pt */
  box-shadow: 0px 4px 4px 0px rgba(140, 140, 140, 0.25);

  p {
    color: var(--grayscale-50, #515151);
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px; /* 128.571% */
  }

  &:hover p {
    color: ${(props) => props.theme['blue-50']};
  }
`;

const CorrectionButton = ({ handleEditButton }) => {
  return (
    <ButtonBox onClick={handleEditButton}>
      <img src={IMAGES.editGray} alt="수정하기" />
      <p>수정하기</p>
    </ButtonBox>
  );
};

export default CorrectionButton;
