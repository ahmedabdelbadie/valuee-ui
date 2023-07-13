import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

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
const SidebarComponent = () => {
  const { collapseSidebar } = useProSidebar(false);
  return (
    <Sidebar style={{ height: "100vh" }}>
      <Menu>
        <MenuItem
          icon={<MenuOutlinedIcon />}
          onClick={() => {
            collapseSidebar();
          }}
          style={{ textAlign: "center" }}
        >
          {" "}
          <h2>Value Plus</h2>
        </MenuItem>

        <MenuItem icon={<Organizatoinicon />}>Organization</MenuItem>
      </Menu>
    </Sidebar>
  );
};
export default SidebarComponent;
