import {configureStore, createSlice} from "@reduxjs/toolkit"

const FETCH_TASK = "task/fetch";

const initialState = {
    task: [],
    isLoading: false,
}


// ----------- RTK Slice ---------
export const taskReducer = createSlice({
    name: "task",
    initialState: initialState,
    reducers:{
        addTask(state, action){
            state.task.push(action.payload);
            // state.task = [...state.task, action.payload]
        },
        deleteTask(state, action){
            state.task = state.task.filter((currTask, index)=>{
                return index!==action.payload
            })
        },
        deleteAllTaks(state){
            state.task = [];
        }
    }
});

export const { addTask, deleteTask, deleteAllTaks } = taskReducer.actions;

// ----------- New way to create store ----------
export const store = configureStore({
    reducer:{
        taskReducer: taskReducer.reducer,
    }
})
// console.log(store.getState());


// export const fetchTask = ()=>{
//     return async(dispatch)=>{
//       try{
//         const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=4');
//         const task = await res.json();
//         console.log(task);
//         dispatch({type: FETCH_TASK, payload: task.map((currTask)=>{
//             return currTask.title
//         })})
//       }catch(err){
//         console.log(err);
//       }
//     }
// }









