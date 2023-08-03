import { Route, Routes } from 'react-router-dom';

import { GeneralConsolidatedChart } from '../pages/GeneralConsolidatedChart';
import { GeneralLedgerChart } from '../pages/GeneralLedgerChart';
import { CostCenter } from '../pages/CostCenter';
import { Reports } from '../pages/Reports';
import { Project } from '../pages/Project';
import { Default } from '../pages/GeneralLedgerDefault';
import { JournalEntries } from '../pages/JournalEntries';
import { PrePayment } from '../pages/PrePayment';
import { AccountsDetails } from '../pages/AccountsDetails';
const GeneralLedgerMasterFilesRoutes = () => {
  return (
    <Routes>
      <Route path="consolidated-chart" element={<GeneralConsolidatedChart />} />
      <Route path="chart" element={<GeneralLedgerChart />} />
      <Route path="cost-center" element={<CostCenter />} />
      <Route path="project" element={<Project />} />
    </Routes>
  );
};
const GeneralLedgerTransactionsRoutes = () => {
  return (
    <Routes>
      <Route path="journal-entries" element={<JournalEntries />} />
      <Route path="pre-payment-and-accrual-entry" element={<PrePayment />} />
    </Routes>
  );
};
const QueriesRoutes = () => {
  return (
    <Routes>
      <Route path="accounts-details-queries" element={<AccountsDetails />} />
    </Routes>
  );
};

export const GLRoutes = () => {
  return (
    <Routes>
      <Route path="/" index element={<Default />} />
      <Route path="/master-files/*" element={<GeneralLedgerMasterFilesRoutes />} />
      <Route path="/transactions/*" element={<GeneralLedgerTransactionsRoutes />} />
      <Route path="/queries/*" element={<QueriesRoutes />} />
      <Route path="reports" element={<Reports />} />
    </Routes>
  );
};
