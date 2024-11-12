import { Outlet } from 'react-router-dom';
import { useThemeColors } from '../contexts/Theme.context';

export default function Layout() {
  const { theme, oppositeTheme } = useThemeColors();

  return (
		<div className={`container-xl bg-${theme} text-${oppositeTheme}`}>
      <Outlet />
    </div>
  );
}
