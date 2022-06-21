import * as React from "react";
import { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import rows from "../API/dataTable";
import { Paper } from "@mui/material";

const url = " http://localhost:8080/api/v1/inscriptions ";
const fetchApi = async () => {
  const response = await fetch(url);
  console.log(response);
};

const columns = [
  { field: "id", headerName: "ID", width: 50 },

  { field: "driverName", headerName: "Nombre del transportista", width: 170 },
  { field: "schoolName", headerName: "Nombre del colegio", width: 170 },
  { field: "address", headerName: "Dirección del colegio", width: 170 },
  { field: "location", headerName: "Localidad", width: 150 },
  { field: "email", headerName: "Email del colegio", width: 250 },
  { field: "phone", headerName: "Teléfono del colegio", width: 150 },
  { field: "directorName", headerName: "Nombre Directivo", width: 100 },
  { field: "directorSurname", headerName: "Apellido Directivo", width: 100 },
  {
    field: "date",
    headerName: "Fecha del viaje",
    width: 100,
    align: "right",
  },
  {
    field: "hour",
    headerName: "Hora del viaje",
    width: 100,
    align: "right",
  },
];

export default function DataTable() {
  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <Paper elevation={3} sx={{ m: 2 }} style={{ height: 400 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </Paper>
  );
}
