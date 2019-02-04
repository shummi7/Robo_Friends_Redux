import {CHANGE_SEARCH_FIELD} from './constants'

const initial_state={
    searchField:''
}

export const reducer_searchRobots =(state=initial_state,action={})=>{
     switch(action.type){
         case CHANGE_SEARCH_FIELD:
         return(Object.assign({},state,{searchField:action.payload}));
         default:
         return state;
     }
}