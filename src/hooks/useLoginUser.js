import { useRecoilState } from 'recoil'
import { 
    loginState,
    signInFormState,
    signUpFormState,
    isAuthenticatedState
} from '@state/user/atoms/userState'

import { INITIAL_LOGIN_USER, ACCESS_TOKEN_KEYS } from '@utils/constant';

const useLoginUser = () =>{
    const [loginUser, setLoginUser] = useRecoilState(loginState);
    const [isAuthenticated, setIsAuthenticated] = useRecoilState(isAuthenticatedState);

    const setAccessToken = (token) => {
        localStorage.setItem(ACCESS_TOKEN_KEYS, token);
    }

    return{
        setAccessToken,
    }
}
export default useLoginUser;