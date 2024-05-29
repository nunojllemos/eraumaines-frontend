import Container from '@/layout/Container'
import AnimatedTitle from '@/molecules/AnimatedTitle'
import HomePersonLeft from '@/organisms/HomePersonLeft'
import HomePersonRight from '@/organisms/HomePersonRight'

const AboutSection = ({ title, persons }) => {
    if (!persons || persons.length === 0) return

    return (
        persons.length > 0 && (
            <div className='pt-12'>
                {title && (
                    <AnimatedTitle isPrimary={false}>
                        {title} . {title} . {title} . {title} .
                    </AnimatedTitle>
                )}
                <Container>
                    {persons &&
                        persons.map((person, i) => {
                            const url = person?.person_photo?.data?.attributes?.url
                            return i % 2 === 0
                                ? url && (
                                      <HomePersonLeft
                                          key={`about-${i}`}
                                          name={person?.person_name}
                                          role={person?.person_role}
                                          description={person?.person_description}
                                          image={url}
                                          alt='foto Inês'
                                      />
                                  )
                                : url && (
                                      <HomePersonRight
                                          key={`about-${i}`}
                                          name={person?.person_name}
                                          role={person?.person_role}
                                          description={person?.person_description}
                                          image={url}
                                          alt='foto Diogo'
                                      />
                                  )
                        })}
                </Container>
            </div>
        )
    )
}
export default AboutSection
