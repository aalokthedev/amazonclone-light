import React from "react";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";

function Alert(props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function CustomizedSnackbars() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Button className='btn' variant='outlined' onClick={handleClick}>
        <button class='button'>
          <span>Add to cart</span>
          <div class='cart'>
            <svg viewBox='0 0 36 26'>
              <polyline points='1 2.5 6 2.5 10 18.5 25.5 18.5 28.5 7.5 7.5 7.5'></polyline>
              <polyline points='15 13.5 17 15.5 22 10.5'></polyline>
            </svg>
          </div>
        </button>
      </Button>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity='success'>
          Item addded Succesfully
        </Alert>
      </Snackbar>
    </div>
  );
}
