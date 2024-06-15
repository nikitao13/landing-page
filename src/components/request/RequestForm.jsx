export default function RequestForm() {
  return (
    <div className="relative w-[90%] mx-auto bg-white flex flex-col h-[17rem] pb-2 shadow-md">
      <div className="flex items-center justify-around pt-4 mb-6">
        <h1 className="mt-4 text-black/90 leading-none tracking-tighter font-bold antialiased text-3xl">
          Describe your <span className="text-blue-500/100">plumbing</span>{" "}
          requirement to get a quote
        </h1>
        <p className="self-end tracking-wide text-xs">
          Your information is 100% safe and secure
        </p>
        <p className="self-end tracking-wide text-xs">
          You will receive a response within minutes
        </p>
      </div>
      <form className="w-[90%] px-10 pb-8">
        <input
          className="border border-slate-300 mb-4 w-full p-2"
          type="text"
          placeholder="Your Name"
        ></input>
        <input
          className="border border-slate-300 mb-4 w-full p-2"
          type="text"
          placeholder="Phone Number"
        ></input>
        <button className="bg-blue-500 text-white px-6 py-2 rounded">
          Get a free quote
        </button>
      </form>
    </div>
  );
}
