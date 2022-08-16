import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { query, collection, onSnapshot, limit } from "firebase/firestore";
import { store, auth } from "../Fireop";

function Report() {
  const [rows, setRow] = useState([]);
  const columns = [
    { field: "id", headerName: "Index", width: 200 },
    { field: "title", headerName: "Title", width: 200 },
    { field: "datecreated", headerName: "Created Date", width: 200 },
    // { field: "sheduleddate", headerName: "Scheduled Date,width:200" },
    { field: "status", headerName: "Status", width: 200 },
    { field: "report", headerName: "Report", width: 200 },
  ];

  useEffect(() => {
    getRow();
  }, []);

  function getRow() {
    const email = JSON.parse(localStorage.getItem("email"));
    const q = query(collection(store, "user", email, "camp"), limit(25));
    onSnapshot(q, (querySnapshot) => {
      let i = 0;
      setRow(
        querySnapshot.docs.map((doc) => ({
          id: i++,
          title: doc.data().title,
          datecreated: doc.data().created.toDate().toDateString(),
          status: doc.data().status,
          report : ''
        }))
      );
    });
  }

  return (
    <div className="flex  flex-col items-start justify-start h-full w-full">
      <h1 className="w-full p-4 text-xl text-slate-700 font-semibold">
        Report
      </h1>
      <div className="flex flex-col items-center justify-center w-full h-full p-8">
        <DataGrid
          className="w-full h-full p-2   shadow-lg"
          rows={rows}
          columns={columns}
        />
      </div>
    </div>
  );
}

export default Report;
