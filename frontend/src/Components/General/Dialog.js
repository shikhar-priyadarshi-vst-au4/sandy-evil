import React from 'react';
import { Button, Dialog, 
         DialogActions, DialogContent, 
         DialogContentText, DialogTitle } from '@material-ui/core';
export default function AlertDialog( { profileCreated, isLoggedIn, part, handleClose } ) {

  return (
    <div>
      <Dialog
        open={part === 'career-login'?isLoggedIn : profileCreated }
        onClose={() => handleClose(part === 'career-login'?"isLoggedIn" : "profileCreated")}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">{"Welcome to Towny"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" style={{fontWeight : "500"}}>
           { part === 'career-login'? `You're logged in successfully`
           :`Profile created successfully. The required creditenials have seen saved with Towny.
              Login to check the profile.`}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose(part === 'career-login'?"isLoggedIn" : "profileCreated")}
           color="primary" autoFocus>
            Proceed
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}