// Component1.js
import React, { useState } from "react";
import './Component4.css'
const Component4 = () => {

    const [isDeleteButtonVisible, setDeleteButtonVisible] = useState(false);

    const toggleDeleteButtonVisibility = () => {
        setDeleteButtonVisible(!isDeleteButtonVisible);
    };

    return (
        <>
            <section className="component4">
                <div className="top-section">
                    <span>
                        <span>7d</span>
                        <span>14d</span>
                        <span>30d</span>
                    </span>
                    <span>
                        <span className="material-symbols-outlined" onClick={toggleDeleteButtonVisibility}>
                            more_horiz
                        </span>
                        {isDeleteButtonVisible && <span>Delete</span>}
                    </span>
                </div>
                <span className="line"></span>
                <div className="bottom-section">
                    <table>
                        <span className="table-line"></span>
                        <span className="table-line"></span>
                        <span className="table-line"></span>
                        <span className="table-line"></span>
                        <span className="table-line"></span>
                        <thead>
                            <tr>
                                <th>PRODUCT</th>
                                <th>Q1-23</th>
                                <th>Q2-23</th>
                                <th>Q3-23</th>
                                <th>Q4-23</th>
                                <th>Q1-24</th>

                            </tr>
                            <tr>
                                <td>Reusable</td>
                                <td>10%</td>
                                <td>4%</td>
                                <td>4%</td>
                                <td>4%</td>
                                <td>4%</td>
                            </tr>
                            <tr>
                                <td>Natural Resource</td>
                                <td>2%</td>
                                <td>11%</td>
                                <td>11%</td>
                                <td>11%</td>
                                <td>11%</td>
                            </tr>
                            <tr>
                                <td>Compost Compound</td>
                                <td>7%</td>
                                <td>5%</td>
                                <td>5%</td>
                                <td>5%</td>
                                <td>5%</td>

                            </tr>
                            <tr>
                                <td>Reusable Materials</td>
                                <td>3%</td>
                                <td>4%</td>
                                <td>4%</td>
                                <td>4%</td>
                                <td>4%</td>
                            </tr>
                            <tr>
                                <td>Reusable</td>
                                <td>10%</td>
                                <td>4%</td>
                                <td>4%</td>
                                <td>4%</td>
                                <td>4%</td>
                            </tr>
                            <tr>
                                <td>Natural Resource</td>
                                <td>2%</td>
                                <td>11%</td>
                                <td>11%</td>
                                <td>11%</td>
                                <td>11%</td>
                            </tr>
                            <tr>
                                <td>Compost Compound</td>
                                <td>7%</td>
                                <td>5%</td>
                                <td>5%</td>
                                <td>5%</td>
                                <td>5%</td>

                            </tr>
                            <tr>
                                <td>Reusable Materials</td>
                                <td>3%</td>
                                <td>4%</td>
                                <td>4%</td>
                                <td>4%</td>
                                <td>4%</td>
                            </tr>
                            <tr>
                                <td>Reusable</td>
                                <td>10%</td>
                                <td>4%</td>
                                <td>4%</td>
                                <td>4%</td>
                                <td>4%</td>
                            </tr>
                            <tr>
                                <td>Natural Resource</td>
                                <td>2%</td>
                                <td>11%</td>
                                <td>11%</td>
                                <td>11%</td>
                                <td>11%</td>
                            </tr>
                            <tr>
                                <td>Compost Compound</td>
                                <td>7%</td>
                                <td>5%</td>
                                <td>5%</td>
                                <td>5%</td>
                                <td>5%</td>

                            </tr>
                            <tr>
                                <td>Reusable Materials</td>
                                <td>3%</td>
                                <td>4%</td>
                                <td>4%</td>
                                <td>4%</td>
                                <td>4%</td>
                            </tr>
                            <tr>
                                <td>Natural Resource</td>
                                <td>2%</td>
                                <td>11%</td>
                                <td>11%</td>
                                <td>11%</td>
                                <td>11%</td>
                            </tr>
                            <tr>
                                <td>Compost Compound</td>
                                <td>7%</td>
                                <td>5%</td>
                                <td>5%</td>
                                <td>5%</td>
                                <td>5%</td>

                            </tr>
                            
                            <tr>
                                <td>Total</td>
                                <td>8%</td>
                                <td>12%</td>
                                <td>7%</td>
                                <td>20%</td>
                                <td>3%</td>
                            </tr>
                        </thead>
                    </table>
                </div>
            </section>
        </>
    );
};

export default Component4;
