export default function NoCallOutFees() {
  return (
    <div className="-skew-x-12 relative flex items-center justify-center bg-blue-500/90 p-4 w-44 h-44">
      <div className="absolute inset-0 border-4 border-dashed border-white m-3"></div>
      <div className="relative skew-x-12 text-white font-bold text-center leading-tight">
        <div className="text-[3.5rem] font-black mb-1">$0</div>
        <div className="text-lg mb-2">
          No Call Out
          <br />
          Fees*
        </div>
      </div>
    </div>
  );
}
