import {
  Link,
  ListItemButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  IconButton,
} from "@mui/material";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useSelector, useDispatch } from "react-redux";

import { toggleOpen } from "../../redux/Slices/Sidebar";
import { styled, useTheme } from "@mui/material/styles";
import sidebarData from "../../Services/Static/sidebardata";
import { Analytics as AnalyticsIcon } from "@mui/icons-material";
import HomeIcon from "@mui/icons-material/Home";
const getIcon = (name) => {
  switch (name) {
    case "ORGANIZATION":
      return <HomeIcon />;
    case "GENERAL LEDGER":
      return <AnalyticsIcon />;
    default:
      return <HomeIcon />;
  }
};

const SidebarComponent = (prop) => {
  const theme = useTheme();
  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  }));
  const { isOpen, drawerWidth } = useSelector((state) => state.sidebar);

  const dispatch = useDispatch();
  const handleToggle = () => {
    dispatch(toggleOpen());
  };
  return (
    <Drawer
      open={isOpen}
      anchor={"left"}
      sx={{
        width: drawerWidth,
        flexShrink: 0,

        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="persistent"
    >
      <DrawerHeader>
        <IconButton onClick={handleToggle}>
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />

      <List>
        {sidebarData().map((item, index) => (
          <ListItem key={item.name} disablePadding>
            <Link
              href={item.name.toLowerCase().replace(" ", "-")}
              sx={{ textDecoration: "none" }}
            >
              <ListItemButton>
                <ListItemIcon>{getIcon(item.name)}</ListItemIcon>
                <ListItemText primary={item.name.toLowerCase()} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Drawer>
  );
};
export default SidebarComponent;
