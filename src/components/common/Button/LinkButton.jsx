import IMAGES from '../../../assets';
import styled from 'styled-components';
const Icon = styled.img`
  width: 40px;
  height: 40px;
`;
const Button = styled.button``;

function LinkButton({ onClick }) {
  return (
    <Button onClick={onClick}>
      <Icon src={IMAGES.linkImg} />
    </Button>
  );
}
export default LinkButton;
