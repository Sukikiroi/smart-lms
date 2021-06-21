import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
   backgroundColor:'white',
   borderRadius:'20px',
   height:'250px',
   width:'450px',
   outine:'none',
   border:'none',
   padding:'60px',
   display:'flex',
   flexDirection:'column',
   '& input':{
       marginBottom:'30px'
   },
   '& button':{
       width:'150px',
       height:'50px',
       backgroundColor:'yellowgreen',
       borderRadius:'60px',
       border:'none',
       outline:'none',
       cursor:'pointer',
       color:'white',
       fontSize:'14px',
       fontWeight:'bold'
   }
  },
}));

export default function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div  >
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
      type="button" onClick={handleOpen}>
        Contact
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
           <input type='text' placeholder='Full Name' style={{height:'45px',outline:'none',border:'2px solid yellowgreen',paddingLeft:'30px'}}/>
           <input type='text' placeholder='Message' style={{height:'145px',outline:'none',border:'2px solid yellowgreen',paddingLeft:'30px'}}/>

           <button>Send Message</button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
