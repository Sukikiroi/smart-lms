import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ChildCareIcon from '@material-ui/icons/ChildCare';
import RestoreIcon from '@material-ui/icons/Restore';
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';


const useStyles = makeStyles((theme) => ({
  root: {
 height:'260px',
 display:'block',
 marginTop:'70px',
 backgroundColor:'HoneyDew'
  },
 title:{
     height:'40px',
     backgroundColor:'white',
     display:'flex',
     justifyContent:'space-between',
     alignItems:'center',
     paddingLeft:'30px',
     paddingRight:'30px',
     '& button':{
         backgroundColor:'whiteSmoke',
         border:'none',
         height:'35px',
         borderRadius:'60px',
         cursor:'pointer'
     }
 },
 categorysection:{
     display:'flex',
     justifyContent:'center',
     alignItems:'center',
     paddingTop:'40px'
 },
 categoryitem:{
     height:'150px',
     width:'120px',
     backgroundColor:'white',
     borderRadius:'14px',
     marginLeft:'20px',
     outline:'none',
     borderColor:'LightGreen',
     display:'flex',
     flexDirection:'column',
     justifyContent:'center',
     alignItems:'center'
 }
}));




 
const Categorysection = () => {
    const classes = useStyles();
 
 

    return (
        <div     className={classes.root}>
           <div className={classes.title}>
               <h4>Select from category</h4>
               <button>Show All</button>
           </div>
           <div  className={classes.categorysection}>
            
<button  className={classes.categoryitem}>
    <FavoriteBorderIcon/>
    Art & Architectur
</button>
<button  className={classes.categoryitem}>
<ChildCareIcon/>
Children
</button>
<button  className={classes.categoryitem}>
<ChromeReaderModeIcon/>
Story
</button>
<button  className={classes.categoryitem}>
<RestoreIcon/>
History
</button>
<button  className={classes.categoryitem}>
<AccessibilityNewIcon/>
Romance
</button>
<button  className={classes.categoryitem}>
<FavoriteBorderIcon/>
</button>
<button  className={classes.categoryitem}>
<FavoriteBorderIcon/>
Music
</button>
<button  className={classes.categoryitem}>
<FavoriteBorderIcon/>
Fantasy
</button>
           </div>
        </div>
    )
}

export default Categorysection
