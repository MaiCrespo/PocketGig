import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function GigCategorySection({ title, gigs }) {
  return (
    <section className="mb-4">
      <div className="flex items-center justify-between px-1 mb-2">
        <h3 className="text-base font-semibold text-gray-800">{title}</h3>
        <ArrowForwardIosIcon className="text-gray-400" fontSize="small" />
      </div>
      <div className="flex gap-3 overflow-x-auto pb-2">
        {gigs.map((gig, idx) => (
          <div key={idx} className="relative min-w-[120px] h-[110px] rounded-xl overflow-hidden shadow-sm bg-white">
            <img src={gig.image} alt={gig.title} className="w-full h-full object-cover" />
            <div className="absolute top-2 right-2 bg-white bg-opacity-80 rounded-full p-1">
              <FavoriteBorderIcon className="text-gray-500" fontSize="small" />
            </div>
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-2">
              <span className="text-white text-xs font-semibold drop-shadow">{gig.title}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 