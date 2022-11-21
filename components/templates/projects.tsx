import { CTASection, Projects } from 'components/organisms';

type Props = {};

const ProjectsPageTemplate = (props: Props) => {
  return (
    <main id='main-content' aria-label='Projects Page Content'>
      <Projects />
      <CTASection />
    </main>
  );
};

export { ProjectsPageTemplate };
