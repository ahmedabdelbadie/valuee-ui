import { useLocation } from "react-router-dom";
export const GeneralLedgerChart = () => {
  let location = useLocation();
  return (
    <h1>
      `general ledger chart pathName : {location.pathname}{" "}
      {JSON.stringify(location)}`
    </h1>
  );
};
