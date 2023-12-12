export const fetchCourseRequests = () => {
  return {
    type: 'user/requests',
  };
};
export const fetchCourseSuccess = () => {
  return {
    type: 'user/success',
    payload: 'User',
  };
};
