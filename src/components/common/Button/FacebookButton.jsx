import IMAGES from '../../../assets';
import styled from 'styled-components';

const Icon = styled.img`
  width: 40px;
  height: 40px;
`;

const Button = styled.p`
  cursor: pointer;
`;

function FacebookButton() {
  return (
    <Button
      className="share-wrapper"
      onClick={() => {
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`,
          '페이스북 공유하기',
          'width=600,height=800,location=no,status=no,scrollbars=yes',
        );
      }}
    >
      <Icon src={IMAGES.facebookImg} />
    </Button>
  );
}
export default FacebookButton;
