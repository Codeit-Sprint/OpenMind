import IMAGES from '../assets';

const DEFAULT_TEAM_PATH = '1-11';

const LINK_BASE_URL = 'https://localhost:3000';

const USER_ID = localStorage.getItem('userId');

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
const month = day * 31;
const year = month * 12;

const TIME_IN_MILLISECONDS = {
  second,
  minute,
  hour,
  day,
  month,
  year,
};

// 카카오 공유하기 정보
const KAKAO_SHARE_INFO = {
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
};

export {
  DEFAULT_TEAM_PATH,
  TIME_IN_MILLISECONDS,
  LINK_BASE_URL,
  USER_ID,
  KAKAO_SHARE_INFO,
};
