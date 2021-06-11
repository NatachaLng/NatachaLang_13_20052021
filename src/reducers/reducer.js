import { IS_LOGGED_OUT } from "../constants/LogOut";
import { LOGIN, LOGOUT, EDIT_PROFILE} from "../constants/UserConstant";

const user = (state = IS_LOGGED_OUT, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                email: action.email,
                password: action.password,
                logStatus: true,
                token: action.token,
            };
        case LOGOUT:
            return IS_LOGGED_OUT;
        case EDIT_PROFILE:
            return {
                ...state,
                firstName: action.firstName ? action.firstName : state.firstName,
                lastName: action.firstName ? action.lastName : state.lastName,
            };
        default:
            return state;
    }
};

export default user;