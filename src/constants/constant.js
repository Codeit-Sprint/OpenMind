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

export { DEFAULT_TEAM_PATH, TIME_IN_MILLISECONDS, LINK_BASE_URL };
