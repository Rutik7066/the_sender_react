import { MdDelete } from "react-icons/md";
import { FiUpload } from "react-icons/fi";
import { AiFillFileText as FileIcon } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { setAttachment } from "../../Redux/CampSlice";

function Attachment() {
  const file = useSelector((state) => state.newcampaign.attachment);
  const dis = useDispatch();
  async function onFilePick(f) {
    const pickedFile = f.target.files[0];
    if (pickedFile !== null) {
      dis(setAttachment({ attachment: [...file,pickedFile] }));
    }
  }

  function removeFile(f) {
    console.log(f);
    const remainingFiles = file.filter((file) => file.name !== f);
    dis(setAttachment({ attachment: [...remainingFiles] }));
  
  }

  let i = 0;
  const attctcom = file.map((e) => {
    i++;
    return (
      <li
        className="flex flex-row justify-around w-full bg-white px-1 "
        key={i.toString()}
      >
        <div className="select-none cursor-pointer flex flex-1 items-center ">
          <div className="flex flex-col w-10 h-10 justify-center items-center m-1">
            <FileIcon />
          </div>
          <div className="flex-1 pl-1   items-start justify-start">
            <div className="font-medium text-gray-700">{e.name}</div>
          </div>
        </div>
        <button
          onClick={() => removeFile(e.name)}
          className="mx-4   hover:bg-slate-100 rounded-full h-7 w-7 flex items-center justify-center my-auto"
        >
          <MdDelete />
        </button>
      </li>
    );
  });

  return (
    <div className="flex flex-col  w-[35rem] h-[25rem] items-center justify-center rounded-md border border-slate-300 bg-white  m-4">
      <div className="flex flex-row px-4 py-4 border-b w-full items-center justify-between">
        <div>
          <h3 className="text-lg leading-6 font-medium text-gray-900 ">
            Attactments
          </h3>
          <p className=" max-w-2xl text-sm text-gray-500 ">
            Images, Audio, Documents are accepted.
          </p>
        </div>
        <button
          type="button"
          className="p-2 relative  bg-orange-600 hover:bg-orange-500  text-white  text-center text-sm font-normal shadow-md opacity-70  ml-3  rounded-full h-15 w-15 flex  "
        >
          <input
            type="file"
            name="uploadattachment"
            id="uploadattachment"
            onChange={onFilePick}
            className="h-15 w-15 rounded-full opacity-0 absolute bottom-0 top-0 bg-transparent right-0 left-0 "
          />
          <FiUpload />
        </button>
      </div>
      <ul className="flex flex-col w-full h-full divide divide-y overflow-y-auto bg-slate-100">
        {attctcom}
      </ul>
    </div>
  );
}

export default Attachment;
