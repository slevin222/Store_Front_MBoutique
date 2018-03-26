import types from './types';


export function signIn() {
    return async dispatch => {
        try {
            const resp = await axios.get('/auth/verify');

            if (resp.data.isLoggedIn) {
                localStorage.setItem('token', resp.data.token);
                dispatch({ type: types.SIGN_IN })
            }
        } catch (err) {
            console.log('Sign in error:', err.message)
        }
    }
}