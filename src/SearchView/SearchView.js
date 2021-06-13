import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
 width:'100%',
 margin:'auto',
 border:'1px solid black'
  },
 
}));


const Searchview = () => {
    const classes = useStyles();
 
 
 
    return (
        <div    className={classes.root} >
            Searchview
        </div>
    )
}

export default Searchview
