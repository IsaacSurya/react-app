import React from 'react';
import { styled } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';
import Stack from '@mui/material/Stack';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';


const ProSpan = styled('span')({
  display: 'inline-block',
  height: '1em',
  width: '1em',
  verticalAlign: 'middle',
  marginLeft: '0.3em',
  marginBottom: '0.08em',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundImage: 'url(https://mui.com/static/x/pro.svg)',
});

function Label({ componentName, valueType, isProOnly }) {
  const content = (
    <span>
      <strong>{componentName}</strong> for {valueType} editing
    </span>
  );

  if (isProOnly) {
    return (
      <Stack direction="row" spacing={0.5} component="span">
        <Tooltip title="Included on Pro package">
          <a
            href="https://mui.com/x/introduction/licensing/#pro-plan"
            aria-label="Included on Pro package"
          >
            <ProSpan />
          </a>
        </Tooltip>
        {content}
      </Stack>
    );
  }

  return content;
}


function Services() {
  return (
    <div className='dell2'>
      <h1>Date & Time</h1>
       <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={[
          'DatePicker',
          'TimePicker',
          'DateTimePicker',
          'DateRangePicker',
         
        ]}
      >
        <DemoItem label={<Label componentName="DatePicker" valueType="date" />}>
          <DatePicker />
        </DemoItem>
        <DemoItem label={<Label componentName="TimePicker" valueType="time" />}>
          <TimePicker />
        </DemoItem>
        <DemoItem
          label={<Label componentName="DateTimePicker" valueType="date time" />}
        >
          <DateTimePicker />
        </DemoItem>
        <DemoItem
          label={
            <Label
              componentName="DateRangePicker"
              valueType="date range"
              isProOnly
            />
          }
          component="DateRangePicker"
        >
          <DateRangePicker
            localeText={{
              start: '',
              end: '',
            }}
          />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>


    <h1>Sales</h1>
    <div className='dell1'>
  
<div className='dell'>
  <h2>Weekly Sales</h2>

  <h3>$4500</h3>
  <h4>Increased by 7%</h4>
</div>
<div className='dell'>
  <h2>Monthly Sales</h2>

  <h3>$65000</h3>
  <h4>Increased by 12%</h4>
</div>
<div className='dell'>
  <h2>Yearly Sales</h2>

  <h3>$1075000</h3>
  <h4>Increased by 22%</h4>
</div>


</div>
      
    </div>


    
  )
}




export default Services
