import {createContext} from 'react';
import Axios from 'axios'

 export const LoadingContext = createContext({
    loading:false,
    success:false,
})
export const SignUpContext = createContext({
    loading:false,
    signup:false,
    signin:false,
    reset:false,
})
export default LoadingContext
