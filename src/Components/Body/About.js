import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { LineChart } from '@mui/x-charts/LineChart';
import { BarChart } from '@mui/x-charts/BarChart';





const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

 function DataGridDemo() {
  return (
    < div className='dol'>
      <h1>Details</h1>
    <div className='lol'>
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
      
    </Box>
    </div>
<div className='lol2'>
    <LineChart
    xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
    series={[
      {
        data: [2, 5.5, 2, 8.5, 1.5, 5],
      },
    ]}
    width={500}
    height={450}
  />
 
  

  

<BarChart
      series={[{ data: [1, 2, 3, 2, 1] }]}
      xAxis={[{ scaleType: 'band', data: ['A', 'B', 'C', 'D', 'E'] }]}
      height={450}
      width={400}
      leftAxis={null}
      
      
    />


 
</div>
</div>
  );
}

export default  DataGridDemo
