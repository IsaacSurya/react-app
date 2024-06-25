import React from 'react'
import Stack from '@mui/material/Stack';
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';
import { LineChart } from '@mui/x-charts/LineChart';

import { ScatterChart } from '@mui/x-charts/ScatterChart';

const data = [
  {
    id: 'data-0',
    x1: 329.39,
    x2: 391.29,
    y1: 443.28,
    y2: 153.9,
  },
  {
    id: 'data-1',
    x1: 96.94,
    x2: 139.6,
    y1: 110.5,
    y2: 217.8,
  },
  {
    id: 'data-2',
    x1: 336.35,
    x2: 282.34,
    y1: 175.23,
    y2: 286.32,
  },
  {
    id: 'data-3',
    x1: 159.44,
    x2: 384.85,
    y1: 195.97,
    y2: 325.12,
  },
  {
    id: 'data-4',
    x1: 188.86,
    x2: 182.27,
    y1: 351.77,
    y2: 144.58,
  },
  {
    id: 'data-5',
    x1: 143.86,
    x2: 360.22,
    y1: 43.253,
    y2: 146.51,
  },
  {
    id: 'data-6',
    x1: 202.02,
    x2: 209.5,
    y1: 376.34,
    y2: 309.69,
  },
  {
    id: 'data-7',
    x1: 384.41,
    x2: 258.93,
    y1: 31.514,
    y2: 236.38,
  },
  {
    id: 'data-8',
    x1: 256.76,
    x2: 70.571,
    y1: 231.31,
    y2: 440.72,
  },
  {
    id: 'data-9',
    x1: 143.79,
    x2: 419.02,
    y1: 108.04,
    y2: 20.29,
  },
  {
    id: 'data-10',
    x1: 103.48,
    x2: 15.886,
    y1: 321.77,
    y2: 484.17,
  },
  {
    id: 'data-11',
    x1: 272.39,
    x2: 189.03,
    y1: 120.18,
    y2: 54.962,
  },
  {
    id: 'data-12',
    x1: 23.57,
    x2: 456.4,
    y1: 366.2,
    y2: 418.5,
  },
  {
    id: 'data-13',
    x1: 219.73,
    x2: 235.96,
    y1: 451.45,
    y2: 181.32,
  },
  {
    id: 'data-14',
    x1: 54.99,
    x2: 434.5,
    y1: 294.8,
    y2: 440.9,
  },
  {
    id: 'data-15',
    x1: 134.13,
    x2: 383.8,
    y1: 121.83,
    y2: 273.52,
  },
  {
    id: 'data-16',
    x1: 12.7,
    x2: 270.8,
    y1: 287.7,
    y2: 346.7,
  },
  {
    id: 'data-17',
    x1: 176.51,
    x2: 119.17,
    y1: 134.06,
    y2: 74.528,
  },
  {
    id: 'data-18',
    x1: 65.05,
    x2: 78.93,
    y1: 104.5,
    y2: 150.9,
  },
  {
    id: 'data-19',
    x1: 162.25,
    x2: 63.707,
    y1: 413.07,
    y2: 26.483,
  },
  {
    id: 'data-20',
    x1: 68.88,
    x2: 150.8,
    y1: 74.68,
    y2: 333.2,
  },
  {
    id: 'data-21',
    x1: 95.29,
    x2: 329.1,
    y1: 360.6,
    y2: 422.0,
  },
  {
    id: 'data-22',
    x1: 390.62,
    x2: 10.01,
    y1: 330.72,
    y2: 488.06,
  },
];

