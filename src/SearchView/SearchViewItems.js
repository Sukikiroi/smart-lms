import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "150px",
    marginBottom: "10px",
    boxShadow: "5px 10px 10px Azure",
    borderRadius: "6px",
    backgroundColor: "FloralWhite",
    display: "flex",
  },
  picture: {
    height: "100%",
    width: "130px",
    backgroundColor: " ",
    "& img": {
      height: "100%",
    },
  },
  info: {
    width: "100%",
    paddingLeft:'30px',
    height: "100%",
    display: "flex",
flexDirection:'column',
justifyContent:'flex-end'
  },
  title: {
    "& h4": {
      color: "#888",
      textDecoration: "underline",
      fontSize: "16px",
      fontWeight: "400",
      lineHeight: "160%",
      
    },
    display:'flex',
    justifyContent:'flex-start',
    width: "100%",
    height: "70%",
  },
  rating: {
      pddingBottom:'30px',
    width: "80%",
    height: "30%",
    display:'flex',
    justifyContent:'space-between',
    "& h5": {
        color: "#888",
        
        fontSize: "16px",
        fontWeight: "400",
        lineHeight: "160%",
        
      },
  },
}));
const Searchviewitems = ({ bookpicture }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.picture}>
        <img src={bookpicture} />
      </div>
      <div className={classes.info}>
 <div className={classes.title}>
     <h4>Getting to Yes: Negotiating Agreement Without Giving In</h4>
 </div>
 <div className={classes.rating}>
<h5>Year:2004</h5>

<h5>Language:english</h5>
<h5>File:PDF, 1.90 MB</h5>
<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq75r7Tq0oMMPb_4Qn7nM7ZzLLcv4DBrkaWQ&usqp=CAU'/>
 
 </div>
      </div>
    </div>
  );
};

export default Searchviewitems;
