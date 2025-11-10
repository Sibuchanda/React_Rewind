import {configureStore, createSlice} from "@reduxjs/toolkit"

const ADD_TASK = "task/add";
const DELETE_TASK = "task/delete";
const FETCH_TASK = "task/fetch";

const initialState = {
    task: [],
    isLoading: false,
}


const taskReducer = (state=initialState, action )=>{
    switch(action.type) {
        case ADD_TASK: 
            return {
                ...state,
                task: [...state.task, action.payload],
            };

        case DELETE_TASK:
            const updatedTask = state.task.filter((curTask, index)=>{
                return index !== action.payload;
            });
             return{
                ...state,
                task: updatedTask,
             };
        case FETCH_TASK:
            return{
                ...state,
                task:[...state.task, ...action.payload]
            };

        default: 
          return state;
    }
};

// ----------- RTK Slice ---------
createSlice({
    name: "task",
    initialState: initialState,
    reducers:{
        addTask(state, action){},
        deleteTask(state, action){},
    }

})


// ----------- Old way to create store ----------
// export const store = createStore(taskReducer, applyMiddleware(thunk));
// console.log(store);
// console.log("Initial state is : ", store.getState());

// ----------- New way to create store ----------
export const store = configureStore({
    reducer:{
        // taskReducer: taskReducer,    ---> As both {key,value} are same that is why, we can write simply
        taskReducer,
    }
})

// Action creators
export const addTask = (data)=>{
    return {type: ADD_TASK, payload: data};
}

export const deleteTask = (data)=>{
    return {type: DELETE_TASK, payload: data}
}

export const fetchTask = ()=>{
    return async(dispatch)=>{
      try{
        const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=4');
        const task = await res.json();
        console.log(task);
        dispatch({type: FETCH_TASK, payload: task.map((currTask)=>{
            return currTask.title
        })})
      }catch(err){
        console.log(err);
      }
    }
}







