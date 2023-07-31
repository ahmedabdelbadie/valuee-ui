import {
  Link,
  ListItemButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Tooltip,
  Avatar,
  Typography,
  Toolbar,
  Box,
} from "@mui/material";
import Logo from "../../components/Assets/Images/logo.png";
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
import avatarb2554d38 from "../Assets/Images/avatar.b2554d38.jpg";
import useMediaQuery from "@mui/material/useMediaQuery";

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

  const DrawerHeader = styled("div")(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === "dark"
        ? theme.palette.primary.light
        : theme.palette.primary.main,
    padding: theme.spacing(4),
    display: "flex",
    justifyContent: "start",
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
      transitionDuration={{
        enter: 2000,
        exit: 2000,
      }}
      sx={{
        width: drawerWidth,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          borderRight: 0,
          boxSizing: "border-box",
          position: "sticky",
        },
      }}
      variant="persistent"
    >
      <DrawerHeader>
        <Box
          sx={{
            flexDirection: "row",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link href="/">
            <Avatar
              variant="square"
              alt="logo"
              src={Logo}
              sx={{ minWidth: 60, mr: 5, ml: 3 }}
            />
          </Link>
          <Typography variant="logo" component="div">
            Value Plus
          </Typography>
        </Box>
      </DrawerHeader>
      <Divider />

      <Box
        sx={{
          flexDirection: "column",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: 100,
        }}
      >
        <Avatar
          src={avatarb2554d38}
          variant="circular"
          sx={{ minHeight: 80, minWidth: 80, marginTop: 3 }}
        />
        <Typography
          variant="logo"
          component="div"
          sx={{
            display: "block",
            marginTop: 3,
            color: (theme) => theme.palette.primary.dark,
          }}
        >
          Ahmed Badea
        </Typography>{" "}
        <Typography
          variant="subtitle2"
          component="div"
          sx={{
            display: "block",

            color: (theme) => theme.palette.primary.dark,
            fontWeight: 100,
          }}
        >
          Senior .Net Developer
        </Typography>
      </Box>

      <List
        sx={{
          width: "100%",
          maxWidth: 360,
        }}
        component="nav"
      >
        <ListItem key={0}>
          <Typography variant="smallText" component="div" sx={{ pl: 0 }}>
            Main
          </Typography>
        </ListItem>
        <ListItem key={1} disablePadding>
          <Link href="dashboard">
            <ListItemButton>
              <ListItemIcon>{getIcon("Dashboard")}</ListItemIcon>
              <ListItemText
                disableTypography
                primaryTypographyProps={{ variant: "mediumText" }}
                primary={"Dashboard"}
              />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem key={2} disablePadding>
          <ListItemButton onClick={handleOrToggle}>
            <ListItemIcon>{getIcon("Organization")}</ListItemIcon>
            <ListItemText
              disableTypography
              primaryTypographyProps={{ variant: "mediumText" }}
              primary="Organization"
            />
            <ExpandLess
              sx={[
                {
                  transform: "rotate(90deg)",
                  transition: "transform .4s ease-in-out",
                },
                isOpenOr && { transform: "rotate(180deg)" },
              ]}
            />
          </ListItemButton>
          <Collapse
            in={isOpenOr}
            timeout="auto"
            unmountOnExit
            orientation="vertical"
          >
            <List component="div">
              <ListItem key={0} disablePadding>
                <Link href="company">
                  <ListItemButton sx={{ pl: 4 }} onClick={handleGLMFToggle}>
                    <ListItemIcon>{getIcon("Companies")}</ListItemIcon>
                    <ListItemText primary="Companies" />
                  </ListItemButton>
                </Link>
              </ListItem>
              <ListItem key={1} disablePadding>
                <Link href="branch">
                  <ListItemButton sx={{ pl: 4 }} onClick={handleGLMFToggle}>
                    <ListItemIcon>{getIcon("Branches")}</ListItemIcon>
                    <ListItemText primary="Branches" />
                  </ListItemButton>
                </Link>
              </ListItem>
            </List>
          </Collapse>
        </ListItem>
        <ListItem key={3} disablePadding>
          <ListItemButton onClick={handleGLToggle}>
            <ListItemIcon>{getIcon("General Ledger")}</ListItemIcon>
            <ListItemText
              disableTypography
              primaryTypographyProps={{ variant: "mediumText" }}
              primary="General Ledger"
            />
            <ExpandLess
              sx={[
                {
                  transform: "rotate(90deg)",
                  transition: "transform .4s ease-in-out",
                },
                isOpenGL && { transform: "rotate(180deg)" },
              ]}
            />
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
                  <ExpandLess
                    sx={[
                      {
                        transform: "rotate(90deg)",
                        transition: "transform .4s ease-in-out",
                      },
                      isOpenGLMF && { transform: "rotate(180deg)" },
                    ]}
                  />
                </ListItemButton>
                <Collapse
                  in={isOpenGLMF}
                  timeout="auto"
                  unmountOnExit
                  orientation="vertical"
                >
                  <List component="div" disablePadding>
                    <ListItem key={0} disablePadding>
                      <Link href="gl/charts">
                        <ListItemButton sx={{ pl: 6 }}>
                          <ListItemIcon>
                            {getIcon("General Ledger Chart")}
                          </ListItemIcon>
                          <ListItemText primary="General Ledger Chart" />
                        </ListItemButton>
                      </Link>
                    </ListItem>
                    <ListItem key={0} disablePadding>
                      <Link href="gl/consolidated-chart">
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
                        <ExpandLess
                          sx={[
                            {
                              transform: "rotate(90deg)",
                              transition: "transform .4s ease-in-out",
                            },
                            isOpenCS && { transform: "rotate(180deg)" },
                          ]}
                        />
                      </ListItemButton>
                      <Collapse
                        in={isOpenCS}
                        timeout="auto"
                        unmountOnExit
                        orientation="vertical"
                      >
                        <List component="div" disablePadding>
                          <ListItem key={0} disablePadding>
                            <Link href={`gl/cost-center/:1`}>
                              <ListItemButton sx={{ pl: 8 }}>
                                <ListItemIcon>
                                  {getIcon("Cost Center")}
                                </ListItemIcon>
                                <ListItemText primary="Cost Center 1" />
                              </ListItemButton>
                            </Link>
                          </ListItem>
                          <ListItem key={0} disablePadding>
                            <Link href={`gl/cost-center/:2`}>
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
                      <Link href="gl/projects">
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
                  <ExpandLess
                    sx={[
                      {
                        transform: "rotate(90deg)",
                        transition: "transform .4s ease-in-out",
                      },
                      isOpenGLT && { transform: "rotate(180deg)" },
                    ]}
                  />
                </ListItemButton>
                <Collapse
                  in={isOpenGLT}
                  timeout="auto"
                  unmountOnExit
                  orientation="vertical"
                >
                  <List component="div" disablePadding>
                    <ListItem key={0} disablePadding>
                      <Link href={`gl/journal-entries`}>
                        <ListItemButton sx={{ pl: 6 }}>
                          <ListItemIcon>
                            {getIcon("Journal Entries")}
                          </ListItemIcon>
                          <ListItemText primary="Journal Entries" />
                        </ListItemButton>
                      </Link>
                    </ListItem>
                    <ListItem key={0} disablePadding>
                      <Link href={`gl/pre-payment`}>
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
                  <ExpandLess
                    sx={[
                      {
                        transform: "rotate(90deg)",
                        transition: "transform .4s ease-in-out",
                      },
                      isOpenGLQ && { transform: "rotate(180deg)" },
                    ]}
                  />
                </ListItemButton>
                <Collapse
                  in={isOpenGLQ}
                  timeout="auto"
                  unmountOnExit
                  orientation="vertical"
                >
                  <List component="div" disablePadding>
                    <ListItem key={0} disablePadding>
                      <Link href={`gl/accounts-details-queries`}>
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
                <Link href={`gl/reports`}>
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
