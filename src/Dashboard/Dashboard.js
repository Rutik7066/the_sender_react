// import Campaign from "./NewCampaign";
import Header from "./Header";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import { campiagnstore } from "../Redux/Campstore";
function Dashboard() {
  return (
    // Base
    <div className="flex h-screen w-full bg-gray-100 pb-2">
      {/* SideBar */}
      <div className="flex flex-none flex-col bg-white shadow-lg h-full">
        <h1 className="my-5 mx-14 font-semibold text-2xl text-blue-700">
          thesender.in
        </h1>
        <NavBar />
      </div>
      {/* Content */}
      <div className="flex grow flex-col items-start justify-center h-full w-full  ">
        <Header />
        <div className="flex flex-grow items-center justify-center h-full w-full ">
            <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
