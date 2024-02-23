// Component1.js
import React, { useState } from "react";
import './Component7.css'

const Component7 = ({ barLengths = [100, 80, 100, 110, 30, 120], chartHeight = 190, yLabelsCount = 5, CompData, onDelete }) => {
    const [isDeleteButtonVisible, setDeleteButtonVisible] = useState(false);
    
    if (!CompData) {
        return null; // Or render a placeholder/loading state
    }
    const step = 5000;
    // Generate y-labels dynamically of step 5k
    const yLabels = Array.from({ length: yLabelsCount }).map((_, index) => {
        const label = index * step / 1000; // Convert to 'k'
        return (
            <span key={index} style={{ color: CompData.verLabal }}>{label}{index !== 0 && 'k'}</span>
        );
    });


    const toggleDeleteButtonVisibility = () => {
        setDeleteButtonVisible(!isDeleteButtonVisible);
    };

    return (
        <>
            {CompData && <section className="component7" style={{ height: chartHeight, backgroundColor: CompData.body }}>
                <div className="top-section">
                    <span style={{ color: CompData.title }}>
                        <span style={{ color: CompData.bigLine }}>7d</span>
                        <span>14d</span>
                        <span>30d</span>
                    </span>
                    <span style={{ color: CompData.title }}>
                        <span className="material-symbols-outlined" onClick={toggleDeleteButtonVisibility}>
                            more_horiz
                        </span>
                        {isDeleteButtonVisible && <span onClick={onDelete}>Delete</span>}
                    </span>
                </div>
                <span className="line" style={{ backgroundColor: CompData.horiLine }}></span>
                <div className="bottom-section">
                    <span>
                        {yLabels}
                    </span>
                    {barLengths.map((length, index) => (
                        <div key={index} className="bar" style={{ height: `${length}px` }}></div>
                    ))}
                </div>
            </section>}
        </>
    );
};

export default Component7;
