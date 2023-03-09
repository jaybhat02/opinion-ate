import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'
import { Typography } from '@mui/material';

//import styles from './Counter.module.css'
export default function Counter() {
    const count = useSelector((state) =>
        state.counter.value)
    const dispatch = useDispatch()
    return (
        <div>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    +
                </button>
                <Typography>{"Counter: " + count}</Typography>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    -
                </button>
            </div>
        </div>
    )
}