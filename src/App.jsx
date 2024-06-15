import "./styles/main.css";
import Header from "./components/header/Header";
import Banner from "./components/banner/Banner";
import RequestBanner from "./components/request/RequestBanner";

function App() {
  return (
    <div className="overflow-scroll w-full flex flex-col max-w-[1700px] min-w-[1400px] mx-auto">
      <div className="mb-1">
        <Header />
      </div>
      <div className="w-full justify-center h-[40rem]">
        <Banner />
      </div>
      <div className="h-full">
        <RequestBanner />
      </div>
      <div>
        <h1>test</h1>
      </div>
    </div>
  );
}

export default App;
