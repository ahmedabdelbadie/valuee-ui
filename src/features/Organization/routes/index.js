import { Route, Routes } from "react-router-dom";

import { Company } from "../components/Company";
import { Branch } from "../components/Branch";

export const OrganizationRoutes = () => {
  return (
    <Routes>
      <Route path="company" element={<Company />} />
      <Route path="branch" element={<Branch />} />
    </Routes>
  );
};
