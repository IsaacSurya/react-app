import React from 'react'
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import { BarChart } from '@mui/x-charts/BarChart';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';

const otherSetting = {
  height: 400,
  yAxis: [{ label: 'GDP (mm)' }],
  grid: { horizontal: true },
  sx: {
    [`& .${axisClasses.left} .${axisClasses.label}`]: {
      transform: 'translateX(-10px)',
    },
  },
};

const dataset = [
  {
    london: 59,
    paris: 57,
    newYork: 86,
    seoul: 21,
    month: 'January',
  },
  {
    london: 50,
    paris: 52,
    newYork: 78,
    seoul: 28,
    month: 'February',
  },
  {
    london: 47,
    paris: 53,
    newYork: 106,
    seoul: 41,
    month: 'March',
  },
  {
    london: 54,
    paris: 56,
    newYork: 92,
    seoul: 73,
    month: 'April',
  },
  {
    london: 57,
    paris: 69,
    newYork: 92,
    seoul: 99,
    month: 'May',
  },
  {
    london: 60,
    paris: 63,
    newYork: 103,
    seoul: 144,
    month: 'June',
  },
  {
    london: 59,
    paris: 60,
    newYork: 105,
    seoul: 319,
    month: 'July',
  },
  {
    london: 65,
    paris: 60,
    newYork: 106,
    seoul: 249,
    month: 'August',
  },
  {
    london: 51,
    paris: 51,
    newYork: 95,
    seoul: 131,
    month: 'September',
  },
  {
    london: 60,
    paris: 65,
    newYork: 97,
    seoul: 55,
    month: 'October',
  },
  {
    london: 67,
    paris: 64,
    newYork: 76,
    seoul: 48,
    month: 'November',
  },
  {
    london: 61,
    paris: 70,
    newYork: 103,
    seoul: 25,
    month: 'December',
  },
];

const valueFormatter = (value) => `${value}mm`;


function Contact() {
  return (
    <div className='tall1'>
      <p>GDP GROWTH IN ONE YEAR</p>
      
       <BarChart
      dataset={dataset}
      xAxis={[
        {
          scaleType: 'band',
          dataKey: 'month',
          valueFormatter: (month, context) =>
            context.location === 'tick'
              ? `${month.slice(0, 3)} \n2023`
              : `${month} 2023`,
        },
      ]}
      series={[{ dataKey: 'seoul', label: ' GDP Growth', valueFormatter }]}
      {...otherSetting}
    />

<div className='mall1'>
  
  <div className='mall'>
    <h2>Contacts</h2>
  
    <h3>4500</h3>
    
  </div>
  <div className='mall'>
    <h2>Likes</h2>
  
    <h3>65000</h3>
 
  </div>
  <div className='mall'>
    <h2>Views</h2>
  
    <h3>1075000</h3>
    
  </div>
  
  
  
  </div>
        
  <div className='tall'>
  <h2>FOLLOW US:</h2>
  </div>
  <div className='pall'>
  < FacebookIcon/>
    <InstagramIcon/>  
    <XIcon/>
    <LinkedInIcon/>
    </div>
    <div className='tall'>
      <h2>RATE US:</h2>
      </div>
      <div className='fall'>
      
      <StarIcon/>
      <StarIcon/>
      <StarIcon/>
      <StarIcon/>
      <StarHalfIcon/>
    </div>
    </div>

  )
}

export default Contact
