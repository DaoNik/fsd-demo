import { Link } from 'react-router';
import { ROUTES } from '@/shared';

export const HomePage = () => {
  return (
    <div>
      <h1>Главная</h1>
      <Link to={ROUTES.profile.index}>Профиль</Link>
    </div>
  );
};
