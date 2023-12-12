export const fetchCourseRequests = () => {
  return {
    type: 'course/requests',
  };
};
export const fetchCourseSuccess = () => {
  return {
    type: 'course/success',
    payload: 'Courses',
  };
};
