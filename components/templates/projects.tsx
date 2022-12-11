import { Section } from 'components/atoms';
import { CTASection, Projects } from 'components/organisms';

type Props = {};

const ProjectsPageTemplate = (props: Props) => {
  return (
    <Section as='main' id='main-content' aria-label='Projects Page Content'>
      <Projects />
      <CTASection />
    </Section>
  );
};

export { ProjectsPageTemplate };
