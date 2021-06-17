import * as types from "../constants/UserConstant";

export const login = (email, password, token, remember) => ({
    type: types.LOGIN,
    payload: {
        email,
        password,
        token,
        remember: false,
    }
});

export const logout = () => ({
    type: types.LOGOUT,
});

export const isEdit = (isEdit, email, firstName, lastName, token) => ({
    type: types.IS_EDIT,
    payload: {
        isLogin: true,
        isEdit,
        email,
        firstName,
        lastName,
        token
    }
})

export const editProfile = (firstName, lastName) => ({
    type: types.EDIT_PROFILE,
    payload: {
        firstName,
        lastName,
    }
});