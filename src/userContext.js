import { createContext } from 'react';
import store from './data/index';

const context = createContext(store);
// export const useUserContext = () => {
//     return useContext(UserContext);
// };

export default context;

// console.log(UserProvider);