import { Link } from 'react-router-dom';
import * as S from './styles';
import IMAGES from '../../assets';
import Button from '../../components/common/Button/Button';

const Navbar = ({ userId }) => {
  return (
    <S.NavbarOuterBox>
      <S.NavbarBox>
        <Link to="/">
          <S.LogoImage src={IMAGES.logo} />
        </Link>
        <Link to={userId ? `/post/${userId}/answer` : '/'}>
          <Button type="answer" text="답변하러 가기" />
        </Link>
      </S.NavbarBox>
    </S.NavbarOuterBox>
  );
};

export default Navbar;
