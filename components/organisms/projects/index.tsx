import { ProjectCard } from 'components/molecules';

type Props = {};

const projects = Array(4).fill(1);

const Projects = (props: Props) => {
  return (
    <section
      className='h-container mt-40 space-y-40 > * + *'
      aria-label='projects list'
    >
      {projects?.map((project, i) => {
        return (
          <ProjectCard key={project + i} id={`${i + 1}`} isPriority={i === 0} />
        );
      })}
    </section>
  );
};

export { Projects };
