import actionTypes from "../actionTypes/actionTypes";
const UserFailureAction = (error)=>{
    return{
        type : actionTypes.USER_FAILURE,
        payload : error
    }
}
export default UserFailureAction;