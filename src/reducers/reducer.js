import { IS_LOGGED_OUT } from "../constants/LogOut";
import { LOGIN, LOGOUT, EDIT_PROFILE, IS_EDIT} from "../constants/UserConstant";

const user = (state = IS_LOGGED_OUT, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                email: action.payload.email,
                password: action.payload.password,
                logStatus: true,
                token: action.payload.token,
                rememberUser: action.payload.remember,
            };
        case LOGOUT:
            return IS_LOGGED_OUT;
        case IS_EDIT:
            return {
                isLogin: action.payload.isLogin,
                isEdit: action.payload.isEdit,
                email: action.payload.email,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                token: action.payload.token
            };
        case EDIT_PROFILE:
            return {
                ...state,
                firstName: action.payload.firstName ? action.payload.firstName : state.firstName,
                lastName: action.payload.firstName ? action.payload.lastName : state.lastName,
            };
        default:
            return state;
    }
};

export default user;