import IMAGES from '../assets';

const DEFAULT_TEAM_PATH = '1-11';

const LINK_BASE_URL = 'https://localhost:3000';

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
      mobileWebUrl: 'https://openmind-2uuiyqf3r-thisisthewa2.vercel.app/',
      webUrl: 'https://openmind-2uuiyqf3r-thisisthewa2.vercel.app/',
    },
  },
  buttons: [
    {
      title: '웹으로 보기',
      link: {
        mobileWebUrl: 'https://openmind-2uuiyqf3r-thisisthewa2.vercel.app/',
        webUrl: 'https://openmind-2uuiyqf3r-thisisthewa2.vercel.app/',
      },
    },
    {
      title: '앱으로 보기',
      link: {
        mobileWebUrl: 'https://openmind-2uuiyqf3r-thisisthewa2.vercel.app/',
        webUrl: 'https://openmind-2uuiyqf3r-thisisthewa2.vercel.app/',
      },
    },
  ],
};

export {
  DEFAULT_TEAM_PATH,
  TIME_IN_MILLISECONDS,
  LINK_BASE_URL,
  KAKAO_SHARE_INFO,
};
