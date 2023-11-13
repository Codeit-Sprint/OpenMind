import { USER_ID } from '../constants/constant';

// 해당 Subject를 생성한 유저인지 확인
export const checkUser = (subjectId) => {
  return USER_ID === subjectId;
};
