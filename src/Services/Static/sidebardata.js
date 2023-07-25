import HomeIcon from "@mui/icons-material/Home";
const getData = () => {
  return [
    {
      name: "ORGANIZATION",
      color: "",
      icon: <HomeIcon />,
      isExpandable: false,
    },
    {
      name: "GENERAL LEDGER",
      color: "",
      icon: <HomeIcon />,
      isExpandable: true,
      children: [
        {
          name: "General Ledger Master Files",
          color: "",
          isLink: false,
          isExpandable: true,
          children: [
            { name: "General Ledger Chart", color: "" },
            { name: "General Consolidated Chart", color: "" },
            {
              name: "Cost Centers",
              color: "",
              children: [{ name: "Cost Centers D1", color: "" }],
            },
            { name: "Projects", color: "" },
          ],
        },
        {
          name: "General Ledger Transactions",
          color: "",
          isLink: false,
          isExpandable: true,
          children: [
            { name: "Journal Entries", color: "" },
            { name: "Pre Payment and Accrual Entry", color: "" },
          ],
        },
        {
          name: "General Ledger Queries",
          color: "",
          isLink: false,
          children: [{ name: "Accounts Details Queries", color: "" }],
        },
        { name: "General Ledger Reports", color: "", isExpandable: false },
      ],
    },
  ];
};
export default getData;

/*
{ name: "TRADING", color: "", icon: <HomeIcon /> },
    { name: "INVENTORY", color: "", icon: <HomeIcon /> },
    { name: "PURCHASING", color: "", icon: <HomeIcon /> },
    { name: "SALES", color: "", icon: <HomeIcon /> },
    { name: "FIXED ASSETS", color: "", icon: <HomeIcon /> },
    { name: "HUMAN RESOURCES", color: "", icon: <HomeIcon /> },
    { name: "CONSTRUCTIONS", color: "", icon: <HomeIcon /> },
    { name: "REAL ESTATE", color: "", icon: <HomeIcon /> },
    { name: "PROPERTY MANAGEMENT", color: "", icon: <HomeIcon /> },
    { name: "PLANET MACHINERY & VEHICLES", color: "", icon: <HomeIcon /> },
    { name: "ADMINISTRATION", color: "", icon: <HomeIcon /> },
    { name: "REPORTS", color: "", icon: <HomeIcon /> },
    { name: "CRM", color: "", icon: <HomeIcon /> },
    { name: "FLEET MANAGEMENT", color: "", icon: <HomeIcon /> },
*/
