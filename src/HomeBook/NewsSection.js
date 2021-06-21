import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Newssectionitems from './NewsSectionItems';

const useStyles = makeStyles((theme) => ({
  root: {
 height:'350px',
 width:'100%',
 backgroundColor:'FloralWhite',
 display:'flex',
 padding:'5px'
  },
 
}));




 
const Newssection = () => {
    const classes = useStyles();
 
 
 
    return (
        <div    className={classes.root}>
        <Newssectionitems book_pictur={'https://covers.zlibcdn2.com/covers200/books/11/e0/85/11e085c17873c0b3c6d0dcdf6a790312.jpg'}/>
        <Newssectionitems book_pictur={'https://covers.zlibcdn2.com/covers200/books/7d/1f/af/7d1fafdb17a906201dcf28cb5a9f05b2.jpg'}/>
        <Newssectionitems book_pictur={'https://covers.zlibcdn2.com/covers200/books/07/16/1d/07161def2d116b0e3430a64e7a50dfd5.jpg'}/>
        <Newssectionitems book_pictur={'https://covers.zlibcdn2.com/covers200/books/af/f6/5f/aff65fb1b4cfd421013918408e75d7e4.jpg'}/>
        <Newssectionitems book_pictur={'https://covers.zlibcdn2.com/covers200/books/73/cc/9b/73cc9b56a06faad03d40b2ccecba74fc.jpg'}/>
        <Newssectionitems book_pictur={'https://covers.zlibcdn2.com/covers200/books/af/e1/55/afe155be630d4e1a9c78073d371da3ed.jpg'}/>
        <Newssectionitems book_pictur={'https://covers.zlibcdn2.com/covers200/books/4f/03/9e/4f039e0e862fbced0152d57cd18a6a4d.jpg'}/>
        </div>
    )
}

export default Newssection
