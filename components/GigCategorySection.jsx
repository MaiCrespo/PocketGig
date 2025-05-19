import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function GigCategorySection({
  title,
  gigs,
  onClick,
  onFavorite,
}) {
  return (
    <section className="mb-4 cursor-pointer" onClick={onClick}>
      <div className="flex items-center justify-between px-1 mb-2">
        <h3 className="text-base font-semibold text-gray-800">{title}</h3>
        <ArrowForwardIosIcon className="text-gray-400" fontSize="small" />
      </div>
      <div className="flex gap-3 overflow-x-auto pb-2">
        {gigs.map((gig, idx) => (
          <div
            key={idx}
            className="relative min-w-[120px] h-[110px] rounded-xl overflow-hidden shadow-sm bg-white"
          >
            <img
              src={gig.image}
              alt={gig.title}
              className="w-full h-full object-cover"
            />

            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#003459] to-transparent p-2 flex items-center justify-between">
              <span className="text-white text-xs font-semibold drop-shadow">
                {gig.title}
              </span>
              <div className="rounded-full p-1">
                <button onClick={() => onFavorite(idx)} type="button">
                  {gig.isFavorite ? (
                    <FavoriteIcon className="text-white" fontSize="small" />
                  ) : (
                    <FavoriteBorderIcon
                      className="text-white"
                      fontSize="small"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
