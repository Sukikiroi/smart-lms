import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Tooltip from '@material-ui/core/Tooltip';
const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
   height:'400px',
   width:'350px',
   backgroundColor:'white',
   border:'2px solid dodgerblue',
   borderRadius:'6px',
  
    padding: theme.spacing(2, 4, 3),
  },
  sendmessage:{
    backgroundColor:'dodgerblue',
    height:'35px',
    width:'150px',
    color:'white',
    borderRadius:'6px',
    outline:'none',
    border:'none',
    cursor:'pointer'
  },
  form:{
    height:'200px',

    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    '& input':{
      width:'80%',
      marginTop:'20px',
      border:'2px solid DeepSkyBlue',
      borderRadius:'4px',
      outline:'none',
      height:'40px'
    },
    '& button':{
      width:'40%',
      marginTop:'10px',
      backgroundColor:'black',
      color:'white',
      height:'40px',
      borderRadius:'10px',
      outline:'none',
      cursor:'pointer'
    }
  },
  message:{
    height:'100px',
   
  }
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
    <div>
        <Tooltip title="You can write a book review and share your experiences.">
        <button className={classes.sendmessage} type="button" onClick={handleOpen}>
  Send Message
      </button>
</Tooltip>
   
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
            <h2 id="transition-modal-title">Message For Agents</h2>
            <p id="transition-modal-description">Agents will always be interested in your opinion of the books you've read. Whether you've loved the book or not, if you give your honest and detailed thoughts then people will find new books that are right for them.</p>

            <div className={classes.form}>
<input type='text ' placeholder='Full Name '/>
<input className={classes.message} type='text ' placeholder='Your Message'/>
<button>Send</button>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
