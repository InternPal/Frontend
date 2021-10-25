import * as actionTypes from "../actionTypes";

const initialState = {
    index : 0
};

const StudentReducer = (state = initialState, action)=>{
    switch(action.type){
        case actionTypes.REGISTER_CRED_VALID :
            return {
                ...state,
                index : 1
            };
        case actionTypes.INCREMENT_INDEX :
            return {
                ...state,
                index : (state.index + 1)%4,
            };
        default : return state;
    }
}

export default StudentReducer;