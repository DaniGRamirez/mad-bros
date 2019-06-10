import {SELECT_CATEGORY} from './Constants'


export const setCategory = (category) =>    
    ({        
    type : SELECT_CATEGORY,
    payload: category    })