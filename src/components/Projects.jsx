import { ThreeDCard } from './ThreeDCard';
import AniCare from '../assets/anicarehub-logo.jpg';
import NoteFolio from '../assets/notefolio-logo.jpeg';
import AniImg from '../assets/port-anicare.png';
import NoteImg from '../assets/port-note.png';
import { IoLogoReact } from 'react-icons/io5';
import { RiTailwindCssFill } from 'react-icons/ri';
import { GrHtml5 } from 'react-icons/gr';
import { FaCss3 } from 'react-icons/fa';
import { SiStyledcomponents } from 'react-icons/si';
import { FaPython } from 'react-icons/fa';
import { DiDjango } from 'react-icons/di';
import { SiNumpy } from 'react-icons/si';
import { SiPandas } from 'react-icons/si';
import { BiLogoTypescript } from 'react-icons/bi';

const Projects = () => {
  return (
    <main className="grid md:grid-cols-2 gap-x-5">
      <ThreeDCard
        titleSrc={ani.titleSrc}
        title={ani.title}
        src={ani.img}
        repo={ani.repo}
        link={ani.link}
        tStack={ani.tStack}
        description={ani.description}
      />
      <ThreeDCard
        titleSrc={note.titleSrc}
        title={note.title}
        src={note.img}
        repo={note.repo}
        link={note.link}
        tStack={note.tStack}
        description={note.description}
      />

      <ThreeDCard
        title={reactBkDjango.title}
        repo={reactBkDjango.repo}
        tStack={reactBkDjango.tStack}
        description={reactBkDjango.description}
      />
      <ThreeDCard
        title={youthDS.title}
        repo={youthDS.repo}
        tStack={youthDS.tStack}
        description={youthDS.description}
      />
      <ThreeDCard
        title={crypto.title}
        repo={crypto.repo}
        tStack={crypto.tStack}
        description={crypto.description}
      />
    </main>
  );
};
export default Projects;

const ani = {
  titleSrc: AniCare,
  title: 'Ani-Care-Hub',
  description:
    'AniCare Hub offers exceptional care and improvement of the lives of animals. By connecting professionals, sharing knowledge, and fostering collaboration. It aims to become the go-to destination for animal care excellence.',
  img: AniImg,
  repo: 'https://github.com/Daucko/ani-care-hub',
  link: 'ani-care-hub.vercel.app',
  tStack: [
    <GrHtml5 className="w-12 h-12" />,
    <FaCss3 className="w-12 h-12" />,
    <IoLogoReact className="w-12 h-12" />,
    <RiTailwindCssFill className="w-12 h-12" />,
  ],
};

const note = {
  titleSrc: NoteFolio,
  title: 'Notefolio',
  description:
    'Notefolio is a versatile and user-friendly tool that allows you to capture, organize, and store your thoughts, ideas, and information in a secure and accessible way. With features like editing, searching, and deleting you can easily jot down notes, edit jotted notes, and attach any media of your choice.',
  img: NoteImg,
  repo: 'https://github.com/Daucko/flexi-note-app',
  link: 'notefolio.netlify.app',
  tStack: [
    <GrHtml5 className="w-12 h-12" />,
    <FaCss3 className="w-12 h-12" />,
    <IoLogoReact className="w-12 h-12" />,
    <SiStyledcomponents className="w-12 h-12" />,
  ],
};

const reactBkDjango = {
  title: 'React Backend Django',
  description:
    'This Django backend codebase that serves as a robust customer information management system, securely storing and managing customer data. Additionally, the codebase exposes a RESTful API, providing a scalable and flexible interface for retrieving, updating, and manipulating customer data, enabling seamless integration with other applications and services.',
  repo: 'https://github.com/Daucko/react-backend-django',
  tStack: [
    <FaPython className="w-12 h-12" />,
    <DiDjango className="w-12 h-12" />,
  ],
};

const youthDS = {
  title: 'Data Science Works',
  description:
    'This repository showcases a collection of projects and scripts that leverage the power of Python, NumPy, Pandas, and Matplotlib to analyze, visualize, and gain insights from data. Through various notebooks and examples, it demonstrates expertise in data manipulation, statistical analysis, and data visualization, providing a comprehensive resource for data science and scientific computing applications.',
  repo: 'https://github.com/Daucko/youthrive-data-science',
  tStack: [
    <FaPython className="w-12 h-12" />,
    <SiNumpy className="w-12 h-12" />,
    <SiPandas className="w-12 h-12" />,
  ],
};

const crypto = {
  title: 'Cryptocurrencies App',
  description:
    "This cryptocurrency app allows users to input their holdings of various coins, which are then multiplied by the current market price to calculate the total value in dollars, providing a comprehensive overview of their portfolio's worth. By aggregating the values of all entered coins, the app gives users a real-time snapshot, in pie-chart, of their overall portfolio value, enabling informed investment decisions and effortless portfolio management.",
  repo: 'https://github.com/Daucko/ts-axios',
  tStack: [
    <GrHtml5 className="w-12 h-12" />,
    <FaCss3 className="w-12 h-12" />,
    <BiLogoTypescript className="w-12 h-12" />,
  ],
};
