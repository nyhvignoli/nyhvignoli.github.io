import { getCourses } from './courses'

test('getCourses function', () => {
  const dictionaryMock = {
    webFullStackDevelopment: 'foo',
    labenuBootcampDescription: 'bar',
    androidDevelopment: 'foo bar',
    androidDevelopmentCourseDescription: 'bar foo',
    months: {
      january: 'january',
      february: 'february',
      march: 'march',
      april: 'april',
      may: 'may',
      june: 'june',
      july: 'july',
      august: 'august',
      september: 'september',
      november: 'november',
      december: 'december'
    },
    present: 'present'
  }

  const courses = getCourses(dictionaryMock)

  const expectedResult = [
    {
      title: dictionaryMock.webFullStackDevelopment,
      institution: 'Labenu',
      duration: '1000h',
      period: `${dictionaryMock.months.september} 2020 - ${dictionaryMock.months.april} 2021`,
      description: dictionaryMock.labenuBootcampDescription
    },
    {
      title: dictionaryMock.androidDevelopment,
      institution: 'Udemy',
      duration: '100h',
      period: `${dictionaryMock.months.march} 2020 - ${dictionaryMock.present}`,
      description: dictionaryMock.androidDevelopmentCourseDescription
    }
  ]

  expect(courses.length).toEqual(2)
  expect(courses).toEqual(expectedResult)
})
