import * as actionTypes from "../actionTypes";

const initialState = {
    id : null,
    SID : null,
    name : null
};

const StudentReducer = (state = initialState, action)=>{
    switch(action.type){
        default : return state;
    }
}

export default StudentReducer;