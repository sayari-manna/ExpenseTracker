import * as React from 'react';
import Box from '@mui/material/Box';
import { TextField,FormControl,Button } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import './AddComponent.css';


export default function AddComponent() {
    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
      });
    const [value, setValue] = React.useState(new Date());
    const handleChange = (newValue) => {
        setValue(newValue);
    };
    const [open, setOpen] = React.useState(false);
    const handleClose = (event, reason) => {
            if (reason === 'clickaway') {
            return;
            }

            setOpen(false);
        };
    function handleSubmit(event) {
        event.preventDefault();
        let name = {}
        fetch('api/add_expences',{
                method:'POST',
                body: JSON.stringify({"subject":event.target[0].value,
                    "date":value,
                    "price":event.target[2].value}),
                headers:{
                'accept':'application/json',
                'Content-Type': 'application/json'}}
        ).then(function(response){
            return response.json();
        }).then(function(response){
            name['answer'] = response;
        });
        setOpen(true);
        //window.location.href = "/App";
        
      }
      
      const commonStyles = {
        bgcolor: '#222222',
        m: 1,
        border: 1,
        width: '35ch',
        height: '25ch',
      };
    return (<Box sx={{pt:10, paddingLeft:"35%"}}>
        <FormControl onSubmit = {handleSubmit} sx={{...commonStyles, borderRadius: '16px', borderColor:'#6f9aee'}}>
        <div>
            <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' }, paddingLeft:"14%", paddingTop:"5%"
            }}
            noValidate
            autoComplete="off"
            >
            <div>
                <TextField
                Description
                required
                id="outlined-required"
                label="Description"
                InputLabelProps={{
                    shrink: true,
                }}
                />
            </div>
            <div>
                <TextField
                required
                id="outlined-required"
                label="Amount"
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
                />
            </div>
            <div>
                <Box sx={{textAlign:'center',pr:6}}>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                        required
                        label="Date"
                        inputFormat="dd/MM/yyyy"
                        value={value}
                        onChange={handleChange}
                        renderInput={(params) => <TextField {...params} />}
                    />
                    </LocalizationProvider>
                </Box>
                <Box sx={{pr:5,textAlign:'right', pb:3, pt:2}}>
                    <Button type="submit" variant="outlined" size="large">Add</Button>
                </Box>
            </div>
            </Box>
        </div>
    </FormControl>
    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Expense added in the Tracker
        </Alert>
      </Snackbar>
    </Box>
  );
  
}