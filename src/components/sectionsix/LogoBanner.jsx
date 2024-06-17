export default function LogoBanner() {
  return (
    <section className="flex bg-gray-300 w-full h-[380px]">
      <div className="w-2/6 flex items-center justify-center">
        <div className="h-[250px] w-[250px] bg-white rounded-full flex items-center justify-center">
          <h1 className="font-bold text-5xl text-[#024881]">LOGO</h1>
        </div>
      </div>

      <div className="w-4/6 pr-40 flex flex-col justify-center">
        <h1 className="text-4xl font-bold mb-8">
          At the end of the day, our goal is simple: to provide reliable,
          exceptional plumbing services that exceed expecations
        </h1>
        <p className="text-sm tracking-wide mb-5 w-[75%] pr-12">
          This dedication to customer satisfaction, along with our experience
          and technical expertise, is what sets us apart.
        </p>
        <p className="text-sm tracking-wide">
          Get started today with{" "}
          <a
            className="text-light-blue underline hover:opacity-80"
            href="#"
          >
            plumbing example
          </a>
        </p>
      </div>
    </section>
  );
}
