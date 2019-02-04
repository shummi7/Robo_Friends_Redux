import {CHANGE_SEARCH_FIELD} from './constants';

export const action_setSearchField=(text)=>({
    type:CHANGE_SEARCH_FIELD,
    payload:text
})