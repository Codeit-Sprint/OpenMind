import { Link } from 'react-router-dom';

import IMAGES from '../../assets';
import * as S from './ContentNavBar.style';
import LinkButton from '../common/Button/LinkButton';
import KakaoButton from '../common/Button/KakaoButton';
import FacebookButton from '../common/Button/FacebookButton';
import { KAKAO_SHARE_INFO } from '../../constants/constant';

const ContentNavBar = ({ copyLink, item }) => {
  // 카카옹 공유하기
  const kakaoShare = () => {
    window.Kakao.Share.sendDefault(KAKAO_SHARE_INFO);
  };

  if (item) {
    return (
      <>
        <S.Background></S.Background>
        <S.Container>
          <Link to="/">
            <S.LogoImage src={IMAGES.logo} />
          </Link>
          <S.ProfileImage src={item.imageSource} />
          <S.NickName>{item.name}</S.NickName>
          <S.ButtonWrapper>
            <LinkButton onClick={copyLink} />

            <KakaoButton handleKakaoButton={kakaoShare} />
            <FacebookButton />
          </S.ButtonWrapper>
        </S.Container>
      </>
    );
  }
};

export default ContentNavBar;
