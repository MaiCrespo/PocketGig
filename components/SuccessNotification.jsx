import { useState, useEffect } from 'react';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CloseIcon from '@mui/icons-material/Close';

export default function SuccessNotification({
  isOpen,
  onClose,
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const timeout = setTimeout(() => {
        setIsVisible(true);
      }, 50);

      const hideTimer = setTimeout(() => {
        setIsVisible(false);
      }, 4000); 

      return () => {
        clearTimeout(timeout);
        clearTimeout(hideTimer);
      };
    } else {
      setIsVisible(false);
    }
  }, [isOpen]);

  if (!isOpen && !isVisible) return null;

  return (
    <div
      className={`fixed top-14 left-1/2 transform -translate-x-50% w-90 bg-green-100 border border-green-400 text-green-800 px-4 py-3 rounded-lg shadow-md z-40 flex items-center justify-between
        transition-transform duration-500 ease-out
        ${isVisible ? 'translate-y-0' : '-translate-y-[150%]'}
      `}
      style={{ transform: isVisible ? 'translateX(-50%)' : 'translateX(-50%) translateY(-150%)' }}
    >
      <div className="flex items-center">
        <CheckCircleOutlineIcon className="text-green-600 mr-2" />
        <div>
          <strong className="font-bold">Success!</strong>
          <span className="block text-sm">Your application has been submitted!</span>
        </div>
      </div>
      <button onClick={onClose} className="ml-4">
        <CloseIcon className="text-green-600" fontSize="small" />
      </button>
    </div>
  );
} 