import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Searchviewitems from "./SearchViewItems";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height:'600px',
    margin: "auto",
     
    display:'flex',
    justifyContent:'center',
    marginBottom:'30px'
  },
  root2:{
    marginBottom:'30px',
    width: "60%",
    height:'600px',
  }
}));

const Searchview = () => {
  const classes = useStyles();

  return(
  
  <div className={classes.root}>
    <div  className={classes.root2}>
        <Searchviewitems bookpicture={'https://covers.zlibcdn2.com/covers200/books/5f/08/98/5f0898770d0cb42d21cd91f55eab70ea.jpg'}/>
        <Searchviewitems bookpicture={'https://covers.zlibcdn2.com/covers200/books/a7/56/86/a7568672f574017378f0ff9814108772.jpg'}/>
        <Searchviewitems bookpicture={'https://covers.zlibcdn2.com/covers200/books/57/78/71/577871dd23aaab8d107b77eac8856744.jpg'}/>
        <Searchviewitems bookpicture={'https://covers.zlibcdn2.com/covers200/books/86/da/8e/86da8e946d91058716de83bb1d469273.jpg'}/>
        <Searchviewitems bookpicture={'https://covers.zlibcdn2.com/covers200/books/45/83/65/458365e0a86de3b6392feb97c110647e.jpg'}/>
        <Searchviewitems bookpicture={'https://covers.zlibcdn2.com/covers200/books/61/6f/db/616fdbd37b6a97573086c8a1da34b6c9.jpg'}/>
        <Searchviewitems bookpicture={'https://covers.zlibcdn2.com/covers200/books/6e/e3/ba/6ee3bacfdcb92da9a22eb731e9d26303.jpg'}/>
        <Searchviewitems bookpicture={'https://covers.zlibcdn2.com/covers100/books/3d/ff/59/3dff595a3c19957b38c8471ce1c557c6.jpg'}/>
        <Searchviewitems bookpicture={'https://covers.zlibcdn2.com/covers299/books/f1/98/d5/f198d5f87494883d0ffb37b024dfd1b9.jpg'}/>
        <Searchviewitems bookpicture={'https://covers.zlibcdn2.com/covers299/books/96/f9/97/96f997237d1fffe83467f130c350f275.jpg'}/>
        </div>  



  </div>
  
  
  )
};

export default Searchview;
