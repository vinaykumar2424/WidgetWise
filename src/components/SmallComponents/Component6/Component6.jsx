// Component1.js
import React, { useState } from "react";
import ReactApexChart from 'react-apexcharts';
import './Component6.css'
const Component6 = ({ CompData, onDelete }) => {
    const [isDeleteButtonVisible, setDeleteButtonVisible] = useState(false);

    // used ReactApexChart to create donut pie chart
    const [chartData, setChartData] = useState({
        series: [44, 55, 15, 41],
        options: {
            chart: {
                type: 'donut',
            },
            plotOptions: {
                pie: {
                    donut: {
                        size: '70%'
                    },
                    dataLabels: false
                }
            },
            legend: {
                show: false // Hide legend
            },
            tooltip: {
                enabled: false // Hide tooltip
            }
        }
    });
    if (!CompData) {
        return null; // Or render a placeholder/loading state
    }

    const toggleDeleteButtonVisibility = () => {
        setDeleteButtonVisible(!isDeleteButtonVisible);
    };

    return (
        <>
            {CompData && <section className="component6" style={{ backgroundColor: CompData.body }}>
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
                    <div id="chart">
                        <ReactApexChart options={chartData.options} series={chartData.series} type="donut" />
                    </div>
                    <span style={{ color: CompData.verLabal }}>89,000<span>Orders</span></span>
                </div>
            </section>}
        </>
    );
};

export default Component6;
