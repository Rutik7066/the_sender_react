import Home from "./pages/Home";
import Login from "./pages/Login";
import Scheduled from "./Dashboard/Scheduled";
import NewCampaign from "./Dashboard/NewCampaign";
import Report from "./Dashboard/Report";
import Profile from "./Dashboard/Profile";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import { Provider } from "react-redux";
import { campiagnstore } from "./Redux/Campstore";
function App() {
  return (

    <div className="h-full w-full">
    <Provider store={campiagnstore}>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Dashboard />}>
          <Route path="" element={<NewCampaign />} />
          <Route path="scheduled" element={<Scheduled />} />
          <Route path="report" element={<Report />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </Provider>
    </div>
  );
}

export default App;
