import IMAGES from '../../../assets';
import styled from 'styled-components';
const Icon = styled.img`
  width: 40px;
  height: 40px;
`;
const Button = styled.button``;

function FacebookButton() {
  return (
    <Button>
      <Icon src={IMAGES.facebookImg} />
    </Button>
  );
}
export default FacebookButton;
