import React, {useCallback}  from "react";
import { makeStyles } from "@material-ui/core/styles";
import {useHistory} from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
   margin:'auto',

    marginTop: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  search: {
    width: "100%",
    height: "100px",
    
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& input": {
      width: "300px",
      outline: "none",
      height: "35px",
      border: "2px solid dodgerblue",
      paddingLeft: "30px",
      fontSize: "12px",
      fontWeight: "bold",
      borderRadius:'2px',
    },
    "& button": {
      height: "40px",
      width:'100px',
      borderRadius:'2px',
      backgroundColor: "dodgerblue",
      border: "none",
      marginLeft: "10px",
      color:'white',
      cursor:'pointer',
      outline:'none'
    },
  },
}));
const Search = () => {
  const classes = useStyles();
  const history = useHistory();
  const handleOnClick = useCallback(() => history.push('/Search'), [history]);
  return (
    <div className={classes.root}>
      <div className={classes.search}>
        <input type="text" placeholder="Search For a Book"  />
        <button onClick={handleOnClick}>Search</button>
      </div>

      
    </div>
  );
};

export default Search;
