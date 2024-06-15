import "./styles/main.css";
import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import RequestBanner from "./components/request/RequestBanner";
import RequestForm from "./components/request/RequestForm";
import Voucher from "./components/services/Voucher";

function App() {
  return (
    <div className="overflow-scroll w-full flex flex-col max-w-[1700px] min-w-[1400px] mx-auto">
      <div className="mb-1">
        <Header />
      </div>
      <div className="w-full justify-center h-[40rem]">
        <Banner />
      </div>
      <div className="bg-gray-300 max-h-[550px]">
        <RequestBanner />
      </div>
      <div className="relative">
        <div className="absolute inset-0 top-0 bg-gray-300" style={{ height: '50%' }}></div>
        <div className="relative z-10">
          <RequestForm />
        </div>
        <Voucher />
      </div>
      <div>
      </div>
    </div>
  );
}

export default App;
