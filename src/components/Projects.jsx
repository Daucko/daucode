import { ThreeDCard } from './ThreeDCard';
import AniCare from '../assets/anicarehub-logo.jpg';
import NoteFolio from '../assets/notefolio-logo.jpeg';
import AniImg from '../assets/port-anicare.png';
import NoteImg from '../assets/port-note.png';

const Projects = () => {
  return (
    <main className="grid grid-cols-2 gap-x-5">
      <ThreeDCard
        titleSrc={ani.titleSrc}
        title={ani.title}
        src={ani.img}
        repo={ani.repo}
        link={ani.link}
      />
      <ThreeDCard
        titleSrc={note.titleSrc}
        title={note.title}
        src={note.img}
        repo={note.repo}
        link={note.link}
      />
      <ThreeDCard />
      <ThreeDCard />
      <img src={AniCare} />
    </main>
  );
};
export default Projects;

const ani = {
  titleSrc: AniCare,
  title: 'Ani-Care-Hub',
  img: AniImg,
  repo: 'https://github.com/Daucko/ani-care-hub',
  link: 'ani-care-hub.vercel.app',
};

const note = {
  titleSrc: NoteFolio,
  title: 'Notefolio',
  img: NoteImg,
  repo: 'https://github.com/Daucko/flexi-note-app',
  link: 'notefolio.netlify.app',
};
