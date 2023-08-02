import { useLocation } from "react-router-dom";
export const Branch = () => {
  let location = useLocation();
  return (
    <h1>
      `Branch pathName : {location.pathname} {JSON.stringify(location)}`
    </h1>
  );
};
