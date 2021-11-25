import React from 'react';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';



const NewApplicationModal = ({closeApp}) => {
    return (
        <div>
            <Dialog open={true} onClose={()=>{}}>
        <DialogTitle>New Application</DialogTitle>
        <DialogContent>
          <Grid container spacing={3}>
              <Grid item xs={6}>
                <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Company"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
              </Grid>

              <Grid item xs={6}>
                <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Poistion"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
              </Grid>
          </Grid>
          
          <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Application URL"
                        type="url"
                        fullWidth
                        variant="standard"
                    />
                     <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Status</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={''}
          onChange={()=>{}}
          label="Status"
        >
         
          <MenuItem value={10}>Applied</MenuItem>
          <MenuItem value={20}>Interview</MenuItem>
         
          <MenuItem value={30}>Awaiting Results</MenuItem>
          <MenuItem value={30}>Offer</MenuItem>
          <MenuItem value={30}>Rejected</MenuItem>
        </Select>
      </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeApp}>Cancel</Button>
          <Button >Subscribe</Button>
        </DialogActions>
      </Dialog>
        </div>
    );
};

export default NewApplicationModal;