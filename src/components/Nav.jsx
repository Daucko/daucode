import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="mt-20">
      <div className="flex items-center justify-around dark:text-white [perspective:1000px] border-b-2 border-[#669bbc]">
        <Link
          to="/"
          className={`px-1 md:px-3 py-2 w-full text-lg sm:text-base font-medium ${
            isActive('/') ? 'bg-blue-600' : 'hover:bg-gray-700/15'
          }`}
        >
          ABOUT
        </Link>
        <Link
          to="/tech-stack"
          className={` px-1 md:px-3 py-2 w-full text-lg sm:text-base font-medium ${
            isActive('/tech-stack') ? 'bg-blue-600' : 'hover:bg-gray-700/15'
          }`}
        >
          TECH STACK
        </Link>
        <Link
          to="/projects"
          className={`px-1 md:px-3 py-2 w-full text-lg sm:text-base font-medium ${
            isActive('/projects') ? 'bg-blue-600' : 'hover:bg-gray-700/15'
          }`}
        >
          PROJECTS
        </Link>
        <Link
          to="/contact"
          className={`px-1 md:px-3 py-2 w-full text-lg sm:text-base font-medium ${
            isActive('/contact') ? 'bg-blue-600' : 'hover:bg-gray-700/15'
          }`}
        >
          CONTACT
        </Link>
      </div>
    </nav>
  );
};
export default Nav;
