import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import FunctionsIcon from '@mui/icons-material/Functions';
import MenuBookIcon from '@mui/icons-material/MenuBook';

const drawerWidth = 240;

export default function PermanentDrawerLeft() {
  const icons = {
    Applications: <InboxIcon />,
    Problems: <FunctionsIcon /> ,
    Resources: <MenuBookIcon/>
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
    
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
          <Typography variant="h4" style={{margin:'10px'}}>Interview Companion</Typography>
        
        <Divider />
        <List>
          {['Applications', 'Problems', 'Resources'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {icons[text]}
              </ListItemIcon>
              <ListItemText primary={text} style={text === 'Applications' ? {color: 'primary', fontWeight: 100}: {}} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Settings', 'Logout'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <SettingsIcon /> : <LogoutIcon />}
              </ListItemIcon>
              <ListItemText primary={text}  />
            </ListItem>
          ))}
        </List>
      </Drawer>
     
    </Box>
  );
}