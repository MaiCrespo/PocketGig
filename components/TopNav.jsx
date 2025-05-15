import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MenuIcon from '@mui/icons-material/Menu';

export default function TopNav() {
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-white shadow-sm">
      <div className="flex items-center gap-2">
        <img src="/logo.png" alt="PocketGig Logo" className="w-8 h-8" />
        <span className="font-bold text-xl text-[#003366]">PocketGig</span>
      </div>
      <div className="flex items-center gap-4">
        <NotificationsNoneIcon className="text-[#003366]" />
        <MenuIcon className="text-[#003366]" />
      </div>
    </header>
  );
} 