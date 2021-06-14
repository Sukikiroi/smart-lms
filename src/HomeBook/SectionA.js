import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Ilustration from "./ilustration.jpg";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: "white",
    height: "300px",
    display: "flex",
  },
  left: {
    width: "50%",
    height: "100%",

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "centerr",
  },
  right: {
    width: "50%",
    height: "100%",
    "& img": {
      height: "350px",
    },
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  filedsearch: {
    margin: "auto",
    display: "flex",
    "& input": {
      width: "200px",
      height: "30px",
      borderRadius: "60px",
      paddingLeft:'20px',
      marginRight:'30px',
      outline:'none',
      border:'1px solid grey'
    },
    "& button": {
      width: "90px",
      height: "35px",
      borderRadius: "60px",
      backgroundColor:'DarkSlateGrey',
      color:'white',
      border:'none',
      outline:'none',
      cursor:'pointer'
    },
  },
  title: {
    margin: "auto",
  },
}));

const Sectiona = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.left}>
        <div className={classes.title}>
          <h1>Ready for books</h1>
        </div>
        <div className={classes.filedsearch}>
          <input type="text" placeholder="saerch..." />
          <button>Search</button>
        </div>
      </div>
      <div className={classes.right}>
        <img src={Ilustration} />
      </div>
    </div>
  );
};

export default Sectiona;
