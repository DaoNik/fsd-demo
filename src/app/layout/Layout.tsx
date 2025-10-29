import { Outlet } from 'react-router';
import { Footer } from '@/shared';
import { useUserStore } from '@/entities';

export function Layout() {
  const { profile } = useUserStore();

  return (
    <>
      <header>Header</header>
      {profile}
      <Outlet />
      <Footer />
    </>
  );
}
