import {
  Link,
  Drawer,
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

const Organizatoinicon = () => {
  return (
    <img
      className="dxnb-img dx-vam"
      src="https://fmscodemo.valueplus1.com//DXX.axd?handlerName=ImageResource&name=Home_32x32&enbl=True&fldr=TemplatesV2Images&v=7254e882df0427f86f32eedb72746728"
      alt=""
      style={{ height: "32px", width: "32px" }}
    ></img>
  );
};
const SidebarComponent = (prop) => {
  const theme = useTheme();
  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  }));
  const { isOpen, drawerWidth } = useSelector((state) => state.sidebar);

  const dispatch = useDispatch();
  const handleToggle = () => {
    dispatch(toggleOpen());
  };
  //const [open, setOpen] = useState(true);
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
      <ListItem key={1}>
        <ListItemIcon>
          <Organizatoinicon />
        </ListItemIcon>
        <ListItemText primary="Organization" />
      </ListItem>
    </Drawer>
  );
};
export default SidebarComponent;
