import { useEffect, useState } from 'react';
import './Component8.css';
import ReactApexChart from 'react-apexcharts';

const Component8 = ({ showXLabels = false, showLegend = false, legendNumber, chartHeight = 158, boxHeight = 190 , legendItemPaddingTop, CompData, onDelete }) => {
    const [isDeleteButtonVisible, setDeleteButtonVisible] = useState(false);
    
    if (!CompData) {
        return null; // Or render a placeholder/loading state
    }
    const dataPoints = {
        Diwali: { 'Go': 20000, 'In': 3000, 'Fa': 35000, 'Ti': 20000 },
        BirthdaySpecial25: { 'Go': 10000, 'In': 40000, 'Fa': 3000, 'Ti': 35000 },
        Newuser30: { 'Go': 15000, 'In': 4000, 'Fa': 30000, 'Ti': 4000 },
        Newuser301: { 'Go': 20000, 'In': 30000, 'Fa': 8000, 'Ti': 15000 },
        Newuser302: { 'Go': 10000, 'In': 22000, 'Fa': 28000, 'Ti': 3000 },
    };

    // Prepare series data for ApexCharts
    let seriesData = Object.keys(dataPoints).map(day => ({
        name: day,
        data: Object.values(dataPoints[day])
    }));
    seriesData = seriesData.slice(0, legendNumber);
    
    // X-axis categories
    const categories = Object.keys(dataPoints.Diwali);

    // ApexCharts options
    const options = {
        chart: {
            // height: 244,
            type: 'line',
            toolbar: {
                show: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            categories: showXLabels ? categories : ['', '', '', ''],
            rotateAlways: true, // Rotate the labels even if the space is available
            offsetY: 5,
            rotate:-90, // Adjust vertical offset as needed
            labels: {
                style: {
                    fontSize: '11px',
                    colors: '#939393',
                },
                cssClass: 'x-axis-labels'
            },
            axisBorder: {
                show: false
            }
        },
        yaxis: {
            min: 0,
            max: 40000,
            tickAmount: 4,
            labels: {
                formatter: value => `${value / 1000}k`,
                style: {
                    fontSize: '11px',
                    colors: CompData.verLabal,
                    paddingTop: '6px'
                },
            },
            axisBorder: {
                show: false
            }
        },
        grid: {
            xaxis: {
                lines: {
                    show: true,
                    borderColor: '#363636', // Color of vertical grid lines
                    strokeDashArray: 3
                }
            },
            yaxis: {
                lines: {
                    show: false,
                    borderColor: '#363636', // Color of vertical grid lines
                    strokeDashArray: 3,
                }
            }
        },
        legend: {
            show: false,
            position: 'bottom'
        }
    };

    const legendItemStyle = {
        paddingTop: legendItemPaddingTop // Use the prop value for padding-top
    };



    const toggleDeleteButtonVisibility = () => {
        setDeleteButtonVisible(!isDeleteButtonVisible);
    };

    return (
        <>
            {CompData && <section className="component8" style={{backgroundColor: CompData.body,height:boxHeight }}>
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
                <section className="bottom-section">
                    <ReactApexChart options={options} series={seriesData} type="line" height={chartHeight} />
                </section>
                <span className="line2" style={{ display: showLegend ? 'flex' : 'none', backgroundColor: CompData.horiLine }}></span>
                {showLegend &&
                    <div className="legend-container">
                        {seriesData.map((series, index) => (
                            <div key={index} className="legend-item" style={legendItemStyle}>
                                <span></span>
                                <div>
                                    <span style={{ color: CompData.resultColor }}>{series.name}</span>
                                    <span style={{ color: CompData.verLabal }}>{series.data.reduce((sum, val) => sum + val, 0)}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                }
            </section>}
        </>
    )
}
export default Component8;