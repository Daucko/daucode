import { useState } from 'react';
// import { Cover } from './components/Cover';
// import Nav from './components/Nav';
// import { Outlet } from 'react-router';
import NavLayout from './components/NavLayout';

function Home() {
  const [count, setCount] = useState(0);

  return (
    <main className="text-center text-[#003049] bg-[#fdf0d5] min-h-screen">
      <div className="text-left text-4xl font-bold sticky top-0 bg-black/10 mb-5 p-3">
        Daucode{' '}
      </div>
      <div className="text-xl md:text-2xl lg:text-3xl relative">
        <h1>Hi I'm :</h1>
        <ul>
          <li>
            {/* a dedicated <Cover>Frontend Developer</Cover> */}a dedicated{' '}
            <span className="">Frontend Developer</span>
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
