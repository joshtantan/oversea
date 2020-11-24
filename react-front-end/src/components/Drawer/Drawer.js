import React, { useState } from 'react';
import './Drawer.scss';
import { 
  Drawer as Sidebar, 
  List, 
  ListItem,
  ListItemText,
} from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  drawer: {
    width: '240px',
    color: 'white'
  },
  paper: {
    backgroundColor: '#01234c',
    width: '240px',
    textAlign: 'center'
  },
  button: {
    padding: '10px',
    borderRadius: '10px',
    textAlign: 'center',
    "&:hover": {
      backgroundColor: '#a6d0ef',
      padding: '10px',
      borderRadius: '20px'
    }
  }
});


function Drawer(props) {
  const classes = useStyles();
  console.log('drawer props', props)
  return (
    <Sidebar variant="permanent" className={classes.drawer} classes={{ paper: classes.paper }}>
      <img
        className="logo--centered"
        src={require('../../images/logo-white.png')}
        alt="Interview Scheduler"
        width="100px"
        height="100px"
      />
      <List>
        <ListItem button key="root" classes={{ root: classes.button }} >
          <ListItemText primary="Dashboard" />
        </ListItem>
        {props.accounts.map((account) => (
          <ListItem button key={account.id} classes={{ root: classes.button }} onClick={() => props.setAccount(account.name)}>
            <ListItemText primary={account.name} />
        </ListItem>
        ))}
      </List>  
    </Sidebar> 
  );
}

export default Drawer;