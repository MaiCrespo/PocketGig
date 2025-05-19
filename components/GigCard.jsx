import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";
import ExpandCircleDownRoundedIcon from "@mui/icons-material/ExpandCircleDownRounded";
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';

export default function GigCard({
  title,
  user,
  rating,
  price,
  dueDate,
  distance,
  description,
  image,
  expanded,
  onExpand,
  onApply,
  onMessage,
  isFavorite,
  onFavorite,
}) {
  return (
    <div className="bg-white border border-blue-100 rounded-xl p-3 mb-4 shadow-sm">
      <div className="flex items-start gap-3">
        <img
          src={image}
          alt={title}
          className="w-14 h-14 rounded-lg object-cover"
        />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-base text-[#003366]">{title}</h2>
            <div className="flex items-center justify-between gap-2">
              <button onClick={onFavorite} type="button">
                {isFavorite ? (
                  <FavoriteIcon className="text-[#007EA7]" />
                ) : (
                  <FavoriteBorderIcon className="text-[#007EA7]" />
                )}
              </button>
              <button onClick={onExpand} className=" text-[#003459]">
                <ExpandCircleDownRoundedIcon
                  fontSize="large"
                  className={expanded ? "rotate-180 transition-transform" : ""}
                />
              </button>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-sm font-semibold text-[#003366]">{user}</span>
            <span className="flex items-center bg-yellow-100 text-yellow-800 text-xs font-bold px-2 py-0.5 rounded ml-1">
              <StarIcon className="text-yellow-500 mr-1" fontSize="small" />
              {rating}
            </span>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            <span className="bg-blue-100 text-[#007EA7] text-xs px-2 py-1 rounded font-semibold">
              {price}/gig
            </span>
            <span className="bg-blue-100 text-[#007EA7] text-xs px-2 py-1 rounded font-semibold">
              Due {dueDate}
            </span>
            <span className="bg-blue-100 text-[#007EA7] text-xs px-2 py-1 rounded font-semibold">
              {distance} away
            </span>
          </div>
        </div>
      </div>
      <div className="mt-2 text-sm text-gray-700">{description}</div>
      {expanded && (
        <div className="mt-3">
          <button
            onClick={onApply}
            className="w-full bg-[#0593D5] text-white py-2 rounded-lg font-semibold flex items-center justify-center mb-2"
          >
            <span className="mr-2"> <TaskAltOutlinedIcon fontSize="small" /></span> Apply
          </button>
          <button
            onClick={onMessage}
            className="w-full border border-blue-200 bg-blue-50 text-[#003366] py-2 rounded-lg font-semibold flex items-center justify-center"
          >
            <span className="mr-2 "><ChatBubbleOutlineOutlinedIcon fontSize="small" /></span> Message
          </button>
        </div>
      )}
    </div>
  );
}
