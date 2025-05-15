export default function Stepper() {
  return (
    <div className="flex items-center justify-center  mt-6 w-auto mx-10">
      <div className="flex items-center">
        <div>
          <div className="w-8 h-8 flex items-center justify-center text-white rounded-full border-1 font-bold bg-sky-600">
            1
          </div>
          <p className="absolute w-13 text-center -ml-3 text-sm pt-1 text-sky-600">
            Job details
          </p>
        </div>

        <div className=" h-[0.1] w-24 bg-sky-600"></div>
      </div>

      <div className="flex items-center">
        <div>
          <div className="w-8 h-8 flex items-center justify-center text-white rounded-full border-1 font-bold bg-sky-600">
            2
          </div>
          <p className="absolute w-13 text-center -ml-3 text-sm pt-1 text-sky-600">
            Duration & Price
          </p>
        </div>

        <div className="h-[0.1] w-24 bg-sky-600"></div>
      </div>

      <div>
        <div>
          <div className="w-8 h-8 flex items-center justify-center text-white rounded-full border-1 font-bold bg-sky-600">
            3
          </div>
          <p className="absolute w-13 text-center -ml-3 text-sm pt-1 text-sky-600">
            Summary
          </p>
        </div>
      </div>
    </div>
  );
}
