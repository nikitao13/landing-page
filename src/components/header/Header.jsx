import Logo from "./Logo";
import Links from "./Links";
import Availability from "./Availability";
import Quote from "./Quote";

export default function Header() {
  return (
    <header className="w-full h-[5rem] flex justify-between items-center bg-zinc-900/95 py-1 px-8 shadow-md">
      <Logo />
      <div className="w-[50vw] flex h-[5rem] items-center justify-end gap-12">
        <Links />
        <Availability />
        <Quote />
      </div>
    </header>
  );
}
