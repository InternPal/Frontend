import * as actionTypes from "../actionTypes";

const initialState = {
    email : null || localStorage.getItem("email"),
    role : null || localStorage.getItem("role"),
    id : null || localStorage.getItem("id"),
    name : null || localStorage.getItem("name"),
    sid : null || localStorage.getItem("sid"),
    semester : null || +localStorage.getItem("semester"),
    offer : null || (localStorage.getItem("offer") === "true" ? true : false),
};

const UserReducer = (state = initialState, action)=>{
    switch(action.type){
        case actionTypes.LOGIN_SUCCESS :
            return {
                ...state,
                email : action.role,
                role : action.role,
                id : action.id,
                name : action.name,
                sid : action.sid,
                semester : action.semester,
                offer : action.offer
            };
        
        case actionTypes.LOGOUT :
            return {
                email : null,
                roll : null,
                id : null,
                name : null,
                sid : null,
                semester : null,
                offer : null
            };
        default : return state; 
    }
}


export default UserReducer;