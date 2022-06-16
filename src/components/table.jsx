import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import rows from "../API/dataTable";
import { Paper } from "@mui/material";

const columns = [
  { field: "id", headerName: "ID", width: 50 },

  { field: "driverName", headerName: "Nombre del transportista", width: 170 },
  { field: "schoolName", headerName: "Nombre del colegio", width: 170 },
  { field: "adress", headerName: "Dirección del colegio", width: 170 },
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
  return (
    <Paper elevation={3} sx={{ mt: 7 }} style={{ height: 400 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </Paper>
  );
}
