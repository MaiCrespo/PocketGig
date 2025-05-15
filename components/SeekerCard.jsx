import ChatIcon from "@mui/icons-material/Chat";

export default function SeekerCard({
  name,
  rating,
  imageSrc,
  description,
}) {
  return (
    <div className="flex items-center border rounded-lg p-4 bg-white shadow-md">
      <img
        src={imageSrc}
        alt={name}
        className="w-12 h-12 rounded-full object-cover"
      />
      <div className="ml-4 flex-grow">
        <h3 className="font-bold">{name}</h3>
        <p className="text-sm text-gray-500">{description}</p>
        <p className="text-sm text-yellow-500">{`⭐ ${rating}`}</p>
      </div>
      <button className="p-2 bg-blue-500 text-white rounded-lg">
        <ChatIcon fontSize="small" />
      </button>
    </div>
  );
}
