import './Component5.css'
import React, { useState } from 'react';



const Component5 = ({ CompData, onDelete }) => {
    const [isDeleteButtonVisible, setDeleteButtonVisible] = useState(false);
    
    if (!CompData) {
        return null; // Or render a placeholder/loading state
    }


    const toggleDeleteButtonVisibility = () => {
        setDeleteButtonVisible(!isDeleteButtonVisible);
    };

    return (
        <>
            {CompData && <section className="component5" style={{ backgroundColor: CompData.body }}>
            <div className="top-section">
                    <span style={{ color: CompData.bigLine }}>
                        <span style={{ color: CompData.bigLine }}>Today <span class="material-symbols-outlined">
                            expand_more
                        </span></span>
                    </span>
                    <span style={{ color: CompData.title }}>
                        <span className="material-symbols-outlined" onClick={toggleDeleteButtonVisibility}>
                            more_horiz
                        </span>
                        {isDeleteButtonVisible && <span onClick={onDelete}>Delete</span>}
                    </span>
                </div>
                <span className="line" style={{ backgroundColor: CompData.horiLine }}></span>
                <div className='bottom-section'>
                    <span style={{ color: CompData.resultColor }}>
                        Based on the provided data, the most effective hour of the day to send an email across all stores for all time, with the highest engagement after opening, is at 15:00(3 PM), with a total of <span style={{ color: CompData.resultColor }}>5041</span> emails opened. The next best hours are 16:00 (4 PM) and 17:00 (5 PM) with <span style={{ color: CompData.resultColor }}>5007</span> and 4785 emails opened respectively. There is a noticeable drop in
                    </span>
                </div>
            </section >}
        </>
    );
};

export default Component5;
