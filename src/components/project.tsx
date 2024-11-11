import Image, { StaticImageData } from 'next/image';

const ProjectCard: React.FC<{ project: { title: string; url: string; image: StaticImageData } }> = ({ project }) => {
  return (
    <div>
      <h3>{project.title}</h3>
      <Image src={project.image} alt={project.title} width={500} height={300} />
      <a href={project.url}>Visit project</a>
    </div>
  );
};

export default ProjectCard;
