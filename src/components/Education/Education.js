import React, { useContext } from 'react'
import EducationContent from './EducationContent/EducationContent'
import { Wrapper, Content } from './styles'
import { Subtitle } from '../../global/styles'
import { LanguageContext, Text } from '../../global/LanguagesContext'
import { DATA_TYPE, getData } from '../../data'

const Education = () => {
  const { dictionary } = useContext(LanguageContext)
  const courses = getData(dictionary, DATA_TYPE.courses)

  return (
    <Wrapper data-testid="education">
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
