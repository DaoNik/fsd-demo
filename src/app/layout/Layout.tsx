import { Outlet } from 'react-router';
import { Footer } from '../../shared';

export function Layout() {
  return (
    <>
      <header>Header</header>
      <Outlet />
      <Footer />
    </>
  );
}
