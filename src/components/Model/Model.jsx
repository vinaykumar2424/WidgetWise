import './Model.css';
import boxes from '../images/fourBoxes.png';
import { useEffect, useRef, useState } from 'react';
import Map from '../SmallComponents/Map';
import barChart from '../images/barColumn.png'
import lineChart from '../images/trending.png'
import pieChart from '../images/pieChart.png'
import history from '../images/history.png'
import jsonData from "../../JsonData.json";

const Model = ({ onClose, addNewComponent }) => {
    const [scale, setScale] = useState(1);
    const [position, setPosition] = useState({ x: -224, y: -300 });
    const [isDragging, setIsDragging] = useState(false);
    const [isOutside, setIsOutside] = useState(false);
    const [activeOptionIndex, setActiveOptionIndex] = useState(0);
    const [activeColorIndex, setActiveColorIndex] = useState(1);
    const [activeSubOptionIndex, setActiveSubOptionIndex] = useState(0);
    const [selectedDataComponent, setSelectedDataComponent] = useState(1);
    const [newDataComponent, setNewDataComponent] = useState(null);
    const [inputValue, setInputValue] = useState('');


    const whiteBoxData = jsonData["white-box-data"];
    const blackBoxData = jsonData["black-box-data"];
    const cruxBoxData = jsonData["crux-box-data"];

    const [selectColor, setSelectColor] = useState(whiteBoxData);

    // Function to handle click on a option(not sub-option) and update the active index
    const handleOptionClick = (index) => {
        setActiveOptionIndex(index);
        switch (index) {
            case 0:
                setSelectedDataComponent(1); // Component5 for 'data'
                setActiveSubOptionIndex(0);
                break;
            case 1:
                setSelectedDataComponent(7); // Component5 for 'chart'
                setActiveSubOptionIndex(2);
                break;
            case 2:
                setSelectedDataComponent(5); // Component5 for 'summary'
                setActiveSubOptionIndex(5);
                break;
            default:
                setSelectedDataComponent(1);
                setActiveSubOptionIndex(0);
        }
    };
    const handleColorClick = (index) => {
        setActiveColorIndex(index);
        switch (index) {
            case 0:
                setSelectColor(blackBoxData); // black
                break;
            case 1:
                setSelectColor(whiteBoxData); // white
                break;
            case 2:
                setSelectColor(cruxBoxData); // crux
                break;
            default:
                setSelectColor(whiteBoxData);
        }
    };
    const handleSubOptionClick = (index, e) => {
        e.stopPropagation();
        setActiveSubOptionIndex(index);

        switch (index) {
            case 0:
                setSelectedDataComponent(1); // Component1 for 'Past'
                setActiveOptionIndex(0);   // Component5 for 'data'
                break;
            case 1:
                setSelectedDataComponent(2); // Component2 for 'Today'
                setActiveOptionIndex(0); // Component5 for 'data'
                break;
            case 2:
                setSelectedDataComponent(7); // Component7 for 'Bar Chart'
                setActiveOptionIndex(1);  // Component5 for 'chart'
                break;
            case 3:
                setSelectedDataComponent(8); // Component8 for 'Line Chart'
                setActiveOptionIndex(1);  // Component5 for 'chart'
                break;
            case 4:
                setSelectedDataComponent(6); // Component6 for 'Pie Chart'
                setActiveOptionIndex(1);  // Component5 for 'chart'
                break;
            default:
                setSelectedDataComponent(1);
        }
    };

    //for getting the value from input box and set tthat into the state
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    // zoom in and zoom out functionality
    const handleZoomIn = () => {
        const newScale = scale + 0.05;
        const scaleFactor = newScale / scale;
        const newPosition = {
            x: position.x - ((position.x - window.innerWidth / 2) * scaleFactor - (position.x - window.innerWidth / 2)),
            y: position.y - ((position.y - window.innerHeight / 2) * scaleFactor - (position.y - window.innerHeight / 2))
        };
        setScale(newScale);
        setPosition(newPosition);
    };

    const handleZoomOut = () => {
        const newScale = scale - 0.05;
        const scaleFactor = newScale / scale;
        const newPosition = {
            x: position.x - ((position.x - window.innerWidth / 2) * scaleFactor - (position.x - window.innerWidth / 2)),
            y: position.y - ((position.y - window.innerHeight / 2) * scaleFactor - (position.y - window.innerHeight / 2))
        };
        setScale(newScale);
        setPosition(newPosition);
    };

    const handleWheel = (e) => {
        e.preventDefault();
        const newScale = scale + e.deltaY * -0.01;
        setScale(Math.min(Math.max(0.5, newScale), 5));
    };
    const handleMouseMove = (e) => {
        if (isDragging) {
            setPosition({
                x: position.x + e.movementX,
                y: position.y + e.movementY
            });
        }
    };
    const handleMouseEnter = () => {
        setIsOutside(false);
    };

    const handleMouseLeave = () => {
        setIsOutside(true);
    };


    // Calculate the zoom percentage dynamically
    const zoomPercentage = Math.round(scale * 100);


    // console.log(newDataComponent)
    const [saved, setSaved] = useState(false)
    const handleSave = () => {
        addNewComponent(newDataComponent);
        setSaved(true)
    };
    useEffect(() => {
        setTimeout(() => {
            setSaved(false)
        }, 1500)
    }, [saved])

    return (
        <>
            <section className='top-model-section'>
                <span className="close-btn material-symbols-outlined" onClick={onClose}>
                    close
                </span>
                <span className='top-left'>
                    <span>
                        <img src={boxes} alt='dashboard-icon' />
                    </span>
                    <span>
                        <span>Create Widget</span>
                        <text>Manage the glossary of terms of your Database.</text>
                    </span>
                </span>
                <span className='top-right'>
                    <input type='text' placeholder='Reusability Scores' value={inputValue} onChange={handleInputChange} />
                    <span className="material-symbols-outlined">close</span>
                </span>
            </section>
            <section className='botton-model-section'>
                <div className="model-content"
                    onMouseMove={handleMouseMove}
                    onWheel={handleWheel}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <Map inputValue={inputValue} scale={scale} position={position} isOutside={isOutside} selectedComponent={selectedDataComponent} CompData={selectColor} setNewDataComponent={setNewDataComponent} />
                    <div className="zoom-controls">
                        <span>{zoomPercentage}%</span>
                        <button onClick={handleZoomIn}>
                            <span className="material-symbols-outlined">
                                zoom_in
                            </span>
                        </button>
                        <span></span>
                        <button onClick={handleZoomOut}>
                            <span className="material-symbols-outlined">
                                zoom_out
                            </span>
                        </button>
                    </div>
                    <span className='color-choose-option'>
                        <span className={activeColorIndex === 0 ? 'activeColor' : ''} onClick={() => handleColorClick(0)}></span>
                        <span className={activeColorIndex === 1 ? 'activeColor' : ''} onClick={() => handleColorClick(1)}></span>
                        <span className={activeColorIndex === 2 ? 'activeColor' : ''} onClick={() => handleColorClick(2)}></span>
                    </span>
                </div>
                <section className='options-section'>
                    <div className='options-top'>
                        <span>Component</span>
                        <div className={activeOptionIndex === 0 ? 'option-data activeBorder' : 'option-data'} onClick={() => handleOptionClick(0)}>
                            <span>Data</span>
                            <span>Random Description</span>
                            <span className='option'>
                                <span className={activeSubOptionIndex === 0 ? 'activeBackground' : ''} onClick={(e) => handleSubOptionClick(0, e)}>
                                    <span>Past</span>
                                </span>
                                <span className={activeSubOptionIndex === 1 ? 'activeBackground' : ''} onClick={(e) => handleSubOptionClick(1, e)}>
                                    <span>Today</span>
                                </span>
                            </span>
                        </div>
                        <div className={activeOptionIndex === 1 ? 'option-graph activeBorder' : 'option-graph'} onClick={() => handleOptionClick(1)}>
                            <span>Graph</span>
                            <span>Random Description</span>
                            <span className='option'>
                                <span className={activeSubOptionIndex === 2 ? 'activeBackground' : ''} onClick={(e) => handleSubOptionClick(2, e)}>
                                    <img src={barChart} alt='' />
                                </span>
                                <span className={activeSubOptionIndex === 3 ? 'activeBackground' : ''} onClick={(e) => handleSubOptionClick(3, e)}>
                                    <img src={lineChart} alt='' />
                                </span>
                                <span className={activeSubOptionIndex === 4 ? 'activeBackground' : ''} onClick={(e) => handleSubOptionClick(4, e)}>
                                    <img src={pieChart} alt='' />
                                </span>
                            </span>
                        </div>
                        <div className={activeOptionIndex === 2 ? 'option-summary activeBorder' : 'option-summary'} onClick={() => handleOptionClick(2)}>
                            <span>Summary</span>
                            <span>Random Description</span>
                        </div>
                    </div>
                    <div className='options-bottom'>
                        <span>
                            <img src={history} alt='' />
                        </span>
                        <button onClick={onClose}>Cancel</button>
                        <button onClick={handleSave}>{saved ? <span>&#10004;</span> : 'Save'}</button>
                    </div>
                </section>
            </section >
        </>
    );
}

export default Model;
