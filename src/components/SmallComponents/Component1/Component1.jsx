// Component1.js
import React, { useState } from "react";
import './Component1.css'
const Component1 = ({ CompData, onDelete }) => {
    const [isDeleteButtonVisible, setDeleteButtonVisible] = useState(false);
    
    if (!CompData) {
        return null; // Or render a placeholder/loading state
    }
    
    //pseudo selector can't be handle directly to change their property
    const lineStyle = `
    .line::before {
        background-color: ${CompData.bigLine} !important;
    }
    `;
    
    
    const toggleDeleteButtonVisibility = () => {
        setDeleteButtonVisible(!isDeleteButtonVisible);
    };

    return (
        <>
            {CompData && <section className="component1" style={{ backgroundColor: CompData.body }}>
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
                <style>{lineStyle}</style>
                <span className="line" style={{ backgroundColor: CompData.horiLine }}>
                </span>
                <div className="bottom-section">
                    <table>
                        <span className="table-line" style={{ backgroundColor: CompData.verLine }}></span>
                        <span className="table-line" style={{ backgroundColor: CompData.verLine }}></span>
                        <thead>
                            <tr>
                                <th style={{ color: CompData.bigLine }}>PRODUCT</th>
                                <th style={{ color: CompData.horiLabel }}>Q1-23</th>
                                <th style={{ color: CompData.horiLabel }}>Q2-23</th>
                            </tr>
                            <tr>
                                <td style={{ color: CompData.verLabal }}>Reusable</td>
                                <td style={{ color: CompData.verLabal }}>10%</td>
                                <td style={{ color: CompData.verLabal }}>4%</td>
                            </tr>
                            <tr>
                                <td style={{ color: CompData.verLabal }}>Natural</td>
                                <td style={{ color: CompData.verLabal }}>2%</td>
                                <td style={{ color: CompData.verLabal }}>11%</td>
                            </tr>
                            <tr>
                                <td style={{ color: CompData.verLabal }}>Compost</td>
                                <td style={{ color: CompData.verLabal }}>7%</td>
                                <td style={{ color: CompData.verLabal }}>5%</td>
                            </tr>
                            <tr>
                                <td style={{ color: CompData.verLabal }}>Reusable..</td>
                                <td style={{ color: CompData.verLabal }}>3%</td>
                                <td style={{ color: CompData.verLabal }}>4%</td>
                            </tr>
                            <tr>
                                <td style={{ color: CompData.resultColor }}>Total</td>
                                <td style={{ color: CompData.resultColor }}>8%</td>
                                <td style={{ color: CompData.resultColor }}>12%</td>
                            </tr>
                        </thead>
                    </table>
                </div>
            </section>}
        </>
    );
};

export default Component1;
