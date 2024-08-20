import { useState } from 'react';
import NavLayout from './components/NavLayout';
import { SiReaddotcv } from 'react-icons/si';
import Switcher from './components/Switcher';

function Home() {
  const [count, setCount] = useState(0);

  return (
    <main className="text-center text-[#003049] bg-[#fdf0d5] min-h-screen dark:bg-[#003049] dark:text-[#fdf0d5]">
      <div className="flex flex-col sm:flex-row items-center justify-between sticky top-0 bg-black/25 dark:bg-white/50 mb-5 p-3">
        <div className="text-left text-4xl font-bold">Daucode</div>
        <div className="flex gap-5 items-center">
          <a
            href="https://acrobat.adobe.com/id/urn:aaid:sc:EU:87d0e104-e412-4b6a-9c71-91f5b2d169f7"
            className="no-underline text-3xl font-bold flex items-center gap-2 border-2 border-[#003049]"
          >
            Resume
            <SiReaddotcv />
          </a>
          <Switcher />
        </div>
      </div>

      <div className="text-xl md:text-2xl lg:text-3xl relative">
        <h1>Hi I'm :</h1>
        <ul>
          <li>
            {/* a dedicated <Cover>Frontend Developer</Cover> */}a dedicated{' '}
            <span className="">Frontend Developer </span>
            that builds Experiences, not just Interfaces and
          </li>
          <li>
            a data driven, Insight Focused{' '}
            <span className="">Data Scientist</span>
            {/* Insight Focused <Cover>Data Scientist</Cover> */}
          </li>
        </ul>
      </div>

      <NavLayout />

      {/* <Navbar /> */}
    </main>
  );
}

export default Home;
