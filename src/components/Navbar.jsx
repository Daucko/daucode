import { Tabs } from '../ui/Tabs';
import TechStack from './TechStack';

export function Navbar() {
  const tabs = [
    {
      title: 'About',
      value: 'about',
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10  text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <h1 className="text-xl md:text-4xl font-bold">About Me</h1>
          <p className="text-xl md:text-xl mt-4">
            As an Electrical and Electronics Engineer turned Frontend Developer
            and Data Scientist, I've leveraged my analytical mind and
            problem-solving skills to drive innovation in the digital realm. My
            unique blend of engineering expertise and technical skills enables
            me to craft intuitive interfaces, uncover hidden insights, and drive
            business forward. From designing circuits to developing data-driven
            solutions, my journey has been marked by a passion for creative
            problem-solving and a relentless pursuit of knowledge.
          </p>
        </div>
      ),
    },
    {
      title: 'Tech-Stack',
      value: 'tech-stack',
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Services tab</p>
          <TechStack />
        </div>
      ),
    },
    {
      title: 'Projects',
      value: 'projects',
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Playground tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: 'Contact',
      value: 'contact',
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Content tab</p>
          <DummyContent />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = () => {
  return <p>Bienvenue!</p>;
};
