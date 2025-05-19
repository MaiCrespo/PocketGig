export default function SearchBar() {
  return (
    <div className="flex items-center space-x-2">
      <input
        type="text"
        placeholder="Search"
        className="flex-grow border-1 border-gray-300 rounded-lg px-6 py-2 text-gray-500"
      />
      <button className="p-2 bg-blue-500 text-white rounded-lg">
        <span className="material-icons">location</span>
      </button>
    </div>
  );
}
