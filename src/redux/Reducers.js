 import {SELECT_CATEGORY} from './Constants'

const initialState = {
    categorySelected: 'All'
}

export const changeCategory = (state=initialState,action={}) => {  
    // console.log("Reducer changeCategory");
    // console.log(action.payload);
    // console.log(action);
    // console.log("...");
    switch(action.type){
        case SELECT_CATEGORY:
            return Object.assign({},state,{categorySelected: action.payload});        
        default: 
            return state;
    }
    return state;
} 

