import { ADD,DELETE, GETALL } from "./add.todo";

export const add = (todo)=>{
    return {
        type: ADD,
        payload:todo
    }
}
export const dlt = (todo)=>{
    return{
        type:DELETE,
        payload:todo
    }
}
export const dlt_All = (todo)=>{
    return{
        type:'dlt_All',
        payload:todo
    }
}
export const getAll = ()=>{
    return async (dispatch) => {
		fetch('https://northwind.vercel.app/api/customers')
			.then((res) => res.json())
			.then((data) => {
				dispatch({ type: GETALL, payload: data });
			});
	};
}
