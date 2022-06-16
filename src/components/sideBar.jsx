import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import FingerprintIcon from "@mui/icons-material/Fingerprint";

export default function SideBar(prop) {
  return (
    <>
      <Toolbar />
      <List>
        <ListItem key="newTracking" disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: this.prop.open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: this.prop.open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <AddLocationAltIcon />
            </ListItemIcon>
            <ListItemText
              primary="Crear viaje"
              sx={{ opacity: this.prop.open ? 1 : 0 }}
            />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem key="newTracking" disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: this.prop.open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: this.prop.open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <FingerprintIcon />
            </ListItemIcon>
            <ListItemText
              primary="Link"
              sx={{ opacity: this.prop.open ? 1 : 0 }}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </>
  );
}
