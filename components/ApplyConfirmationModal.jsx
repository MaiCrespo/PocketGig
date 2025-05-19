import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';

export default function ApplyConfirmationModal({
  isOpen,
  onConfirm,
  onCancel,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.25)] flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 shadow-lg w-90 mx-4">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Do you want to apply for a gig?</h2>
        <div className="border-t border-gray-200 my-4"></div> {/* Divider */}
        <div className="flex flex-col gap-3">
          <button
            onClick={onConfirm}
            className="bg-[#0593D5] text-white py-3 rounded-lg font-semibold flex items-center justify-center"
          >
            <TaskAltOutlinedIcon className="mr-2" />
            Apply
          </button>
          <button
            onClick={onCancel}
            className="text-[#0593D5] py-3 rounded-lg font-semibold"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
} 