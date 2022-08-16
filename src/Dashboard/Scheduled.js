import { DataGrid } from "@mui/x-data-grid";
import { width } from "@mui/system";

function Scheduled() {
  const rows = [
    {
      id: 1,
      title: "Offer",
      datecreated: "01/01/2022",
      sheduleddate: "01/12/2022",
      status: "pending",
    },
    {
      id: 2,
      title: "Offer",
      datecreated: "01/01/2022",
      sheduleddate: "01/12/2022",
      status: "pending",
    },
    {
      id: 3,
      title: "Offer",
      datecreated: "01/01/2022",
      sheduleddate: "01/12/2022",
      status: "pending",
      report: "link",
    },
    {
      id: 4,
      title: "Offer",
      datecreated: "01/01/2022",
      sheduleddate: "01/12/2022",
      status: "pending",
      report: "link",
    },
    {
      id: 5,
      title: "Offer",
      datecreated: "01/01/2022",
      sheduleddate: "01/12/2022",
      status: "pending",
      report: "link",
    },
    {
      id: 6,
      title: "Offer",
      datecreated: "01/01/2022",
      sheduleddate: "01/12/2022",
      status: "pending",
    },
    {
      id: 7,
      title: "Offer",
      datecreated: "01/01/2022",
      sheduleddate: "01/12/2022",
      status: "pending",
    },
    {
      id: 8,
      title: "Offer",
      datecreated: "01/01/2022",
      sheduleddate: "01/12/2022",
      status: "pending",
    },
    {
      id: 9,
      title: "Offer",
      datecreated: "01/01/2022",
      sheduleddate: "01/12/2022",
      status: "pending",
    },
    {
      id: 10,
      title: "Offer",
      datecreated: "01/01/2022",
      sheduleddate: "01/12/2022",
      status: "pending",
    },
    {
      id: 11,
      title: "Offer",
      datecreated: "01/01/2022",
      sheduleddate: "01/12/2022",
      status: "pending",
    },
  ];

  const columns = [
    { field: "id", headerName: "Index", width: 150 },
    { field: "title", headerName: "Title", width: 150 },
    { field: "datecreated", headerName: "Created Data", width: 150 },
    { field: "sheduleddate", headerName: "Scheduled Date", width: 150 },
    { field: "status", headerName: "Status", width: 150 },
  ];

  return (
    <div className="flex  flex-col items-start justify-start h-full w-full">
      <h1 className="w-full p-4 text-xl text-slate-700 font-semibold">
        Scheduled Campaign
      </h1>
      <div className="flex flex-col items-center justify-center w-full h-full">
        <DataGrid
          className="w-full h-full p-5 m-4"
          rows={rows}
          columns={columns}
        />
      </div>
    </div>
  );
}

export default Scheduled;
