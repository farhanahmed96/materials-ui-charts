import React from 'react';
import NavBar from './NavBar';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, TextField, Button } from '@material-ui/core';
import BarChart from './barChart';
import PieChart from './pieChart';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    width: 300,
    margin: '0 auto',
    textAlign: 'center',
    padding: 20
  },
  input: {
    width: '95%',
  },
  btn: {
    width: '40%',
    margin: 15,
  }
}));

function App() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <NavBar />
      <Paper elevation={3} className={classes.paper}>
        <h1>Login</h1>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField label="Standard" className={classes.input}/>
          <TextField label="Standard" className={classes.input}/>
          </form>
          <Button variant="contained" className={classes.btn}>Sign-In</Button>
          <Button variant="contained" color="primary" className={classes.btn}>Sign-Up</Button>
        
      </Paper> */}

      <BarChart />
      <PieChart />
    </div >
  );
}

export default App;
