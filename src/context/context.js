import {createContext} from 'react';
import Axios from 'axios'

export const LoadingContext = createContext({
    loading:true,
    success:false,
    failure:false,
    loadPage:() =>{}
})
