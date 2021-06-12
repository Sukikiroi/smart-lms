import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import random from 'random'
const useStyles = makeStyles((theme) => ({
  root: {
 width:'200px',
 height:'300px',
 color:'grey',
 fontWeight:'bold',
 textDecoration:'none',
 marginTop:'20px',
 marginBottom:'20px',
 display:'block'
  },
 pic:{
     
    width:'100%',
    height:'90%',
    '& img':{
        height:'100%',
        width:'100%'
    }
 },
 rating:{
     width:'100%',
     height:'10%',
     display:'flex',
     justifyContent:'center',
     paddingTop:'10px'
    
 }
}));





const Bookscard = ({imagebook}) => {
    const [value, setValue] = React.useState(2);
    const classes = useStyles();
    let randomPage=random.int(60, 300) // 72
    return (
        <a     href="/bookinfo"  className={classes.root} >
   <div  className={classes.pic}>
       <img src={imagebook}/>
   </div>
   <div  className={classes.rating}>
   <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
        Page:{randomPage}
       </div>    
        </a>
    )
}

export default Bookscard
