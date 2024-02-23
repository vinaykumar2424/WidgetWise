import React, { useState, useEffect } from "react";
import Component1 from "./Component1/Component1";
import Component2 from "./Component2/Component2";
import './Map.css';
import Component8 from "./Component8/Component8";
import Component7 from "./Component7/Component7";
import Component6 from "./Component6/Component6";
import jsonData from "../../JsonData.json";
import Component5 from "./Component5/Component5";

const Map = ({inputValue, scale, position, isOutside, selectedComponent, CompData, setNewDataComponent }) => {
    // State for group position
    const [currentPosition, setCurrentPosition] = useState(position);
    const [currentScale, setCurrentScale] = useState(scale); // State for zoom scale
    const [doubleClick, setDoubleClick] = useState(false); // State for zoom scale
    // console.log(CompData.key)


    useEffect(() => {
        setCurrentScale(scale);
        setCurrentPosition(position);
    }, [scale, position]);


    const handleDoubleClick = () => {
        setDoubleClick(true)
        console.log("doubled clciked")
    }
    const handleClick = () => {
        setDoubleClick(false)
        console.log("single clciked")
    }
    useEffect(() => {
        if (isOutside) {
            setDoubleClick(false)
        }
    }, [isOutside])


    // Function to handle dragging
    const handleDrag = (event) => {
        if (doubleClick) {
            setCurrentPosition({
                x: currentPosition.x + event.movementX,
                y: currentPosition.y + event.movementY
            });
        }
    };

    // Function to handle zooming
    const handleZoom = (event) => {
        const delta = event.deltaY;
        const newScale = currentScale + delta * 0.01; // Adjust zoom sensitivity as needed

        // Update the scale state with the new scale
        setCurrentScale(newScale);
    };

    useEffect(() => {
        const preventDefault = (event) => {
            event.preventDefault();
        };

        const zoomContainer = document.querySelector(".group");
        zoomContainer.addEventListener("wheel", preventDefault, { passive: false });

        return () => {
            zoomContainer.removeEventListener("wheel", preventDefault);
        };
    }, []);


   // To render the component in the map accordingly

    let componentToRender;

    switch (selectedComponent) {
        case 1:
            componentToRender = <Component1 CompData={CompData} />;
            break;
        case 2:
            componentToRender = <Component2 CompData={CompData} />;
            break;
        case 5:
            componentToRender = <Component5 CompData={CompData} />;
            break;
        case 6:
            componentToRender = <Component6 CompData={CompData} />;
            break;
        case 7:
            componentToRender = <Component7 chartHeight={190} barLengths={[100, 60, 80, 110, 50, 90]} yLabelsCount={5} CompData={CompData} />;
            break;
        case 8:
            componentToRender = <Component8 showXLabels={false} showLegend={false} legendNumber={5} chartHeight={155} CompData={CompData} />;
            break;
        default:
            componentToRender = null;
    }
    
    // sending the reference to Model not data to enhance the rendering speed
    
    useEffect(() => {
        console.log({ index: selectedComponent, dataKey: CompData?.key })
        setNewDataComponent({ index: selectedComponent, dataKey: CompData?.key });
    }, [selectedComponent, CompData?.key])


    return (
        <>
            <div
                className="group"
                style={{
                    transform: `translate(${currentPosition.x}px, ${currentPosition.y}px) scale(${currentScale})`,
                    transformOrigin: "center"
                }}
                onWheel={handleZoom}
                onMouseMove={handleDrag}
                onDoubleClick={handleDoubleClick}
                onClick={handleClick}
            >
                <spection className='structure-grid'>
                    <span className="line-one">
                        <span></span>
                        <span>
                            <span>
                                <span></span>
                                <span></span>
                            </span>
                            <span className="space-five">{selectedComponent === 5 && componentToRender}<span>{selectedComponent === 5 && inputValue}</span></span>
                        </span>
                        <span></span>
                    </span>
                    <span className="line-two">
                        <span>
                            <span></span>
                            <span className="space-other">{selectedComponent !== 5 && componentToRender}<span>{selectedComponent !== 5 && inputValue}</span></span>
                            <span></span>
                            <span></span>
                        </span>
                        <span></span>
                        <span></span>
                    </span>
                </spection>
            </div>
        </>
    );
};

export default Map;
