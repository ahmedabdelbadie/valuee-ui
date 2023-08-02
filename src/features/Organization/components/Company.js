import { useLocation } from "react-router-dom";
export const Company = () => {
  let location = useLocation();
  return (
    <h1>
      `Company pathName : {location.pathname} {JSON.stringify(location)}`
    </h1>
  );
};
