export default function Availability() {
  return (
    <div className="flex items-center text-sm h-[60%] font-thin whitespace-nowrap">
      <div className="flex items-center h-[100%]">
        <div className="flex items-center border-x border-gray-300/30 h-[100%] -skew-x-12">
          <span className="text-white pl-4 skew-x-12">
            <p>We&apos;re Available</p>
          </span>
          <div className="bg-green-500 rounded-full mx-3 my-2 w-3 h-3 skew-x-12 shadow-green-500 shadow-lg"></div>
          <span className="text-white pr-4 skew-x-12">
            <p>11:12am</p>
          </span>
        </div>
      </div>
    </div>
  );
}
