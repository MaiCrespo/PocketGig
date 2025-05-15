export default function ActivityCard({
  title,
  assigner,
  price,
  date,
  location,
  acceptedDate,
  image,
  status = "Upcoming",
}) {
  return (
    <div className="flex gap-3 p-3 bg-blue-50 border border-blue-200 rounded-xl mb-3 items-center">
      <img
        src={image}
        alt={title}
        className="w-16 h-16 rounded-lg object-cover"
      />
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-base text-[#003366]">{title}</h3>
          <span className="bg-blue-500 text-white text-xs px-3 py-1 rounded-full ml-2">
            {status}
          </span>
        </div>
        <div className="text-xs text-gray-700 font-medium">
          Gig Assigner: <span className="font-bold">{assigner}</span>
        </div>
        <div className="text-sm text-gray-700 mt-1">
          {price} • {date} • {location}
        </div>
        <div className="text-xs text-gray-500 mt-1">
          Accepted on {acceptedDate}
        </div>
      </div>
    </div>
  );
}
