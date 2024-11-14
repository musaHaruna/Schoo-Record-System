import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import "./Table.css";
import React from "react";
import DeleteModal from "../DeleteModal";
import { Link } from "react-router-dom";
import SingleAssessment from "../../pages/admin/Pages/assessments/SingleAssessment";

const AssessmentsTable = ({ row, columns, link, page }) => {
  const handleDelete = (id) => {};

  const subjectColumn = {
    field: "subjectId",
    headerName: "Subject",
    width: 200,
    renderCell: (params) => {
      return <div>{params.row.subject.subjectName}</div>;
    },
  };
  const classColumn = {
    field: "classId",
    headerName: "Class",
    width: 200,
    renderCell: (params) => {
      return <div>{params.row.class.name}</div>;
    },
  };
  const termColumn = {
    field: "termId",
    headerName: "Term",
    width: 200,
    renderCell: (params) => {
      return <div>{params.row.term.name}</div>;
    },
  };

  const actionColumn = {
    field: "action",
    headerName: "Actions",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="flex items-center w-full actionButton h-full gap-2 cursor-pointer">
          <SingleAssessment id={params.row.id} />

          <div
            className="deleteAction"
            onClick={() => handleDelete(params.row.id)}
          >
            <span className="text-[#e90404]">
              <DeleteModal type={"assessment"} id={params.row.id} />
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
        columns={[
          ...columns,
          subjectColumn,
          classColumn,
          termColumn,
          actionColumn,
        ]}
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

export default AssessmentsTable;
