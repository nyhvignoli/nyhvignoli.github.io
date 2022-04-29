export const getCourses = ({
  webFullStackDevelopment,
  months,
  labenuBootcampDescription,
  androidDevelopment,
  androidDevelopmentCourseDescription,
  present
}) => {
  const courses = [
    {
      title: webFullStackDevelopment,
      institution: 'Labenu',
      duration: '1000h',
      period: `${months.september} 2020 - ${months.april} 2021`,
      description: labenuBootcampDescription
    },
    {
      title: androidDevelopment,
      institution: 'Udemy',
      duration: '100h',
      period: `${months.march} 2020 - ${present}`,
      description: androidDevelopmentCourseDescription
    }
  ]

  return courses
}
