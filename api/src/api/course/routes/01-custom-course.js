module.exports = {
  routes: [
    { // Path defined with a regular expression
      method: 'GET',
      path: '/courses/lessons', // Only match when the URL parameter is composed of lowercase letters
      handler: 'course.lessons',
    },
    { // Path defined with a regular expression
      method: 'GET',
      path: '/courses/lessons/:id', // Only match when the URL parameter is composed of lowercase letters
      handler: 'course.lessonsOne',
    }
  ]
}
