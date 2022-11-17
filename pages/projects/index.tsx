import { ProjectsPageTemplate } from 'components';
import type { NextPageWithLayout } from 'types';

type Props = {};

const Projects: NextPageWithLayout<Props> = (props) => {
  return (
    <div>
      <h1>PROJECTS</h1>
      <ProjectsPageTemplate />
    </div>
  );
};

export default Projects;
