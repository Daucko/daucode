import { BsTwitterX } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa6';

const Socials = () => {
  return (
    <main className="social-main left-[2px] md:left-4">
      <header className="fancy">
        <div className="relative w-12 h-[10.5rem] flex flex-col items-center gap-3 bg-gray-50 dark:bg-black pt-5 mx-auto my-1 rounded-[50px]">
          <a href="https://x.com/DaucooOfLife" className="cursor-pointer">
            <BsTwitterX className="h-9 w-9" />
          </a>
          <a
            href="linkedin.com/in/dauda-tijani-529ba0ab"
            className="cursor-pointer"
          >
            <FaLinkedin className="h-9 w-9" />
          </a>
          <a href="https://github.com/Daucko" className="cursor-pointer">
            <FaGithub className="h-9 w-9" />
          </a>
        </div>
      </header>
    </main>
  );
};
export default Socials;
