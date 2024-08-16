import { Tabs } from '../ui/Tabs';
import About from './About';
import TechStack from './TechStack';
import { Projects } from './Projects';

export function Navbar() {
  const tabs = [
    {
      title: 'About',
      value: 'about',
      content: <About />,
    },
    {
      title: 'Tech-Stack',
      value: 'tech-stack',
      content: (
        <div className="w-full border-4 border-red-700 overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>GOOD AT</p>
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
          <Projects />
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
    <div className="h-[200%] border-4 border-red-700 [perspective:1000px] relative b flex flex-col w-screen items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = () => {
  return <p>Bienvenue!</p>;
};

// <div className="h-[20rem] md:h-[40rem] border-4 border-red-700 [perspective:1000px] relative b flex flex-col w-screen items-start justify-start my-40">
