import { FacebookShareButton } from 'react-share';
import { Link } from 'react-router-dom';

import IMAGES from '../../assets';
import * as S from './Feed.style';
import LinkButton from '../common/Button/LinkButton';
import KakaoButton from '../common/Button/KakaoButton';
import FacebookButton from '../common/Button/FacebookButton';

const FeedWrapper = ({ copyLink, item }) => {
  const currentURL = window.location.href;

  // 카카오 공유하기
  const kakaoShare = () => {
    window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: 'OpenMind 11팀',
        description: 'Open Mind Codeit FrontEnd Sprint 1기 11팀 화이팅!',
        imageUrl: IMAGES.kakaoImg,
        link: {
          // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
          mobileWebUrl: 'http://localhost:3000',
          webUrl: 'http://localhost:3000',
        },
      },
      social: {
        likeCount: 286,
        commentCount: 45,
        sharedCount: 845,
      },
      buttons: [
        {
          title: '웹으로 보기',
          link: {
            mobileWebUrl: 'http://localhost:3000',
            webUrl: 'http://localhost:3000',
          },
        },
        {
          title: '앱으로 보기',
          link: {
            mobileWebUrl: 'http://localhost:3000',
            webUrl: 'http://localhost:3000',
          },
        },
      ],
    });
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
            <FacebookShareButton url={currentURL}>
              <FacebookButton />
            </FacebookShareButton>
          </S.ButtonWrapper>
        </S.Container>
      </>
    );
  }
};

export { FeedWrapper };
