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
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import { useState } from "react";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import BarChartIcon from "@mui/icons-material/BarChart";
import CallSplitIcon from "@mui/icons-material/CallSplit";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import HouseIcon from "@mui/icons-material/House";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import DoorSlidingIcon from "@mui/icons-material/DoorSliding";
import PinchIcon from "@mui/icons-material/Pinch";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BusinessIcon from "@mui/icons-material/Business";
import ApartmentIcon from "@mui/icons-material/Apartment";
const getIcon = (name) => {
  switch (name) {
    case "Branches":
      return <BusinessIcon />;
    case "Companies":
      return <ApartmentIcon />;
    case "Organization":
      return <HomeIcon />;
    case "Dashboard":
      return <DashboardIcon />;
    case "General Ledger Reports":
      return <InsertChartIcon />;
    case "General Ledger":
      return <LibraryBooksIcon />;
    case "General Ledger Master Files":
      return <DriveFolderUploadIcon />;
    case "General Ledger Transactions":
      return <DriveFolderUploadIcon />;
    case "General Ledger Queries":
      return <DriveFolderUploadIcon />;
    case "General Ledger Chart":
      return <BarChartIcon />;
    case "General Consolidated Chart":
      return <CallSplitIcon />;
    case "Cost Centers":
      return <WarehouseIcon />;
    case "Cost Center":
      return <HouseIcon />;
    case "Projects":
      return <EmojiObjectsIcon />;

    case "Journal Entries":
      return <DoorSlidingIcon />;
    case "Pre Payment and Accrual Entry":
      return <PinchIcon />;
    default:
      return <HomeIcon />;
  }
};

