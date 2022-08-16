import { useDispatch, useSelector } from "react-redux";
import ErrorAlert, { PendingAlert, Submited } from "../components/Alert";
import {
  NewCampaignToFirebase,
  setContact,
  setDelay,
  setTitle,
} from "../Redux/CampSlice";
import Attachment from "./NewCampaign/Attachment";
import MessageInput from "./NewCampaign/MessageInput";

export default function NewCampaign() {
  const status = useSelector((state) => state.newcampaign);
  const dis = useDispatch();
  const handleDelayChange = (e) => {
    e.preventDefault();
    dis(setDelay({ delay: e.target.value }));
  };
  const handleContactChange = (f) => {
    f.preventDefault();
    const pickedFile = f.target.files[0];
    if (pickedFile !== null) {
      
      dis(setContact({ contact: pickedFile }));
    }
  };
  const handletitle = (e) => {
    e.preventDefault();
    dis(setTitle({ title: e.target.value }));
  };
  const campignAdd = () => {
    dis(NewCampaignToFirebase(status));
  };

  const MyAlert = () => {
    if (status.pending === true) {
      return <PendingAlert />;
    } else if (status.fulfilled === true) {
      return <Submited />;
    } else if (status.rejected === true) {
      return <ErrorAlert />;
    }else{
      <div></div>
    }
  };

  return (
    <div className="flex flex-col items-start justify-start h-full w-full">
      <h1 className="w-full p-4 text-xl text-slate-700 font-semibold">
        New Campaign
      </h1>

      <div className="flex flex-col items-center  justify-start  w-full">
        <div className="flex flex-col items-start justify-start w-fit">
          <div className="flex flex-row items-center justify-between w-full">
            <input
              onChange={handletitle}
              className="mx-5 placeholder:text-slate-400 block bg-white w-[20rem] border border-slate-300 rounded-md p-2 shadow-sm focus:outline-none focus:border-slate-300"
              placeholder="Camapaign Title"
              type="text"
              name="search"
            />
            <MyAlert />
          </div>

          <div className="flex flex-row items-start justify-center w-full h-full">
            {/* Attactment */}
            <Attachment />
            {/* Attactment */}
            {/* Message Input */}
            <MessageInput />
            {/* Message Input */}
          </div>
          <input
            onChange={handleContactChange}
            type="file"
            className="text-sm text-slate-800
       file:py-2 file:px-3
       file:mr-5
       my-5
        mx-4 file:border-0 file:rounded-sm file:text-sm file:font-semibold file:text-white file:bg-orange-600 hover:file:bg-orange-500"
          />
          <div className="flex flex-row items-center justify-between px-4 w-full my-2">
            <input
              onChange={handleDelayChange}
              className=" placeholder:text-slate-400 block bg-white w-[20rem] border border-slate-300 rounded-md p-2 shadow-sm focus:outline-none focus:border-slate-300"
              placeholder="Enter delay time in seconds (Default is 2)"
              type="text"
              name="search"
            />

            <button
              onClick={campignAdd}
              className="bg-orange-600 hover:bg-orange-500 rounded-sm px-3 py-2  text-white font-semibold text-sm"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
