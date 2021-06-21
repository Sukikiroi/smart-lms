import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import ContactModal from './ContactModal'
const useStyles = makeStyles((theme) => ({
  root: {
    height: "80px",
    width: "100%",

    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    paddingLeft: "30px",
    width: "20%",
    height: "80px",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    "& img": {
      height: "45px",
    },
  },
  buttons: {
    width: "80%",
    height: "80px",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingLeft: "30px",
    paddingRight: "30px",
    "& button": {
      marginRight: "30px",
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.logo}>
        <img src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLfdQ2FWNXNPU3-rL1xHiff0q9x-JYoX2xzA&usqp=CAU" />
      </div>
      <div className={classes.buttons}>
        <button
          style={{
            border: "none",
            backgroundColor: "whiteSmoke",
            height: "35px",
            width: "80px",
            borderRadius: "60px",
            cursor: "pointer",
            outline: "none",
          }}
        >
          About
        </button>
        <div style={{ width: "80px" }}>
          <Badge badgeContent={4} color="error">
            <LocalLibraryIcon />
          </Badge>
        </div>
<ContactModal 
 style={{
  border: "none",
  backgroundColor: "whiteSmoke",
  height: "35px",
  width: "80px",
  borderRadius: "60px",
  cursor: "pointer",
  outline: "none",
}}
/>
         
        <button
          style={{
            backgroundColor: "white",
            border: "1px solid grey",
            width: "100px",
            height: "35px",
            borderRadius: "60px",
            cursor: "pointer",
            outline: "none",
          }}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Navbar;
