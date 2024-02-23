import './Component3.css'
import React from 'react';


const Component3 = () => {
    

    return (
        <>
            <section className="component3">
                <section className="component3-left">
                    <div className="top-section">
                        <span>
                            <span>7d</span>
                            <span>14d</span>
                            <span>30d</span>
                        </span>
                        <span>
                            <span className="material-symbols-outlined">
                                more_horiz
                            </span>
                        </span>
                    </div>
                    <span className="line"></span>
                    <div className="bottom-section">
                        <span>
                            <span>0</span>
                            <span>10k</span>
                            <span>20k</span>
                            <span>30k</span>
                            <span>40k</span>
                        </span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
                </section>
                <section className="component3-middle">
                    <div className="top-section">
                        <span>
                            <span>7d</span>
                            <span>14d</span>
                            <span>30d</span>
                        </span>
                        <span>
                            <span className="material-symbols-outlined">
                                more_horiz
                            </span>
                        </span>
                    </div>
                    <span className="line"></span>
                    <div className="bottom-section">
                        <table>
                            <span className="table-line"></span>
                            <span className="table-line"></span>
                            <thead>
                                <tr>
                                    <th>PRODUCT</th>
                                    <th>Q1-23</th>
                                    <th>Q2-23</th>
                                </tr>
                                <tr>
                                    <td>Reusable</td>
                                    <td>10%</td>
                                    <td>4%</td>
                                </tr>
                                <tr>
                                    <td>Natural</td>
                                    <td>2%</td>
                                    <td>11%</td>
                                </tr>
                                <tr>
                                    <td>Compost</td>
                                    <td>7%</td>
                                    <td>5%</td>
                                </tr>
                                <tr>
                                    <td>Reusable..</td>
                                    <td>3%</td>
                                    <td>4%</td>
                                </tr>
                                <tr>
                                    <td>Total</td>
                                    <td>8%</td>
                                    <td>12%</td>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </section>
                <section className='component3-right'>
                    <div className="top-section">
                        <span>
                            <span>Today <span class="material-symbols-outlined">
                                expand_more
                            </span></span>
                        </span>
                        <span>
                            <span className="material-symbols-outlined">
                                more_horiz
                            </span>
                        </span>
                    </div>
                    <span className="line"></span>
                    <div className='bottom-section'>
                        <span>
                            Based on the provided data, the most effective hour of the day to send an email across all stores for all time, with the highest engagement after opening, is at 15:00(3 PM), with a total of <span>5041</span> emails opened. The next best hours are 16:00 (4 PM) and 17:00 (5 PM) with <span>5007</span> and 4785 emails opened respectively. There is a noticeable drop in
                        </span>
                    </div>
                </section>
            </section>
        </>
    );
};

export default Component3;
