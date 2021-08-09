import { getCourses } from './courses'

test('getCourses function', () => {
  const dictionaryMock = {
    webFullStackDevelopment: 'foo',
    labenuBootcampDescription: 'bar',
    androidDevelopment: 'foo bar',
    androidDevelopmentCourseDescription: 'bar foo',
    present: 'foo bar foo'
  }

  const courses = getCourses(dictionaryMock)

  const expectedResult = [
    {
      title: dictionaryMock.webFullStackDevelopment,
      institution: 'Labenu',
      duration: '1000h',
      period: '2020 - 2021',
      description: dictionaryMock.labenuBootcampDescription
    },
    {
      title: dictionaryMock.androidDevelopment,
      institution: 'Udemy',
      duration: '100h',
      period: `2020 - ${dictionaryMock.present}`,
      description: dictionaryMock.androidDevelopmentCourseDescription
    }
  ]

  expect(courses.length).toEqual(2)
  expect(courses).toEqual(expectedResult)
})
