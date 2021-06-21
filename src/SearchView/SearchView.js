import React,{useState,useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Searchviewitems from "./SearchViewItems";
import axios from 'axios';
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
 const [books, setbooks] = useState([])
  
      useEffect(() => {
      
        // this is only executed once
        axios.get(`http://127.0.0.1:8000`)
        .then(res => {
          const books = res.data;
           setbooks(books)
           console.log(books)
        
        })
      }, [])
  return(
  
  <div className={classes.root}>
    <div  className={classes.root2}>

    {books.map((book) => (
        <div  >
          <Searchviewitems bookpicture={book.pictur_url}/>

        </div>
      ))}
            </div>  



  </div>
  
  
  )
};

export default Searchview;
