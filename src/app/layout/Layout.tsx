import { Outlet } from 'react-router';

export function Layout() {
  return (
    <>
      <header>Header</header>
      <Outlet />
      <footer>Footer</footer>
    </>
  );
}
