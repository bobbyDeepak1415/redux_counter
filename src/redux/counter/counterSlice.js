import { createSlice } from "@reduxjs/toolkit"

const initialState={
  value:0
}


const counterSlice=createSlice({
  name:"counter",
  initialState,
  reducers:{
    increment:(count)=>{
 count.value+=1
    },
    decrement:(state)=>{
state.value=-1
    },
    multiplyBy2:(state)=>{
state.value*=2
    },
    increseByAmount:(state,action)=>{
state.value+=action.payload
    },
  }
})



export default counterSlice.reducer