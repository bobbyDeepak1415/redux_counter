import React from 'react'
import { useSelector, useDispatch } from "react-redux";


export default function Navbar(props) {
    
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();


    return (
        <>
            <h1>I am a navbar and the count is at:{count}</h1>
        </>
    )
}
