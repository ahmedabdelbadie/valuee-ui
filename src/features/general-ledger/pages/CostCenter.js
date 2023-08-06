import { useLocation } from 'react-router-dom';
import { ListCostCenter } from '../components/CostCenter/List';
export const CostCenter = () => {
  let location = useLocation();
  return (
    <h1>
      `Cost Center pathName : {location.pathname} {JSON.stringify(location)}`
      <div>
        <ListCostCenter />
      </div>
    </h1>
  );
};
