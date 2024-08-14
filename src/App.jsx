import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Cover } from './components/Cover';

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="text-center">
      <h1 className="text-xl md:text-2xl lg:text-3xl">
        Hi I'm Dauda Tijani :
        <ul>
          <li>
            a dedicated <Cover>Frontend Developer</Cover> that builds
            Experiences, Not Just Interfaces and
          </li>
          <li>
            a data driven, Insight Focused <Cover>Data Scientist</Cover>
          </li>
        </ul>
      </h1>
      <Navbar />
    </main>
  );
}

export default App;
