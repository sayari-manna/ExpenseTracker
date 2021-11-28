import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';

export default function ExpenseItem(props) {
  let items = [];
  let page_count = 0;
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
      setPage(value);
  };
  if(props.result !== undefined || props.result !== null){
    let years = [];
    let count = 0;
    let month = [];
    let start = (page-1)*7;
    if (props.year==="All"){
        years.push("2019");
        years.push("2020");
        years.push("2021");
        years.push("2022");
      }
    else{
      years.push(props.year);}
    if (props.month==="All"){
        month.push("January","February","March","April","May","June","July","August","September","October","November","December");
      }
    else{
      month.push(props.month);}
    console.log(month);
    
    for (let i in props.result){
      if(years.includes(props.result[i].year) && month.includes(props.result[i].date.split(' ')[1])){
      if(count>=start && count<start+7){
        items.push(<Accordion sx={{maxHeight:'78px'}}>
              <AccordionSummary>
                <Typography sx={{ width: '10%', flexShrink: 0}}>
                  <Stack direction="row" spacing={1}>
                      <Chip sx={{ paddingTop: '3%', fontSize: 13, minHeight:'55px' , minWidth:'110px'}} label= {<div>{props.result[i].date}
                                    <br/>
                                    {props.result[i].year}</div>} color="primary" variant="outlined" size="large" align='center'/>
                  </Stack>
                </Typography>
                <Typography sx={{ width: '60%', fontSize: 20, color: 'text.primary', align: 'left', p:3, pl:10}}>
                  { props.result[i].subject }</Typography>
                <Typography sx={{ width: '17%', color: 'text.secondary', align:'right', paddingRight:'30%', alignItems:'center', p:2, pt:0}}>
                  <Stack direction="row" spacing={1}>
                      <Chip sx={{ p:3, color: 'text.secondary', align:'right' }}
                      label= { <div><h2>{ props.result[i].price }</h2></div> } color="secondary" variant="outlined"/>
                  </Stack>
                </Typography>
              </AccordionSummary>
            </Accordion>)
            }
          count = count + 1;
          }
        }
        page_count = Math.ceil(count/7)
      }
    
  return (
    <box paddingLeft='50%' sx={{}}>
      { items }
      <Stack spacing={2}>
        <Pagination count={page_count} onChange={handleChange} />
      </Stack>
    </box>
  );
}