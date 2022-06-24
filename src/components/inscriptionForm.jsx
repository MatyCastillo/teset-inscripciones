import * as React from "react";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import MapIcon from "@mui/icons-material/Map";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { deepOrange } from "@mui/material/colors";
import Stack from "@mui/material/Stack";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import SendIcon from "@mui/icons-material/Send";
import esLocale from "date-fns/locale/es";
import format from "date-fns/format";

const theme = createTheme({
  palette: {
    primary: deepOrange,
    secondary: {
      main: "#bf360c",
    },
  },
});

export default function IncriptionForm() {
  const dataPre = {
    nombreTransportista: null,
    nombreColegio: null,
    direccColegio: null,
    localidadColegio: null,
    emailColegio: null,
    telColegio: null,
    nombreDirectivo: null,
    apellidoDirectivo: null,
    dateViaje: null,
    timeViaje: null,
  };

  const [datePickerValue, setDatePickerValue] = useState(null);
  const [timePickerValue, setTimePickerValue] = useState(null);
  const [helper, setHelper] = useState("");
  const [nameFocuses, setNameFocuses] = useState(false);

  const [data, setData] = useState(dataPre);

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (data.nombreColegio == null) {
      setNameFocuses(true);
      setHelper("Campo incompleto");
    } else {
      console.log(data);
    }
  };

  const dateOnChange = (newValue) => {
    setDatePickerValue(newValue);
    setData({
      ...data,
      dateViaje: format(newValue, "dd-MM-yyyy"),
    });
  };

  const timeOnChange = (newValue) => {
    setTimePickerValue(newValue);
    setData({
      ...data,
      timeViaje: format(newValue, "HH:mm"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <MapIcon />
          </Avatar>
          {/* <Typography component="h1" variant="h5">
            Formulario de inscripción
          </Typography> */}
          <Typography component="h3" variant="h6">
            Ingrese los datos del colegio
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  onChange={handleInputChange}
                  required
                  focused={nameFocuses}
                  error={nameFocuses}
                  helperText={helper}
                  fullWidth
                  id="nombreColegio"
                  label="Nombre del colegio"
                  name="nombreColegio"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={handleInputChange}
                  required
                  fullWidth
                  id="direccColegio"
                  label="Dirección del colegio"
                  name="direccColegio"
                  autoComplete="street-address"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={handleInputChange}
                  required
                  fullWidth
                  id="localidadColegio"
                  label="Localidad"
                  name="localidadColegio"
                  autoComplete="address-level1"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={handleInputChange}
                  required
                  fullWidth
                  id="emailColegio"
                  label="Email del colegio"
                  name="emailColegio"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={handleInputChange}
                  required
                  fullWidth
                  id="telColegio"
                  label="Teléfono del colegio"
                  name="telColegio"
                  autoComplete="tel"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={handleInputChange}
                  name="nombreDirectivo"
                  required
                  fullWidth
                  id="nombreDirectivo"
                  label="Nombre Directivo"
                  autoComplete="given-name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={handleInputChange}
                  required
                  fullWidth
                  id="apellidoDirectivo"
                  label="Apellido Directivo"
                  name="apellidoDirectivo"
                  autoComplete="family-name"
                />
              </Grid>
              <Typography
                sx={{
                  marginTop: 2,
                  marginLeft: 5,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
                component="h5"
                variant="h6"
              >
                Ingrese los datos del transportista
              </Typography>
              <Grid item xs={12}>
                <TextField
                  onChange={handleInputChange}
                  required
                  fullWidth
                  id="nombreTransportista"
                  label="Nombre y Apellido del transportista"
                  name="nombreTransportista"
                />
              </Grid>
              <Typography
                sx={{
                  marginTop: 2,
                  marginLeft: 8,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
                component="h5"
                variant="h6"
              >
                Ingrese los datos del viaje
              </Typography>
              <Grid item xs={12}>
                <LocalizationProvider
                  dateAdapter={AdapterDateFns}
                  adapterLocale={esLocale}
                >
                  <Stack spacing={3}>
                    <DatePicker
                      label="Fecha de salida"
                      value={datePickerValue}
                      onSubmit={handleInputChange}
                      inputFormat="dd/MM/yyyy"
                      onChange={(newValue) => dateOnChange(newValue)}
                      renderInput={(params) => <TextField {...params} />}
                    />
                    <TimePicker
                      inputFormat="HH:mm"
                      ampm={false}
                      name="time"
                      label="Hora de salida"
                      value={timePickerValue}
                      onChange={(newValue) => timeOnChange(newValue)}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </Stack>
                </LocalizationProvider>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              endIcon={<SendIcon />}
              onClick={handleSubmit}
            >
              Enviar formulario
            </Button>
            {/* <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Esto es para crear cuenta, se podría usar
                </Link>
              </Grid>
            </Grid> */}
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
