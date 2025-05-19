import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export default function GigListHeader({ title, onBack }) {
  return (
    <header className="fixed top-0 left-1/2 transform -translate-x-1/2 max-w-sm w-full z-10 bg-white shadow-sm flex items-center justify-between px-4 py-3">
      <button onClick={onBack} className="">
        <ArrowBackIosNewIcon className="text-[#003366]" />
      </button>
      <h1 className="flex-1 text-center font-bold text-lg text-[#003366]">{title}</h1>
      <div className="w-6">{/* spacing */}</div>
    </header>
  );
} 