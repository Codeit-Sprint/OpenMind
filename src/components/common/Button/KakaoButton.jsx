import IMAGES from '../../../assets';
import styled from 'styled-components';
const Icon = styled.img`
  width: 40px;
  height: 40px;
`;
const Button = styled.button``;

function KakaoButton({ handleKakaoButton }) {
  return (
    <Button onClick={handleKakaoButton}>
      <Icon src={IMAGES.kakaoImg} />
    </Button>
  );
}
export default KakaoButton;
