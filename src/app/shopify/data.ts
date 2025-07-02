import { StaticImageData } from 'next/image';
import nasher from "@/assets/projects/nashermiles-pc.png";
import benetton from "@/assets/projects/ucb-pc.png";
import milton from "@/assets/projects/milton-pc.png";
import borosil from "@/assets/projects/myborosil.com_.png";
import raymonds from "@/assets/projects/myraymond.com_.png";
import naturalindulgence from "@/assets/projects/naturalindulgence.in_.png";
import miarcus from "@/assets/projects/miracus.png";
import neonattack from "@/assets/projects/neonattack.png";
import acerpure from "@/assets/projects/store.acerpure.co.in_.png";
import wrogn from "@/assets/projects/wrogn.com_.png";
import levis from "@/assets/projects/levi.in_.png";
import partsology from "@/assets/projects/partsology.com_.png";
import uspolo from "@/assets/projects/uspoloassn.in_.png";
import trampoline from "@/assets/projects/trampline.png";

export interface Project {
  title: string;
  link: string;
  image: string | StaticImageData;
  tags: string[];
}

export const projectList: Project[] = [
  {
    title: "Nasher Miles",
    link: "https://nashermiles.com/",
    image: nasher,
    tags: ["Shopify", "Retainer", "Full build"],
  },
  {
    title:'Trampoline',
    link:"https://trampolinestore.uk/",
    image:trampoline,
    tags: ["Shopify", "Retainer", "Full build"],
  },
  {
    title: "United Colors of Benetton",
    link: "https://in.benetton.com/",
    image: benetton,
    tags: ["Shopify", "Retainer", "Full build"],
  },
  {
    title: "US Polo India",
    link: "https://uspoloassn.in/",
    image: uspolo,
    tags: ["Shopify", "Retainer"],
  },
  {
    title: "Partsology",
    link: "https://www.partsology.com/",
    image: partsology,
    tags: ["Shopify", "Full build", "Retainer"],
  },
  {
    title: "Acerpure",
    link: "https://store.acerpure.co.in/",
    image: acerpure,
    tags: ["Shopify", "Full build", "Retainer"],
  },
  {
    title: "wrogn",
    link: "https://wrogn.com/",
    image: wrogn,
    tags: ["Shopify", "Full build", "Retainer"],
  },
  {
    title: "Levis",
    link: "https://levi.in/",
    image: levis,
    tags: ["Shopify", "Full build", "Retainer"],
  },
  {
    title: "Raymonds",
    link: "https://myraymond.com/",
    image: raymonds,
    tags: ["Shopify", "Retainer", "Full build"],
  },
  {
    title: "Milton",
    link: "https://www.milton.in/",
    image: milton,
    tags: ["Shopify", "Retainer"],
  },
  {
    title: "Borosil",
    link: "https://myborosil.com/",
    image: borosil,
    tags: ["Shopify", "Retainer"],
  },
  {
    title: "Natural Indulgence",
    link: "https://naturalindulgence.in/",
    image: naturalindulgence,
    tags: ["Shopify", "Full build"],
  },
  {
    title: "Mi arcus",
    link: "https://miarcus.com/",
    image: miarcus,
    tags: ["Shopify", "Full build"],
  },
  {
    title: "Neon Attack",
    link: "https://www.neonattack.com/",
    image: neonattack,
    tags: ["Shopify", "Full build"],
  }
]; 