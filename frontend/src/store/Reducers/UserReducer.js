import * as actionTypes from "../actionTypes";

const initialState = {
    email : null,
    role : null
};

const UserReducer = (state = initialState, action)=>{
    switch(action.type){
        case actionTypes.LOGIN_SUCCESS :
            return {
                ...state,
                email : action.role,
                role : action.role
            };
        default : return state; 
    }
}


export default UserReducer;