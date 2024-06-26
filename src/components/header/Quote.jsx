export default function Quote() {
  return (
    <div className="flex items-center space-x-4 h-[60%] font-semibold">
      <div className="hover:opacity-80 hover:cursor-pointer px-5 h-full -skew-x-12 bg-light-blue text-white flex items-center min-w-max">
        <p className="skew-x-12">Get a free quote</p>
      </div>
      <div className="hover:opacity-80 hover:cursor-pointer px-5 h-full -skew-x-12 bg-transparent border border-white text-white flex items-center min-w-max">
        <p className="skew-x-12">1300 00 000</p>
      </div>
    </div>
  );
}
