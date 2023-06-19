import { FC } from 'react';
import LandingHeader from '../../components/Home/LandingHeader/LandingHeader';
import Navbar from '../../components/Navbar/Navbar';
import LandingSuggestions from '../../components/Home/LandingSuggestions/LandingSuggestions';

const Home:FC = () => {
    return (
        <div>
            <LandingHeader/>
            <LandingSuggestions/>
        </div>
    );
};

export default Home;