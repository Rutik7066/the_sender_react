import { DataGrid, GridToolbarExport } from "@mui/x-data-grid";
import { doc, onSnapshot, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { auth, store } from "../Fireop";

function Profile() {
  const rows = [
    // {
    //   id: 1,
    //   paymentmethod: "Cash",
    //   amount : '1000',
    //   date: "01/01/2022",
    //   time: "01:10",
    //   Credit: "1000",
    //   status : 'Failed'
    // },
  ];

  const columns = [
    { field: "id", headerName: "Index", width: 150 },
    { field: "paymentmethod", headerName: "Payment Method", width: 150 },
    { field: "amount", headerName: "Amount", width: 150 },
    { field: "date", headerName: "Date", width: 150 },
    { field: "time", headerName: "Time", width: 150 },
    { field: "Credit", headerName: "Credit", width: 150 },
    { field: "status", headerName: "Status", width: 150 },
  ];
  const [user, setUser] = useState({
    bussines: "",
    crd: "",
    name: "",
    number: "",
  });
  useEffect(() => {
    const email = JSON.parse(localStorage.getItem("email"));
    const q = query(doc(store, "user", email));
    onSnapshot(q, (doc) => {
      const userData = doc.data();
      setUser({
        bussines: userData["Business"],
        crd: userData["Credit"],
        name: userData["Name"],
        number: userData["Number"],
      });
    });
  }, []);

  return (
    <div className="flex  flex-col items-start justify-start w-full h-full px-5">
      <h1 className="w-full p-4 text-xl text-slate-700 font-semibold">
        Profile
      </h1>
      <div className="flex flex-col items-center justify-start w-full px-1">
        <h1 className="text-base font-medium w-full text-slate-800 ">
          Name : {user.name}
        </h1>
        <h1 className="text-base font-medium w-full text-slate-800 ">
          Number : {user.number}
        </h1>
        <h1 className="text-base font-medium w-full text-slate-800 ">
          Credit : {user.crd}
        </h1>
        <h1 className="text-base font-medium w-full text-slate-800 ">
          Bussiness Name : {user.bussines}
        </h1>
      </div>

      <div className="flex flex-col items-center justify-center w-full h-full">
        <DataGrid
          className=" w-full h-full p-5 m-4 shadow-lg"
          rows={rows}
          columns={columns}
          components={{
            Toolbar: GridToolbarExport,
          }}
        />
      </div>
    </div>
  );
}

export default Profile;
