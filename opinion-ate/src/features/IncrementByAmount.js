import React, { useState } from 'react';
import { incrementByAmount } from "./counter/counterSlice"
import { useSelector, useDispatch } from 'react-redux'
import { TextField, Button, Typography } from '@mui/material';
import  Counter  from "./counter/Counter.js"


export default function IncrementByAmount() {

    const dispatch = useDispatch();

    return (
        <div>
            <div>

                <Typography variant="h3" style={{ padding: '25px' }}> Lab 8 - Enter Number</Typography>
                <div style={{ padding: '25px' }}>
                    <TextField id="numBox" label='Input Number' type={'number'} style={{ marginRight: '25px' }}></TextField>
                    <Button variant="outlined" style={{ marginLeft: '25px' }} onClick={() => dispatch(incrementByAmount(Number(document.getElementById('numBox').value)))}> Submit </Button>
                    
                </div>
                <div>
                    <Counter></Counter>     
                </div>
                
            </div>
        </div>
    )
}