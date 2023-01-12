import { ADD,DELETE, GETALL } from "../actions/add.todo"
import { dlt_All } from "../actions/addTodoCreate";


const initialState = []
 export const addTodoReducers = (state=initialState,action)=>{
    switch (action.type) {
        case ADD:
            return [...state,{id:new Date().getTime(),text:action.payload}]

        case DELETE: 
            return state.filter((i) => i.id !== action.payload.id);

        case GETALL:
            return [...action.payload]

        case "dlt_All":
            return []
        default:
            return state;
           
    }
 }

export default addTodoReducers;




























