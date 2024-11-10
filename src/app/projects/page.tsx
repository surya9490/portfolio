import finance from "@/assets/images/finace-app.png";
import ProjectCard from "@/components/project";
import { StaticImageData } from "next/image";



const projectList:{title: string; url: string; image:StaticImageData}[] = [
  {
    title: "Finance Tracker",
    url: "https://surya-finace.vercel.app/",
    image: finance,
  },
  {
    title: "Ecommerce",
    url: "https://myshop-uu26.onrender.com/shop/listing",
    image: finance,
  },
];

export default function About() {
  return (
    <div>
      {projectList.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  );
}
