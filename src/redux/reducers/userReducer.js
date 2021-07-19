import actionTypes from "../actionTypes/actionTypes";
const initialUserState ={
    loading : false,
    users : [],
    error : ''
}
const UserReducer = (state = initialUserState , action)=>{
    switch (action.type){
        case actionTypes.USER_REQUEST : return{
            ...state ,
            loading: true
        }
        case actionTypes.USER_SUCCESS : return {
            ...state ,
            loading: false,
            users: action.payload
        }
        case actionTypes.USER_FAILURE: return {
            ...state ,
            loading: false,
            error: action.payload
        }
        default :
            return {

            }
    }
}
export default UserReducer;