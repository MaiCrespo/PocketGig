import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AssignmentIcon from '@mui/icons-material/Assignment';

export default function RoleTabs() {
  return (
    <div className="flex justify-center gap-4 my-4">
      <button className="flex items-center gap-2 px-4 py-2 border-b-2 border-[#003366] text-[#003366] font-semibold bg-white rounded-t-lg focus:outline-none">
        <AddCircleOutlineIcon />
        As Seeker
      </button>
      <button className="flex items-center gap-2 px-4 py-2 text-gray-400 font-semibold bg-gray-100 rounded-t-lg cursor-not-allowed" disabled>
        <AssignmentIcon />
        As Assigner
      </button>
    </div>
  );
} 