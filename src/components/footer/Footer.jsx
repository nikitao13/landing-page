export default function Footer() {
  const footerStyles = {
    col: "flex flex-col text-white gap-4",
    title: "text-2xl font-bold",
    text: "text-base tracking-tight hover:opacity-80 hover:cursor-pointer"
  };
  return (
    <div className="h-[390px] bg-[#003256] w-full antialiased">
      <div className="flex w-full justify-between px-28  pb-12 pt-10">
        <div className="w-1/4 flex h-[120px] rounded-lg bg-white items-center justify-center">
          <h1 className="text-5xl font-extrabold text-[#003256]">LOGO</h1>
        </div>
        <div className={footerStyles.col}>
          <h1 className={footerStyles.title}>Services</h1>
          <div className="w-[30%] border-t border-[#03aeff] border-2"></div>
          <p className={footerStyles.text}>Blocked drains</p>
          <p className={footerStyles.text}>Hot Water</p>
          <p className={footerStyles.text}>Repairs & Maintenance</p>
          <p className={footerStyles.text}>View All Services</p>
        </div>
        <div className={footerStyles.col}>
          <h1 className={footerStyles.title}>Quick Links</h1>
          <div className="w-[30%] border-t border-[#03aeff] border-2"></div>
          <p className={footerStyles.text}>Services</p>
          <p className={footerStyles.text}>About us</p>
          <p className={footerStyles.text}>FAQ</p>
        </div>
        <div className={footerStyles.col}>
          <h1 className={footerStyles.title}>Contact us</h1>
          <div className="w-[30%] border-t border-[#03aeff] border-2"></div>
          <p className={footerStyles.text}>P: 1300 000 000</p>
          <p className={footerStyles.text}>E: info@plumber.com.au</p>
          <div className="hover:opacity-80 hover:cursor-pointer mt-2 text-sm -skew-x-12 flex items-center justify-center font-semibold whitespace-nowrap h-[25%] w-[96%] bg-white text-blue-500 py-2 px-4">
            <p className="skew-x-12">Get a free quote</p>
          </div>
        </div>
      </div>
      <div className="w-[88%] border-t border-white/40 mx-auto"></div>
      <div className="flex justify-between mt-6 text-white  w-[88%] mx-auto font-light items-center">
        <div className="flex">
          <p>
            ©2023. All rights reserved. Heres our{" "}
            <a
              href="#"
              className="font-bold"
            >
              {" "}
              Terms and Conditions
            </a>{" "}
            and
            <a
              href="#"
              className="font-bold"
            >
              {" "}
              Privacy Policy.
            </a>
          </p>
        </div>
        <div className="flex gap-2">
          <p>Services by</p>
          <a
            className="hover:opacity-80 hover:cursor-pointer"
            href="https://mediaco.com.au"
          >
            {" "}
            <img
              className="h-[25px] w-[120px]"
              src="https://mediaco.com.au/wp-content/uploads/2020/05/Mediaco-logo-white-yellow.png"
              alt="logo"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
