export const getCourses = (dictionary) => {
  const courses = [
    {
      title: dictionary.webFullStackDevelopment,
      institution: 'Labenu',
      duration: '1000h',
      period: '2020 - 2021',
      description: dictionary.labenuBootcampDescription
    },
    {
      title: dictionary.androidDevelopment,
      institution: 'Udemy',
      duration: '100h',
      period: `2020 - ${dictionary.present}`,
      description: dictionary.androidDevelopmentCourseDescription
    }
  ]

  return courses
}
