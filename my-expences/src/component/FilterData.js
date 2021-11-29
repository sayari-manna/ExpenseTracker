import React, {useState} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import BarData from './BarData';
import ExpenseItem from './ExpenseItem';
import './FilterData.css';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function FilterData(){
    const [result, setResult] = useState(null)

    // 3. Create out useEffect function
    React.useEffect(() => {
        fetch("api/show_expences",{
            method:'GET',
            headers:{
            'accept':'application/json',
            'Content-Type': 'application/json'}})
        .then(function(response){
            return response.json();
        })
        .then(function(response){
            setResult(response);
        })
    },[])
    const [year, setYear] = useState('All');
    
    const clickhandler = (event) => {
        setYear(event.target.value);
    };
    const [month, setMonth] = useState('All');
    
    const clickhandler_month = (event) => {
        setMonth(event.target.value);
    };
    
    return (
    <Box class='Ap-header-expense' sx={{minHeight: 200 }}>
        <Box sx={{ minWidth: 120, pl:2 }}>
        <Grid container spacing={2}>
            <Grid item xs={1}>
                <FormControl sx={{ xl: 1, width: 100, left:'2%'}} variant="standard">
                    <InputLabel id="demo-customized-select-native">Year</InputLabel>
                    <Select
                    labelId="demo-customized-select-native"
                    id="demo-simple-select"
                    value={year}
                    label="Year"
                    onChange= {clickhandler}
                    >
                    <MenuItem value="All">All</MenuItem>
                    <MenuItem value="2019">2019</MenuItem>
                    <MenuItem value="2020">2020</MenuItem>
                    <MenuItem value="2021">2021</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={1}>
            <FormControl sx={{ xl: 1, width: 100, left:'2%'}} variant="standard">
                <InputLabel id="demo-customized-select-native">month</InputLabel>
                <Select
                labelId="demo-customized-select-native"
                id="demo-simple-select"
                value={month}
                label="month"
                onChange= {clickhandler_month}
                
                >
                <MenuItem value="All">All</MenuItem>
                <MenuItem value="January">Jan</MenuItem>
                <MenuItem value="February">Feb</MenuItem>
                <MenuItem value="March">Mar</MenuItem>
                <MenuItem value="April">Apr</MenuItem>
                <MenuItem value="May">May</MenuItem>
                <MenuItem value="June">Jun</MenuItem>
                <MenuItem value="July">July</MenuItem>
                <MenuItem value="August">Aug</MenuItem>
                <MenuItem value="September">Sep</MenuItem>
                <MenuItem value="October">Oct</MenuItem>
                <MenuItem value="November">Nov</MenuItem>
                <MenuItem value="December">Dec</MenuItem>
                </Select>
            </FormControl>
            </Grid>
        </Grid>
        </Box>
        <Box sx={{minHeight: 10}}></Box>
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <Box sx={{bgcolor:'#282c34', left:'40%', paddingLeft:'2%'}}>
                    <ExpenseItem year={year} result={result} month={month}></ExpenseItem>
                </Box>
            </Grid>
            <Grid item xs={6}>
                <Box sx={{bgcolor:'#282c34', right:'40%', paddingRight:'2%'}}>
                    <BarData year={year} result={result}></BarData>
                </Box>
            </Grid>
        </Grid>
    </Box>
  );
}
