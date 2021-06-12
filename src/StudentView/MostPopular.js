import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
 width:'100%',
 height:'400px',
 
 marginTop:'30px',
 display:'flex',
 flexDirection:'column',
 
 alignItems:'center'
  },
  title:{
    width:'40%', 
    height:'40px',
    borderBottom:'2px solid DodgerBlue',
  }
 
}));
 
const Mostpopular = () => {
    
 const classes = useStyles();
 
 

    return (
        <div  className={classes.root}>
            <div  className={classes.title}> Most popular Book</div>
           
            <div className={classes.mostpopularbooks}> Mostpopular</div>
        </div>
    )
}

export default Mostpopular
