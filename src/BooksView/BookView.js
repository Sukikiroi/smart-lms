import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
const useStyles = makeStyles((theme) => ({
  root: {
 width:'100%',
 height:'500px',
 
 display:'flex',
 justifyContent:'center',
 marginTop:'60px',
 marginBottom:'60px'
  },
  root2:{
    width:'80%',
    height:'500px', 
 
    display:'flex'
  },
  bookimg:{
      width:'25%',
      height:'100%',
     
      '& img':{
          width:'100%'
      }
  },
  info:{
    width:'75%',
    height:'100%', 
    
    display:'block'
  },
  title:{
      height:'25px',
      width:'100%',
   
  },
  resume:{
   margin:'auto',
    width:'100%', 
    paddingLeft:'30px',
    '& p':{
        textAlign:'justify',
        textAlignLast:'left'
    }
  },
  message:{
    margin:'auto',
    width:'100%',  
    '& button' :{
        backgroundColor:'dodgerblue',
        height:'35px',
        width:'150px',
        color:'white',
        borderRadius:'6px',
        outline:'none',
        border:'none',
        cursor:'pointer'
    }
  }
})); 
const Bookview = () => {
    const classes = useStyles();
    return (
        <div     className={classes.root}>
         <div     className={classes.root2}>
           <div className={classes.bookimg} >
<img src='https://covers.zlibcdn2.com/covers299/books/38/76/73/387673e98f56879af0d2b8cef5c564fd.jpg'/>

           </div>
           <div  className={classes.info}>
<div  className={classes.title}>
    <h2>Guyton and Hall Textbook of Medical Physiology</h2>
</div>
<div  className={classes.resume}>
  <p>The 13th edition of Guyton and Hall Textbook of Medical Physiology continues this bestselling title's long tradition as the world’s foremost medical physiology textbook. Unlike other textbooks on this topic, this clear and comprehensive guide has a consistent, single-author voice and focuses on the content most relevant to clinical and pre-clinical students. The detailed but lucid text is complemented by didactic illustrations that summarize key concepts in physiology and pathophysiology.</p>

<p>KEY FEATURES:</p>
<p>- Larger font size emphasizes core information around how the body must maintain homeostasis in order to remain healthy, while supporting information and examples are detailed in smaller font and highlighted in pale blue.</p>
<p>- Summary figures and tables help quickly convey key processes covered in the text.</p>
<p>- Bold full-color drawings and diagrams.</p>
<p>- Short, easy-to-read, masterfully edited chapters and a user-friendly full-color design. </p>
</div>

<div className={classes.message}>
<Tooltip title="You can write a book review and share your experiences.">
<button>Send Message</button>
</Tooltip>

</div>
           </div>
        </div>
        </div>
    )
}

export default Bookview
