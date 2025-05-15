export default function Tabs() {
  return (
    <div className="flex justify-around bg-white shadow-md">
      <button className="py-2 px-4 w-full text-center font-medium text-gray-500">
        As Seeker
      </button>
      <button className="py-2 px-4 w-full text-center font-medium border-b-2 border-blue-500">
        As Assigner
      </button>
    </div>
  );
}
