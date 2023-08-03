import { useLocation } from 'react-router-dom';
export const CostCenter = () => {
  let location = useLocation();
  return (
    <h1>
      `Cost Center pathName : {location.pathname} {JSON.stringify(location)}`
    </h1>
  );
};
