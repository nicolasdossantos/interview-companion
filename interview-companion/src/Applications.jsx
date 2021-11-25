import { React, useState, useEffect } from 'react';
import ApplicationCard from './ApplicationCard';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MockApplications from './mockFiles/mockApplications';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import AddIcon from '@mui/icons-material/Add'
import NewApplicationModal from './NewApplicationModal';
import Fab from '@mui/material/Fab';




const Applications = () => {

    const [shouldDisplayArchive, setShouldDisplayArchive] = useState(false);
    const [applications, setApplications] = useState([]);
    const [showNewApp, setShowNewApp] = useState(false);


    useEffect(() => {
       setApplications(getApplications());
    }, []);

    const getApplications = () => {
        //Make API Call
        return MockApplications;
    };

    const toggleShowArchived = () => {
        setShouldDisplayArchive(!shouldDisplayArchive)
    }

    const openNewApp = ()=> {
        setShowNewApp(!showNewApp)
    }



    return (
<>
        <div>
            {showNewApp && <NewApplicationModal closeApp={openNewApp} />}
            <Container style={{ marginTop: '50px' }}>
                <Grid container justifyContent="space-between">
                    <Grid item>
                        <Grid container>
                            <Grid item>
                            <Typography  variant="h3"  color="white">
                            Applications
                        </Typography>
                            </Grid>
                            <Grid item style={{marginTop:'12px', marginLeft: '10px'}}>
                            <Fab onClick={openNewApp} size="small" color="primary" aria-label="add">
                                <AddIcon />
                            </Fab>
                            </Grid>
                        </Grid>
                       
                        

                    </Grid>
                    <Grid item>
                        <FormGroup style={{ paddingTop: '30px', paddingRight: '30px' }}>
                            <FormControlLabel 
                                control={
                                    <Switch color="error" onChange={toggleShowArchived} />
                                } 
                                label="Show Archived Applications" 
                                style={{ color: 'white' }} 
                            />
                        </FormGroup>
                    </Grid>
                </Grid>
                <Grid container justifyContent="center" >
                    {applications.filter ((application) => { return application.status !== 'Archived'}).map((app) => {
                         return (
                            <Grid item xs={12} md={6} lg={4} xl={4} style={{ marginTop: '10px', marginBottom: '10px' }}>
                                <div><ApplicationCard application={app} /></div>
                            </Grid>
                        )   
                    }  
                    )}
                </Grid>
            </Container>
        </div>

        
       { shouldDisplayArchive && 
        <div>
            <Container style={{ marginTop: '50px' }}>
                
                    
                            <Typography  variant="h3"  color="white">
                            Archived Applications
                        </Typography>
                            
                       
                        

                    
                <Grid container justifyContent="flex-start" >
                    {applications.filter ((application) => { return application.status === 'Archived'}).map((app) => {
                         return (
                            <Grid item xs={12} md={6} lg={4} xl={4} style={{ marginTop: '10px', marginBottom: '10px' }}>
                                <div><ApplicationCard application={app} /></div>
                            </Grid>
                        )   
                    }  
                    )}
                </Grid>
            </Container>
        </div>
}
        </>
    );
};

export default Applications;