import * as React from "react";
import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Paper } from "@mui/material";
import { getAllIncriptions } from "../functions/functions";

const columns = [
  { field: "id", headerName: "#", width: 50 },
  {
    field: "nombreTransportista",
    headerName: "Nombre del transportista",
    width: 170,
  },
  {
    field: "nombreColegio",
    headerName: "Nombre del colegio",
    width: 200,
  },
  { field: "direccColegio", headerName: "Dirección del colegio", width: 170 },
  { field: "localidadColegio", headerName: "Localidad", width: 150 },
  { field: "emailColegio", headerName: "Email del colegio", width: 250 },
  { field: "telColegio", headerName: "Teléfono del colegio", width: 150 },
  { field: "nombreDirectivo", headerName: "Nombre Directivo", width: 150 },
  { field: "apellidoDirectivo", headerName: "Apellido Directivo", width: 150 },
  {
    field: "dateViaje",
    headerName: "Fecha del viaje",
    width: 100,
    align: "right",
  },
  {
    field: "timeViaje",
    headerName: "Hora del viaje",
    width: 100,
    align: "right",
  },
];

export default function DataTable() {
  var [rows, setRows] = useState([]);
  var [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const res = await getAllIncriptions();
      if (res) {
        setRows(res);
      }
    })(setLoading(false));
  }, []);

  return (
    <Paper elevation={3} sx={{ m: 2 }} style={{ height: 400 }}>
      <DataGrid
        rows={rows}
        loading={loading}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </Paper>
  );
}
