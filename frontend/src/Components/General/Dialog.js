import React from 'react';
import { Button, Dialog, 
         DialogActions, DialogContent, 
         DialogContentText, DialogTitle } from '@material-ui/core';
import {Link} from 'react-router-dom';         
export default function AlertDialog( { profileCreated, isLoggedIn, 
            loggedIn, isRegister,
            part, handleClose, ...rest }) {
  
  return (
    <div>
      { [ 'career', 'career-login' ].includes(part) && <Dialog
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
          <Button 
          onClick={() => handleClose(part === 'career-login'?"isLoggedIn" : "profileCreated")}
           color="primary" autoFocus>
            Proceed
          </Button>
          <Link style = {{textDecoration : "none"}} 
          to={`/dashboard`}><Button color="primary">Go to dashboard</Button></Link>
        </DialogActions>
      </Dialog>}
      {
        ['signup','login'].includes(part) && <Dialog
        open={ part==='login'?loggedIn : isRegister }
        onClose={() => handleClose(`${part==='login'?'loggedIn':'isRegister'}`)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">{"Welcome to Towny"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" style={{fontWeight : "500"}}>
           { part === 'login'? `You're logged in successfully`
           :`Profile created successfully. The required creditenials have seen saved with Towny.
              Login to check the profile.`}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button 
          onClick={() => handleClose(`${part==='login'?'loggedIn':'isRegister'}`)}
           color="primary" autoFocus>
            Close
          </Button>
          {part === 'login' && <Link style = {{textDecoration : "none"}} 
          to={`/user`}><Button color="primary">Go to Profile Page</Button></Link>}
        </DialogActions>
      </Dialog>
      }
    </div>
  );
}