import UserActionTypes from './user.types';

const INITIAL_STATE = {
	currentUser: null,
	error: null,
	isConnecting: null
};

const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
	case UserActionTypes.SIGN_IN_SUCCESS:
		return {
			...state,
			currentUser: action.payload, 
			error: null
		};
	case UserActionTypes.SIGN_OUT_SUCCESS:
		return {
			...state,
			currentUser: null,
			error: null
		};
	case UserActionTypes.SIGN_UP_FAILURE:
	case UserActionTypes.SIGN_IN_FAILURE:
	case UserActionTypes.SIGN_OUT_FAILURE:
		return {
			...state,
			currentUser: null,
			error: action.payload
		};
	case UserActionTypes.USER_IS_CONNECTING:
		return {
			...state,
			isConnecting: action.payload
		};
	default:
		return state;
	}
};


export default userReducer;