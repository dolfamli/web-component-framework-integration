import React from 'react';

const MainContent = ({ selectedContent }) => {
    return (
        <div className='content'>
            {selectedContent === 'button' && <p>Buttons here</p>}
            {selectedContent === 'alert' && <p>Alerts here</p>}
            {selectedContent === 'dropdown' && <p>Dropdowns here</p>}
            {selectedContent === 'tooltip' && <p>Tooltips here</p>}
        </div>
    );
};

export default MainContent;