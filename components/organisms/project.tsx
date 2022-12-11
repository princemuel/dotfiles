import {
  Heading,
  Section as MainContent,
  Section,
  Text,
} from 'components/atoms';

type Props = {};

const Project = (props: Props) => {
  return (
    <MainContent as='main' id='main-content' aria-label='Contact Page Content'>
      <Section className='h-container' aria-label=''>
        <figure></figure>
      </Section>

      <Section as='article' className='h-container mt-40' aria-label=''>
        <div className='flex flex-col items-start gap-12 py-24 sm:py-10 border-y border-primary-300/10'>
          <Heading>Manage</Heading>

          <Text className='body-100'>
            This project required me to build a fully responsive landing page to
            the designs provided. I used HTML5, along with CSS Grid and
            JavaScript for the areas that required interactivity, such as the
            testimonial slider.
          </Text>

          <div>
            <Text className='flex gap-2 text-primary-100 text-400 font-sans font-bold leading-500'>
              <span>Interaction Design</span>
              <span>/</span>
              <span>Front End Development</span>
            </Text>

            <Text className='flex gap-2 text-primary-100 text-400 font-sans font-bold leading-500'>
              <span>HTML</span>
              <span>/</span>
              <span>CSS</span>
              <span>/</span>
              <span>JS</span>
            </Text>
          </div>

          <a
            href='https://www.github.com/princemuel'
            className='btn btn-secondary'
          >
            Visit Website
          </a>
        </div>
      </Section>

      <Section className='h-container' aria-label=''>
        <figure></figure>
      </Section>
    </MainContent>
  );
};

export { Project };
