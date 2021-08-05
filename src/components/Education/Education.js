import React, { useContext } from 'react'
import EducationContent from './EducationContent/EducationContent'
import { Wrapper, Content } from './styles'
import { Subtitle } from '../../global/styles'
import { LanguageContext, Text } from '../../global/LanguagesContext'

const Education = () => {
  const { dictionary } = useContext(LanguageContext)

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

  return (
    <Wrapper>
      <Subtitle data-aos="fade-zoom-in" data-aos-duration="1500">
        <Text tid="education" />
      </Subtitle>
      <Content>
        {courses.map((course, index) => {
          return (
            <EducationContent
              key={index}
              title={course.title}
              institution={course.institution}
              duration={course.duration}
              period={course.period}
              description={course.description}
            />
          )
        })}
      </Content>
    </Wrapper>
  )
}

export default Education
