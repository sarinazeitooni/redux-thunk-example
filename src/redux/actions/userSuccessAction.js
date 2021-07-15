import actionTypes from "../actionTypes/actionTypes";
const UserSuccessAction = (users)=>{
    return{
        type : actionTypes.USER_SUCCESS,
        payload : users
    }
}
export default UserSuccessAction;