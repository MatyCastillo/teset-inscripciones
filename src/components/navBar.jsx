import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AddIcon from "@mui/icons-material/Add";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { deepOrange } from "@mui/material/colors";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";
import IncriptionForm from "./inscriptionForm";
import CloseIcon from "@mui/icons-material/Close";

const theme = createTheme({
  palette: {
    primary: deepOrange,
    secondary: {
      main: "#bf360c",
    },
  },
});
export default function ButtonAppBar() {
  const isMobile = window.innerWidth <= 500;

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Escuelas Inscriptas
            </Typography>
            <Button
              variant="contained"
              color="success"
              onClick={handleClickOpen}
              startIcon={<AddIcon />}
            >
              {!isMobile ? `Cargar inscripción` : `Cargar`}
            </Button>
            <Dialog open={open} onClose={handleClose} scroll="body">
              <DialogTitle id="scroll-dialog-title">
                Formulario Incripción
              </DialogTitle>
              <DialogContent>
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                  <CloseIcon />
                </IconButton>
                <IncriptionForm />
              </DialogContent>
            </Dialog>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
