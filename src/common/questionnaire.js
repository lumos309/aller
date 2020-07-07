import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Slider from '@material-ui/core/Slider';
import TextField from '@material-ui/core/TextField';
import React, {useState} from 'react';
import styled from 'styled-components';
import {GlobalStore} from 'global-store-hook';

const StyledTextField = styled(TextField)`
    && {
        margin: 20px 0;
    }
`


const Questionnaire = () => {

    const store = GlobalStore();
    const handleClose = () => {
        store.set('confidenceDialog', true)
    }

    function confidence(value) {
        return `${value}`;
    }
    const marks = [
        {
            value: 2,
            label: 'Unconfident 😫'
        },
        {
            value: 4,
            label: '😄  Confident'
        },
    ]

    return (
        <Dialog fullWidth={true} maxWidth="md" open={!store.get('confidenceDialog')} onClose={handleClose} >
            <DialogTitle>Thank you for choosing Aller! 🎉</DialogTitle>
            <Divider/>
            <DialogContent>
                <DialogContentText>
                    Before starting, we would like to know more about you!
                    <br/>
                    Please answer these short questions 😊
                </DialogContentText>
            </DialogContent>
            
            <DialogContent>
                <DialogContentText>
                    <p>How confident are you in booking a trip in the current climate?</p>
                    <Slider
                        defaultValue={3}
                        getAriaValueText={confidence}
                        aria-labelledby="discrete-slider"
                        valueLabelDisplay="auto"
                        step={1}
                        marks={marks}
                        min={1}
                        max={5}
                    />
                    <StyledTextField
                        
                        margin="dense"
                        id="name"
                        label="What concerns you when booking your trip?"
                        type="text"
                        fullWidth
                    />
                    <StyledTextField
                        margin="dense"
                        id="name"
                        label="What's important to you when travelling to a location affected by COVID-19?"
                        type="text"
                        fullWidth
                    />

                </DialogContentText>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Answer Later
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Let's go!
                    </Button>
                </DialogActions>
            </DialogContent>

        </Dialog>
    )

}

export default Questionnaire;