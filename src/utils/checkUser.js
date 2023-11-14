import getUserId from './getUserId';

// 해당 Subject를 생성한 유저인지 확인
export const checkUser = (subjectId) => {
  return getUserId() === subjectId;
};
