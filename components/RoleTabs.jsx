"use client";
import { useRouter, usePathname } from 'next/navigation';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AssignmentIcon from '@mui/icons-material/Assignment';

export default function RoleTabs() {
  const router = useRouter();
  const pathname = usePathname();

  const isSeekerActive = pathname === '/home';
  const isAssignerActive = pathname === '/'; // Assuming root is the Assigner page

  const handleSeekerClick = () => {
    router.push('/home');
  };

  const handleAssignerClick = () => {
    router.push('/'); // Assuming root is the Assigner page
  };

  const seekerClasses = `flex items-center gap-2 px-4 py-2 font-semibold focus:outline-none ${
    isSeekerActive
      ? 'border-b-2 border-[#003366] text-[#003366] bg-white rounded-t-lg'
      : 'text-gray-400 bg-gray-100 rounded-t-lg'
  }`;

  const assignerClasses = `flex items-center gap-2 px-4 py-2 font-semibold focus:outline-none ${
    isAssignerActive
      ? 'border-b-2 border-[#003366] text-[#003366] bg-white rounded-t-lg'
      : 'text-gray-400 bg-gray-100 rounded-t-lg'
  }`;

  return (
    <div className="flex justify-center gap-4 my-4">
      <button 
        onClick={handleSeekerClick}
        className={seekerClasses}
      >
        <AddCircleOutlineIcon />
        As Seeker
      </button>
      <button 
        onClick={handleAssignerClick}
        className={assignerClasses}
      >
        <AssignmentIcon />
        As Assigner
      </button>
    </div>
  );
} 