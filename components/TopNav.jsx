import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MenuIcon from "@mui/icons-material/Menu";

export default function TopNav() {
  return (
    <header className="fixed top-0 left-1/2 transform -translate-x-1/2 max-w-sm w-full z-10 bg-white shadow-sm flex items-center justify-between px-4 py-3">
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
