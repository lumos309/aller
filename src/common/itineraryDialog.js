import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Slider from '@material-ui/core/Slider';
import React from 'react';
import {GlobalStore} from 'global-store-hook';
import styled from 'styled-components';

const StyledParagraph= styled.p`
    text-align: center;
    margin-bottom: 40px;
`
const ItineraryDialog = () => {

    const store = GlobalStore();
    const handleClose = () => {
        store.set('itineraryDialog', true)
    }

    function money(value) {
        return `${value * 500}`;
    }
    const marks = [
        {
            value: 10,
            label: '< SGD 500 💸'
        },
        {
            value: 25,
            label: ' SGD 1000 '
        },
        {
            value: 50,
            label: ' SGD 5000 '
        },
        {
            value: 70,
            label: ' SGD 7000 '
        },
        {
            value: 90,
            label: '> SGD 10000 💰'
        },
    ]

    return (
        <Dialog fullWidth={true} maxWidth="md" open={!store.get('itineraryDialog')} onClose={handleClose} >
            <DialogTitle>Before you go...</DialogTitle>
            <Divider/>
            <DialogContent>
                <DialogContentText>
                    <StyledParagraph>What is your Budget allocation for this trip?</StyledParagraph>
                    <Slider
                        defaultValue={5}
                        getAriaValueText={money}
                        aria-labelledby="discrete-slider"
                        valueLabelDisplay="auto"
                        marks={marks}
                    />
                </DialogContentText>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        I'm not going 😥
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Bon Voyage! 🛫
                    </Button>
                </DialogActions>
            </DialogContent>

        </Dialog>
    )

}

export default ItineraryDialog;