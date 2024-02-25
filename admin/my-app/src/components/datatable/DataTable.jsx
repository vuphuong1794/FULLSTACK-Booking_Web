import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import datatableSource, { userColumns, userRows } from "../../datatableSource";
import "./dataTable.scss";
import { Link } from "react-router-dom";
import useFetch from "../../hook/useFetch";

const DataTable = () => {
  const {data, loading, error} = useFetch("http:/localhost:8800/users")

  const handleDelete = (id) => {
    //setData(data.filter((item) => item.id !== id));
  };
  const actionColumn = {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="cellAction">
          <Link to="/users/test" style={{ textDecoration: "none" }}>
            <div className="viewBtn">View</div>
          </Link>
          <div
            className="deleteBtn"
            onClick={() => handleDelete(params.row.id)}
          >
            Delete
          </div>
        </div>
      );
    },
  };
  return (
    <div className="datatable">
      <Link to="/users/new" style={{textDecoration: "none", color: "green", fontWeight: "bold"}}>
        <div className="dataTableTitle">Add New User</div>
      </Link>
      <DataGrid
        rows={data}
        columns={userColumns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default DataTable;
