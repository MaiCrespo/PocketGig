export default function InputField({
  id,
  label,
  placeholder = "",
  isTextarea = false,
  rows = 3,
}) {
  return (
    <div className="relative z-0 w-full mb-7 group">
      {isTextarea ? (
        <textarea
          name={id}
          id={id}
          rows={rows}
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-1 rounded-md border-b-2 border-sky-400 appearance-none focus:outline-none focus:ring-0 focus:border-sky-600 peer resize-none"
          placeholder={placeholder}
        ></textarea>
      ) : (
        <input
          type="text"
          name={id}
          id={id}
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-1 rounded-md border-b-2 border-sky-400 appearance-none focus:outline-none focus:ring-0 focus:border-sky-600 peer"
          placeholder={placeholder}
        />
      )}
      <label
        htmlFor={id}
        className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-8 peer-focus:text-sky-600 pl-3"
      >
        {label}
      </label>
    </div>
  );
}
