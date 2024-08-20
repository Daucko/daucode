import { Outlet } from 'react-router';
import Nav from './Nav';

const NavLayout = () => {
  return (
    <main className="max-w-5xl mx-auto p-4">
      <Nav />
      <Outlet />
    </main>
  );
};
export default NavLayout;
