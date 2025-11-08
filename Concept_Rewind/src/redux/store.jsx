import {createStore} from 'redux'; 

const ADD_TASK = "task/add";
const DELETE_TASK = "task/delete";

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

        default: 
          return state;
    }
};



export const store = createStore(taskReducer);
// console.log(store);
// console.log("Initial state is : ", store.getState());


// Action creators
export const addTask = (data)=>{
    return {type: ADD_TASK, payload: data};
}

export const deleteTask = (data)=>{
    return {type: DELETE_TASK, payload: data}
}

// Now we want to add any data into the store. For that we have to call the dispatch method
// store.dispatch({type: ADD_TASK, payload: "Buy banana from market"});
//Adding data using 'action creators' this is more convenient then the above method
// store.dispatch(addTask("Buy apple from the market"));
// store.dispatch(addTask("Buy Tea from the market"));
// store.dispatch(addTask("Buy grapes from the market"));
// console.log("Updated state is : ", store.getState());

// store.dispatch({type: DELETE_TASK, payload: 0});  // We passed 0 to delete 0 index data from the task array
// console.log("After Delete state is : ", store.getState());





