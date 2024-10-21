import React, {useState} from 'react';
import '../src/App.css';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer.js';
import MainContent from '../src/components/MainContent.js';
import SideNav from '../src/components/SideNav.js';

function App() {
    const [selectedContent, setSelectedContent] = useState('home');

    return (
        <div className="App">
            <Header />
        <div className='main-content'>
            <SideNav setSelectedContent={setSelectedContent} />
            <MainContent selectedContent={selectedContent} />
        </div>
            <Footer />
        </div>
    );
}

export default App;