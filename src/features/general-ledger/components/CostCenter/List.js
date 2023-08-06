import { data } from './data';
import { useMemo } from 'react';
import { MaterialReactTable } from 'material-react-table';
export const ListCostCenter = () => {
  const columns = useMemo(
    () => [
      {
        header: 'ID',
        accessorKey: 'id'
      },
      {
        header: 'First Name',
        accessorKey: 'firstName'
      },
      {
        header: 'Last Name',
        accessorKey: 'lastName'
      },
      {
        header: 'AGE',
        accessorKey: 'address'
      },
      {
        header: 'AGE',
        accessorKey: 'city'
      },
      {
        header: 'AGE',
        accessorKey: 'state'
      }
    ],
    []
  );

  return (
    <MaterialReactTable
      columns={columns}
      data={data}
      enableExpandAll={false} //hide expand all double arrow in column header
      enableExpanding
      filterFromLeafRows //apply filtering to all rows instead of just parent rows
      initialState={{ expanded: true }} //expand all rows by default
      paginateExpandedRows={false} //When rows are expanded, do not count sub-rows as number of rows on the page towards pagination
    />
  );
};