function Home() {

  const years = [
    new Date(1990, 0, 1),
    new Date(1991, 0, 1),
    new Date(1992, 0, 1),
    new Date(1993, 0, 1),
    new Date(1994, 0, 1),
    new Date(1995, 0, 1),
    new Date(1996, 0, 1),
    new Date(1997, 0, 1),
    new Date(1998, 0, 1),
    new Date(1999, 0, 1),
    new Date(2000, 0, 1),
    new Date(2001, 0, 1),
    new Date(2002, 0, 1),
    new Date(2003, 0, 1),
    new Date(2004, 0, 1),
    new Date(2005, 0, 1),
    new Date(2006, 0, 1),
    new Date(2007, 0, 1),
    new Date(2008, 0, 1),
    new Date(2009, 0, 1),
    new Date(2010, 0, 1),
    new Date(2011, 0, 1),
    new Date(2012, 0, 1),
    new Date(2013, 0, 1),
    new Date(2014, 0, 1),
    new Date(2015, 0, 1),
    new Date(2016, 0, 1),
    new Date(2017, 0, 1),
    new Date(2018, 0, 1),
  ];
  
  const FranceGDPperCapita = [
    28129, 28294.264, 28619.805, 28336.16, 28907.977, 29418.863, 29736.645, 30341.807,
    31323.078, 32284.611, 33409.68, 33920.098, 34152.773, 34292.03, 35093.824,
    35495.465, 36166.16, 36845.684, 36761.793, 35534.926, 36086.727, 36691, 36571,
    36632, 36527, 36827, 37124, 37895, 38515.918,
  ];
  
  const UKGDPperCapita = [
    26189, 25792.014, 25790.186, 26349.342, 27277.543, 27861.215, 28472.248, 29259.764,
    30077.385, 30932.537, 31946.037, 32660.441, 33271.3, 34232.426, 34865.78,
    35623.625, 36214.07, 36816.676, 36264.79, 34402.36, 34754.473, 34971, 35185, 35618,
    36436, 36941, 37334, 37782.83, 38058.086,
  ];
  
  const GermanyGDPperCapita = [
    25391, 26769.96, 27385.055, 27250.701, 28140.057, 28868.945, 29349.982, 30186.945,
    31129.584, 32087.604, 33367.285, 34260.29, 34590.93, 34716.44, 35528.715,
    36205.574, 38014.137, 39752.207, 40715.434, 38962.938, 41109.582, 43189, 43320,
    43413, 43922, 44293, 44689, 45619.785, 46177.617,
  ];
  
  const lineChartsParams = {
    series: [
      {
        label: 'French GDP per capita',
        data: FranceGDPperCapita,
        showMark: false,
      },
      {
        label: 'German GDP per capita',
        data: GermanyGDPperCapita,
        showMark: false,
      },
      {
        label: 'UK GDP per capita',
        data: UKGDPperCapita,
        showMark: false,
      },
    ],
    width: 400,
    height: 400,
  };
  
  const yearFormatter = (date) => date.getFullYear().toString();
  const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format;


  const [highlightedItem, setHighLightedItem] = React.useState(null);

  
const barChartsProps = {
  series: [
    {
      data: [3, 4, 1, 6, 5],
      id: 'sync',
      highlightScope: { highlighted: 'item', faded: 'global' },
    },
  ],
  xAxis: [{ scaleType: 'band', data: ['A', 'B', 'C', 'D', 'E'] }],
  height: 500,
  width:800,
  slotProps: {
    legend: {
      hidden: true,
    },
  },
};

const pieChartProps = {
  series: [
    {
      id: 'sync',
      data: [
        { value: 3, label: 'A', id: 'A' },
        { value: 4, label: 'B', id: 'B' },
        { value: 1, label: 'C', id: 'C' },
        { value: 6, label: 'D', id: 'D' },
        { value: 5, label: 'E', id: 'E' },
      ],
      highlightScope: { highlighted: 'item', faded: 'global' },
    },
  ],
  height: 400,
  width: 500,
  slotProps: {
    legend: {
      hidden: true,
    },
  },
};
  return (
    <div>
     <h1>Bargraph</h1>
      <div className='home1'>
      <Stack  
      direction={{ xs: 'row', xl: 'row' }}
      spacing={1}
      sx={{ width: '100%' }}
    >
      <BarChart
        {...barChartsProps}
        highlightedItem={highlightedItem}
        onHighlightChange={setHighLightedItem}
      />
      <PieChart
        {...pieChartProps}
        highlightedItem={highlightedItem}
        onHighlightChange={setHighLightedItem}
      />
    </Stack>

      </div>
      <div className='menu'>    
<div className='home2'>

<LineChart
      {...lineChartsParams}
      xAxis={[{ data: years, scaleType: 'time', valueFormatter: yearFormatter }]}
      series={lineChartsParams.series.map((series) => ({
        ...series,
        valueFormatter: (v) => (v === null ? '' : currencyFormatter(v)),
      }))}
    />


</div>

<div className='home3'>
<ScatterChart
      width={400}
      height={300}
      series={[
        {
          label: 'Series A',
          data: data.map((v) => ({ x: v.x1, y: v.y1, id: v.id })),
        },
        {
          label: 'Series B',
          data: data.map((v) => ({ x: v.x1, y: v.y2, id: v.id })),
        },
      ]}
    />
</div>



    </div>
    </div>
  )
}


export default Home
