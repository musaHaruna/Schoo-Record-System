import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import "./Table.css";
import React from "react";
import DeleteModal from "../../DeleteModal";
import { Link } from "react-router-dom";

const NewTeachersTable = ({ row, columns, link, page }) => {
  const handleDelete = (id) => {};

  const actionColumn = {
    field: "action",
    headerName: "Actions",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="flex items-center w-full actionButton h-full gap-2 cursor-pointer">
          <Link to={`/admin/${link}/${params.row.id}`}>
            <span className="text-[#3ec555] viewAction outline-1 p-2   ">
              {" "}
              View
            </span>
          </Link>
          <Link to={`/admin/${link}/${params.row.id}/edit`}>
            <span className="text-[#3ec555] editAction outline-1 p-2   ">
              {" "}
              Edit
            </span>
          </Link>
          <div
            className="deleteAction"
            onClick={() => handleDelete(params.row.id)}
          >
            <span className="text-[#e90404]">
              <DeleteModal type={"teacher"} id={params.row.id} />
            </span>
          </div>
        </div>
      );
    },
  };

  return (
    <div>
      <DataGrid
        className="dataTableBg p-[20px]"
        rows={row}
        columns={[...columns, actionColumn]}
        //  getRowId={generateUniqueId}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 8,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  );
};

export default NewTeachersTable;