const SidebarComponent = (prop) => {
  const [isOpenGL, setOpenGL] = useState(false);
  const [isOpenGLMF, setOpenGLMF] = useState(false);
  const [isOpenCS, setOpenCS] = useState(false);
  const [isOpenGLT, setOpenGLT] = useState(false);
  const [isOpenGLQ, setOpenGLQ] = useState(false);
  const [isOpenOr, setOpenOr] = useState(false);

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
  const handleGLToggle = () => {
    setOpenGL(!isOpenGL);
  };
  const handleGLMFToggle = () => {
    setOpenGLMF(!isOpenGLMF);
  };
  const handleCSToggle = () => {
    setOpenCS(!isOpenCS);
  };
  const handleGLTToggle = () => {
    setOpenGLT(!isOpenGLT);
  };
  const handleGLQToggle = () => {
    setOpenGLQ(!isOpenGLQ);
  };
  const handleOrToggle = () => {
    setOpenOr(!isOpenOr);
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

      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
      >
        <ListItem key={1} disablePadding>
          <Link href="dashboard" sx={{ textDecoration: "none" }}>
            <ListItemButton>
              <ListItemIcon>{getIcon("Dashboard")}</ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem key={1} disablePadding>
          <ListItemButton onClick={handleOrToggle}>
            <ListItemIcon>{getIcon("Organization")}</ListItemIcon>
            <ListItemText primary="Organization" />
            {isOpenOr ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse
            in={isOpenOr}
            timeout="auto"
            unmountOnExit
            orientation="vertical"
          >
            <List component="div" disablePadding>
              <ListItem key={0} disablePadding>
                <Link href="company" sx={{ textDecoration: "none" }}>
                  <ListItemButton sx={{ pl: 4 }} onClick={handleGLMFToggle}>
                    <ListItemIcon>{getIcon("Companies")}</ListItemIcon>
                    <ListItemText primary="Companies" />
                  </ListItemButton>
                </Link>
              </ListItem>
              <ListItem key={1} disablePadding>
                <Link href="branch" sx={{ textDecoration: "none" }}>
                  <ListItemButton sx={{ pl: 4 }} onClick={handleGLMFToggle}>
                    <ListItemIcon>{getIcon("Branches")}</ListItemIcon>
                    <ListItemText primary="Branches" />
                  </ListItemButton>
                </Link>
              </ListItem>
            </List>
          </Collapse>
        </ListItem>
        <ListItem key={2} disablePadding>
          <ListItemButton onClick={handleGLToggle}>
            <ListItemIcon>{getIcon("General Ledger")}</ListItemIcon>
            <ListItemText primary="General Ledger" />
            {isOpenGL ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse
            in={isOpenGL}
            timeout="auto"
            unmountOnExit
            orientation="vertical"
          >
            <List component="div" disablePadding>
              <ListItem key={0} disablePadding>
                <ListItemButton sx={{ pl: 4 }} onClick={handleGLMFToggle}>
                  <ListItemIcon>
                    {getIcon("General Ledger Master Files")}
                  </ListItemIcon>
                  <ListItemText primary="General Ledger Master Files" />
                  {isOpenGLMF ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse
                  in={isOpenGLMF}
                  timeout="auto"
                  unmountOnExit
                  orientation="vertical"
                >
                  <List component="div" disablePadding>
                    <ListItem key={0} disablePadding>
                      <Link href="gl/charts" sx={{ textDecoration: "none" }}>
                        <ListItemButton sx={{ pl: 6 }}>
                          <ListItemIcon>
                            {getIcon("General Ledger Chart")}
                          </ListItemIcon>
                          <ListItemText primary="General Ledger Chart" />
                        </ListItemButton>
                      </Link>
                    </ListItem>
                    <ListItem key={0} disablePadding>
                      <Link
                        href="gl/consolidated-chart"
                        sx={{ textDecoration: "none" }}
                      >
                        <ListItemButton sx={{ pl: 6 }}>
                          <ListItemIcon>
                            {getIcon("General Consolidated Chart")}
                          </ListItemIcon>
                          <ListItemText primary="General Consolidated Chart" />
                        </ListItemButton>
                      </Link>
                    </ListItem>
                    <ListItem key={0} disablePadding>
                      <ListItemButton sx={{ pl: 6 }} onClick={handleCSToggle}>
                        <ListItemIcon>{getIcon("Cost Centers")}</ListItemIcon>
                        <ListItemText primary="Cost Centers" />
                        {isOpenCS ? <ExpandLess /> : <ExpandMore />}
                      </ListItemButton>
                      <Collapse
                        in={isOpenCS}
                        timeout="auto"
                        unmountOnExit
                        orientation="vertical"
                      >
                        <List component="div" disablePadding>
                          <ListItem key={0} disablePadding>
                            <Link
                              href={`gl/cost-center/:1`}
                              sx={{ textDecoration: "none" }}
                            >
                              <ListItemButton sx={{ pl: 8 }}>
                                <ListItemIcon>
                                  {getIcon("Cost Center")}
                                </ListItemIcon>
                                <ListItemText primary="Cost Center 1" />
                              </ListItemButton>
                            </Link>
                          </ListItem>
                          <ListItem key={0} disablePadding>
                            <Link
                              href={`gl/cost-center/:2`}
                              sx={{ textDecoration: "none" }}
                            >
                              <ListItemButton sx={{ pl: 8 }}>
                                <ListItemIcon>
                                  {getIcon("Cost Center")}
                                </ListItemIcon>
                                <ListItemText primary="Cost Center 2" />
                              </ListItemButton>
                            </Link>
                          </ListItem>
                        </List>
                      </Collapse>
                    </ListItem>
                    <ListItem key={0} disablePadding>
                      <Link href="gl/projects" sx={{ textDecoration: "none" }}>
                        <ListItemButton sx={{ pl: 6 }}>
                          <ListItemIcon>{getIcon("Projects")}</ListItemIcon>
                          <ListItemText primary="Projects" />
                        </ListItemButton>
                      </Link>
                    </ListItem>
                  </List>
                </Collapse>
              </ListItem>
              <ListItem key={0} disablePadding>
                <ListItemButton sx={{ pl: 4 }} onClick={handleGLTToggle}>
                  <ListItemIcon>
                    {getIcon("General Ledger Transactions")}
                  </ListItemIcon>
                  <ListItemText primary="General Ledger Transactions" />
                  {isOpenGLT ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse
                  in={isOpenGLT}
                  timeout="auto"
                  unmountOnExit
                  orientation="vertical"
                >
                  <List component="div" disablePadding>
                    <ListItem key={0} disablePadding>
                      <Link
                        href={`gl/journal-entries`}
                        sx={{ textDecoration: "none" }}
                      >
                        <ListItemButton sx={{ pl: 6 }}>
                          <ListItemIcon>
                            {getIcon("Journal Entries")}
                          </ListItemIcon>
                          <ListItemText primary="Journal Entries" />
                        </ListItemButton>
                      </Link>
                    </ListItem>
                    <ListItem key={0} disablePadding>
                      <Link
                        href={`gl/pre-payment`}
                        sx={{ textDecoration: "none" }}
                      >
                        <ListItemButton sx={{ pl: 6 }}>
                          <ListItemIcon>
                            {getIcon("Pre Payment and Accrual Entry")}
                          </ListItemIcon>
                          <ListItemText primary="Pre Payment and Accrual Entry" />
                        </ListItemButton>
                      </Link>
                    </ListItem>
                  </List>
                </Collapse>
              </ListItem>
              <ListItem key={0} disablePadding>
                <ListItemButton sx={{ pl: 4 }} onClick={handleGLQToggle}>
                  <ListItemIcon>
                    {getIcon("General Ledger Queries")}
                  </ListItemIcon>
                  <ListItemText primary="General Ledger Queries" />
                  {isOpenGLQ ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse
                  in={isOpenGLQ}
                  timeout="auto"
                  unmountOnExit
                  orientation="vertical"
                >
                  <List component="div" disablePadding>
                    <ListItem key={0} disablePadding>
                      <Link
                        href={`gl/accounts-details-queries`}
                        sx={{ textDecoration: "none" }}
                      >
                        <ListItemButton sx={{ pl: 6 }}>
                          <ListItemIcon>
                            {getIcon("Accounts Details Queries")}
                          </ListItemIcon>
                          <ListItemText primary="Accounts Details Queries" />
                        </ListItemButton>
                      </Link>
                    </ListItem>
                  </List>
                </Collapse>
              </ListItem>
              <ListItem key={0} disablePadding>
                <Link href={`gl/reports`} sx={{ textDecoration: "none" }}>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      {getIcon("General Ledger Reports")}
                    </ListItemIcon>
                    <ListItemText primary="General Ledger Reports" />
                  </ListItemButton>
                </Link>
              </ListItem>
            </List>
          </Collapse>
        </ListItem>
      </List>
      <Divider />
    </Drawer>
  );
};
export default SidebarComponent;

/*
{sidebarData().map((item, index) => (
          <ListItem key={index} disablePadding>
             <Link
              href={item.name.toLowerCase().replace(" ", "-")}
              sx={{ textDecoration: "none" }}
            > 
            <ListItemButton onClick={handleClick}>
              <ListItemIcon>{getIcon(item.name)}</ListItemIcon>
              <ListItemText primary={item.name.toLowerCase()} />
              {item.name === "GENERAL LEDGER" &&
                (glOpen ? <ExpandLess /> : <ExpandMore />)}
            </ListItemButton>
            {Array.isArray(item.children) && item.name === "GENERAL LEDGER" && (
              <Collapse
                in={glOpen}
                timeout="auto"
                unmountOnExit
                orientation="vertical"
              >
                <List component="div" disablePadding>
                  {item.children.map((child, index) => (
                    <ListItem key={index} disablePadding>
                      <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>{getIcon(child.name)}</ListItemIcon>
                        <ListItemText primary={child.name} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            )}
             </Link> 
          </ListItem>
        ))}
        */
