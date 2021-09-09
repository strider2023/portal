import { React } from 'react';
import '../styles/home.scss';
import WebsiteHeader from './components/WebsiteHeader';
import Header from './components/Header';
import HowItWorks from './components/HowItWorks';
import Footer from './components/Footer';

function Home() {

    return (
        <>
            <Header />
            <WebsiteHeader />
            <HowItWorks />
            <Footer />
        </>
    );
}

export default Home
