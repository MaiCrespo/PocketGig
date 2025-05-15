export default function CreationFooter() {
  return (
    <div className=" bg-blue-900 border-t border-gray-300 p-5 fixed bottom-0 w-full max-w-sm">
      <div className="flex flex-col space-y-4">
        <button className="w-full py-3 text-white bg-sky-600 rounded-md text-lg font-light hover:bg-sky-700">
          Proceed
        </button>
        <button className="w-full py-3 text-sky-600 bg-white border border-sky-600 rounded-md text-lg font-light hover:bg-sky-50">
          Save to Drafts
        </button>
        <button className="w-full py-3 text-sky-600 bg-white border border-sky-600 rounded-md text-lg font-light hover:bg-sky-50">
          Delete
        </button>
      </div>
    </div>
  );
}
