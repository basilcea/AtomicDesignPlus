import {createContext} from 'react';
import Axios from 'axios'

 const LoadingContext = createContext({
    loading:false,
    success:false,
})
export default LoadingContext