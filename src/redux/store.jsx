import { configureStore } from "@reduxjs/toolkit";

import CounterReducer from './MoviesSlice'


const store=configureStore({
    reducer:{
        counter:CounterReducer
    }
})

export default store