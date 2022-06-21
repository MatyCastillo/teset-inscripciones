import * as React from "react";
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

const theme = createTheme({
  palette: {
    primary: deepOrange,
    secondary: {
      main: "#bf360c",
    },
  },
});

export default function IncriptionForm() {
  const [datePickerValue, setDatePickerValue] = React.useState(null);
  const [timePickerValue, setTimePickerValue] = React.useState(null);

  const [data, setData] = React.useState({ date: datePickerValue });

  const handleInputChange = (event) => {
    // console.log(event.target.name)
    // console.log(event.target.value)
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(data);
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
                  fullWidth
                  id="schoolName"
                  label="Nombre del colegio"
                  name="schoolName"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={handleInputChange}
                  required
                  fullWidth
                  id="address"
                  label="Dirección del colegio"
                  name="address"
                  autoComplete="street-address"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={handleInputChange}
                  required
                  fullWidth
                  id="location"
                  label="Localidad"
                  name="location"
                  autoComplete="address-level1"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={handleInputChange}
                  required
                  fullWidth
                  id="email"
                  label="Email del colegio"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={handleInputChange}
                  required
                  fullWidth
                  id="phone"
                  label="Teléfono del colegio"
                  name="phone"
                  autoComplete="tel"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={handleInputChange}
                  name="directorName"
                  required
                  fullWidth
                  id="directorName"
                  label="Nombre Directivo"
                  autoComplete="given-name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={handleInputChange}
                  required
                  fullWidth
                  id="directorSurname"
                  label="Apellido Directivo"
                  name="directorSurname"
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
                  id="driverName"
                  label="Nombre y Apellido del transportista"
                  name="driverName"
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
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  {console.log(datePickerValue)}
                  <Stack spacing={3}>
                    <DatePicker
                      label="Fecha de salida"
                      value={datePickerValue}
                      onChange={(newValue) => setDatePickerValue(newValue)}
                      renderInput={(params) => <TextField {...params} />}
                    />
                    <TimePicker
                      label="Hora de salida"
                      value={timePickerValue}
                      onChange={(newValue) => setTimePickerValue(newValue)}
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
