import { ProjectPageTemplate } from 'components';
import type { NextPageWithLayout } from 'types';

type Props = {};

const ProjectDetail: NextPageWithLayout<Props> = (props) => {
  return (
    <div>
      <h1>PROJECT DETAIL</h1>
      <ProjectPageTemplate />
    </div>
  );
};

export default ProjectDetail;
