import { useDispatch} from "react-redux";
import { setMessage } from "../../Redux/CampSlice";

function MessageInput() {
  const dis = useDispatch();
  const valueOnChange = (v) => {
    v.preventDefault();
    dis(setMessage({ message: v.target.value }));
  };
  return (
    <div className="w-[35rem] h-[25rem] shadow m-4 flex-col bg-slate-100">
      <textarea
        name="message"
        onChange={valueOnChange}
        placeholder={"Type Message Here......"}
        className="min-h-full max-h-full  placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md p-2  
        font-normal
        text-slate-800 
        focus:outline-none  "
      />
    </div>
  );
}

export default MessageInput;
