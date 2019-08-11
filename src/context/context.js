import {createContext} from 'react';

export const loadingContext = createContext({
    loading:false,
    success:false,
    failure:false,
})
