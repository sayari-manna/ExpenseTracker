//import logo from './logo.svg';
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddComponent from './component/AddComponent';
import AddNavbar from './component/AddNavbar';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import FilterData from './component/FilterData';
function App() {
  //fetch('http://127.0.0.1:8000/add_expences/');
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  console.log("sdfghjdsfghjkl")
  return (
    <ThemeProvider theme={ darkTheme }>
      <div className="App-header">
        <Router>
          <AddNavbar></AddNavbar>
          <Switch>
            <Route path="/Add">
              <AddComponent />
            </Route>
            <Route path="/View">
              <FilterData />
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
