import { React, useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Link from '@mui/material/Link';



const ApplicationCard = (application) => {

    const [seeMore, setSeeMore] = useState(false);
    const [statusColor, setStatusColor] = useState('primary');
    const [cardText, setCardText] = useState('');
    
    const app = application.application;
    const [status, setStatus] = useState(app.status);


    useEffect(() => {
        setupCardBystatus(app.status)
    }, [app]);

    const setupCardBystatus = (status) => {
        if (status === "Interview") {
            setupInterviewCard();
        } else if (status === 'Applied') {
            setupAppliedCard();
        } else if (status === 'Offer') {
            setupOfferCard();
        } else if (status === 'Awaiting Results') {
            setupAwaitingCard();
        } else if (status === 'Rejected') {
            setupRejectedCard();
        } else {
            setupArchivedCard();
        }
    }

    const setupInterviewCard = () => {
        const remainingInterviews = app.interviews.filter((a) => !a.done);
        const nextInterview = remainingInterviews.sort((a, b) => a.date - b.date)[0];

        setStatusColor('primary');
        setCardText(`Next Interview on ${nextInterview.date.toLocaleString().slice(0, 10)}`);
    }

    const setupAppliedCard = () => {
        setStatusColor('info');
        setCardText(`Applied on ${app.appliedOn}`);
    }

    const setupOfferCard = () => {
        setStatusColor('success');
        setCardText('Offer Received')
    }

    const setupAwaitingCard = () => {
        const latestInterview = app.interviews.sort((a, b) => a.date - b.date);
        setStatusColor('warning');
        setCardText(`Last Interview on ${latestInterview[latestInterview.length - 1].date.toLocaleString().slice(0, 10)}`)
    }

    const setupRejectedCard = () => {
        setStatusColor('error');
        setCardText('Rejected');
    }

    const setupArchivedCard = () => {
        setStatusColor('default');
        setCardText('Archived Application');
    }

    const handleSeeMoreClick = () => {
        setSeeMore(!seeMore)
    }

    const redirectToJobReq = ()=> {
        window.open(app.jobURL, '_blank').focus()
    }

    const archiveApplication = ()=> {
        setStatus('Archived');
    }

    return (
        <div className="mt-3">
            <Card sx={{ maxWidth: 345 }}>
                <CardContent>
                    <Grid container justifyContent="space-between"
                        alignItems="center">
                        <Grid item>
                            <Typography gutterBottom variant="h5" component="div">
                                {app.companyName}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Chip label={status} color={statusColor} />
                        </Grid>

                    </Grid>
                    <Typography variant="body2" color="text.secondary">
                        {app.position}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {cardText}
                    </Typography>
                    {seeMore &&
                        <div style={{ paddingTop: '10px' }}>
                            <Typography variant="body2" color="text.secondary">
                                <b>Applied on: </b> {app.appliedOn}
                            </Typography>
                            {app.offer !== '' && <Typography variant="body2" color="text.secondary">
                                <b>Offer: </b>{app.offer}
                            </Typography>}
                            <Typography variant="body2" color="text.secondary">
                                <b>Notes: </b>{app.notes}
                            </Typography>
                            
                           
                           

                            <Typography style={{ paddingTop: '10px' }} variant="body2" color="text.secondary">
                                <b>Recruiters:</b>
                            </Typography>
                            {app.recruiters.length === 0 && 
                                <Typography style={{paddingLeft:'10px'}} variant="body2" color="text.secondary">
                                    No Recruiters
                                </Typography> 
                            }
                            {app.recruiters.map((recruiter) => {
                                return (
                                    <div style={{ paddingLeft: '10px', paddingTop: '5px' }}>
                                        <Typography variant="body2" color="text.secondary">
                                            <b>Name: </b> {recruiter.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            <b>Email: </b> {recruiter.email}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            <b>Phone: </b> {recruiter.phone}
                                        </Typography>
                                    </div>
                                );
                            })}
                            <Typography style={{ paddingTop: '10px' }} variant="body2" color="text.secondary">
                                <b>Interviews:</b>
                            </Typography>
                            {app.interviews.length === 0 && 
                                <Typography style={{paddingLeft:'10px'}} variant="body2" color="text.secondary">
                                            No Interviews Yet
                                </Typography> 
                            }
                            {app.interviews.length > 0 && app.interviews.map((interview) => {
                                return (
                                    <div style={{ paddingLeft: '10px', paddingTop: '5px' }} >
                                        <Typography variant="body2" color="text.secondary">
                                            <b>{interview.title}</b>
                                        </Typography>
                                        <Typography style={{ paddingLeft: '10px' }} variant="body2" color="text.secondary">
                                            <b>Date: </b> {interview.date.toLocaleString().slice(0, 9)}
                                        </Typography>
                                        <Typography style={{ paddingLeft: '10px' }} variant="body2" color="text.secondary">
                                            <b>Time: </b> {interview.time}
                                        </Typography>
                                        <Typography style={{ paddingLeft: '10px' }} variant="body2" color="text.secondary">
                                            <b>Location: </b> {interview.location}
                                        </Typography>
                                        <Typography style={{ paddingLeft: '10px' }} variant="body2" color="text.secondary">
                                            <Link href={interview.link}>Interview URL</Link>
                                        </Typography>
                                        <Typography style={{ paddingLeft: '10px' }} variant="body2" color="text.secondary">
                                            <b>Notes: </b>
                                        </Typography>
                                        <Typography style={{ paddingLeft: '20px' }} variant="body2" color="text.secondary">
                                            {interview.notes}
                                        </Typography>
                                    </div>
                                );
                            })}

                        </div>
                    }
                </CardContent>
                <CardActions>
                    <Button size="small" >Edit</Button>
                    <Button size="small" onClick={handleSeeMoreClick}>{seeMore ? 'Hide Details' : 'See Details'}</Button>
                    <Button onClick={redirectToJobReq} size="small">Job URL</Button>
                    <Button size="small" onClick={archiveApplication}>Archive</Button>
                </CardActions>
            </Card>
        </div>
    );
};

export default ApplicationCard;