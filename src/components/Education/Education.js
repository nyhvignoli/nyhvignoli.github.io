import React from "react";
import EducationContent from "./EducationContent/EducationContent";

const Education = () => {
    const courses = [
        {
            title: "Curso Web Full Stack",
            institution: "Labenu",
            duration: "1000h",
            period: "2020 - 2021",
            description: "Mauris dignissim dictum dolor sed pulvinar. Morbi viverra orci urna, et mattis ligula commodo quis. Morbi ornare justo sit amet suscipit suscipit. Curabitur vitae convallis nisi. Etiam lobortis ultricies dui, eu eleifend felis gravida ac. Quisque congue libero at urna scelerisque ultrices. Aliquam eu quam vitae erat rhoncus venenatis vitae in nisi. Morbi lobortis urna at neque feugiat, sit amet mollis est finibus. Pellentesque augue tortor, pretium sed fringilla nec, aliquam nec lectus. Quisque et enim eros."
        },
        {
            title: "Desenvolvimento Android",
            institution: "Udemy",
            duration: "100h",
            period: "2020 - presente",
            description: "Quisque iaculis libero eu enim tincidunt lacinia. Pellentesque ultricies ex quis faucibus mollis. Aenean sed turpis nisi. Suspendisse quis tincidunt enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque lacinia elit, id facilisis justo fringilla ullamcorper. Sed et arcu a nunc laoreet feugiat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi non lacus facilisis, cursus mauris sit amet, consequat lacus."
        },
    ];

    return (
        <section>
            <h1>Formação</h1>
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
        </section>
    );
}

export default Education;