import {userActionTypes} from './user.type'
const INITIAL_STATE={
    currentUser:null
}

const userReducer=(currentState=INITIAL_STATE,action)=>{
    switch (action.type) {
        case userActionTypes.SET_CURRENT_USER:
            return{
                ...currentState,
                currentUser: action.payload
        }
        default:
            return currentState;

    }

}



export default userReducer;