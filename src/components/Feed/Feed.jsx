import IMAGES from '../../assets';
import { Link } from 'react-router-dom';
import * as S from './Feed.style';
import LinkButton from '../common/Button/LinkButton';
import KakaoButton from '../common/Button/KakaoButton';
import FacebookButton from '../common/Button/FacebookButton';

const FeedWrapper = ({ nickName = '아초는 고양이', copyLink }) => {
  return (
    <>
      <S.Background></S.Background>
      <S.Container>
        <Link to="/">
          <S.LogoImage src={IMAGES.logo} />
        </Link>
        <S.ProfileImage src={IMAGES.profile} />
        <S.NickName>{nickName}</S.NickName>
        <S.ButtonWrapper>
          <LinkButton onClick={copyLink} />
          <KakaoButton />
          <FacebookButton />
        </S.ButtonWrapper>
      </S.Container>
    </>
  );
};

export { FeedWrapper };
