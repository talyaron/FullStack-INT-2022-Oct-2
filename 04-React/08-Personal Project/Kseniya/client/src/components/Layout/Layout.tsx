import {FC} from 'react';
import Navbar from '../Navbar/Navbar';

const Layout:FC<any> = ({children}) => {
    return (
        <div>
            <Navbar/>
            <div>{children}</div>
        </div>
    );
};

export default Layout;