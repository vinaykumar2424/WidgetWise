import { useEffect, useRef, useState } from "react";
import Component1 from "../SmallComponents/Component1/Component1";
import Component2 from "../SmallComponents/Component2/Component2";
import Component3 from "../SmallComponents/Component3/Component3";
import Component4 from "../SmallComponents/Component4/Component4";
import Component5 from "../SmallComponents/Component5/Component5";
import Component6 from "../SmallComponents/Component6/Component6";
import Component7 from "../SmallComponents/Component7/Component7";
import Component8 from "../SmallComponents/Component8/Component8";
import './Widgets.css'
import Packery from "packery";
import Draggabilly from "draggabilly";
import jsonData from "../../JsonData.json";
const Widgets = ({ newComponents }) => {
    console.log(newComponents)

    const whiteBoxData = jsonData["white-box-data"];
    const blackBoxData = jsonData["black-box-data"];
    const cruxBoxData = jsonData["crux-box-data"];


    const [componentPositions, setComponentPositions] = useState({});
    // const [ componentToDelete, setComponentToDelete] = useState(null);
    //direvtly providing some props to defalut components not from .json
    //can also them into json to get them.

    // Define props for default components here...
    const [componentProps, setComponentProps] = useState([
        { CompData: whiteBoxData, },
        { CompData: cruxBoxData, }, {}, {},
        { CompData: whiteBoxData, },
        { showXLabels: true, showLegend: true, legendNumber: 5, chartHeight: 255, boxHeight: 607, CompData: blackBoxData, },
        { CompData: whiteBoxData, },
        { showXLabels: true, showLegend: true, legendNumber: 3, chartHeight: 200, boxHeight: 407, legendItemPaddingTop: "11px", CompData: whiteBoxData, },
        { CompData: blackBoxData, },
        { chartHeight: 407, barLengths: [240, 120, 300, 150, 250, 100], yLabelsCount: 9, CompData: whiteBoxData, },
        { showXLabels: false, showLegend: false, chartHeight: 143, CompData: whiteBoxData, },
        { CompData: blackBoxData, },
        { CompData: cruxBoxData, },
    ]);

    const [componentMap, setComponentMap] = useState({
        0: Component1,
        1: Component2,
        2: Component3,
        3: Component4,
        4: Component5,
        5: Component8,
        6: Component6,
        7: Component8,
        8: Component1,
        9: Component7,
        10: Component8,
        11: Component1,
        12: Component2,
    });
    // function to add component into the queue
    const addNewComponent = (newComponentIndex, newDataKey) => {
        const newIndex = Object.keys(componentMap).length + 1;
        // Dynamically get the component based on the index
        const NewComponent = componentIndexToComponent(newComponentIndex);
        setComponentMap(prevMap => ({
            ...prevMap,
            [newIndex]: NewComponent,
        }));

        const key = newDataKey;
        const data = (key) => {
            switch (key) {
                case "white":
                    return whiteBoxData;
                case "black":
                    return blackBoxData;
                case "crux":
                    return cruxBoxData;
                default:
                    return {};
            }
        };
        const newData = data(key);
        // console.log(newData)
        //updating the new component data 
        setComponentProps(prevProps => [...prevProps, { CompData: newData }]);
    };

    //getting component according to reference data
    const componentIndexToComponent = (index) => {
        switch (index) {
            case 1:
                return Component1;
            case 2:
                return Component2;
            case 5:
                return Component5;
            case 6:
                return Component6;
            case 7:
                return Component7;
            case 8:
                return Component8;
            default:
                return null;
        }
    };
    useEffect(() => {
        if (newComponents && newComponents.length > 0) {
            const lastIndex = newComponents.length - 1;
            addNewComponent(newComponents[lastIndex].index, newComponents[lastIndex].dataKey);
        }
    }, [newComponents?.length]);

    //  functionality for autolayout and dragging funtionality using "pockery package"
    const gridRef = useRef(null);
    const packeryRef = useRef(null);

    useEffect(() => {
        // Function to initialize Packery
        const initPackery = () => {
            packeryRef.current = new Packery(gridRef.current, {
                itemSelector: ".widget",
                gutter: 10, // Adjust gutter size as needed
            });

            packeryRef.current.getItemElements().forEach(itemElem => {
                const draggie = new Draggabilly(itemElem);
                packeryRef.current.bindDraggabillyEvents(draggie);
            });

            packeryRef.current.on("dragItemPositioned", () => {
                const newPositions = {};
                packeryRef.current.getItemElements().forEach((el, index) => {
                    const componentId = el.getAttribute("data-id");
                    newPositions[componentId] = index;
                });
                setComponentPositions(newPositions);
            });
        };

        // Initialize Packery on mount
        initPackery();

        // Destroy Packery on unmount
        return () => {
            packeryRef.current.destroy();
        };
    }, [componentMap]); // Include componentMap in dependency array to trigger re-render when components change

    // Add new component to Packery layout
    useEffect(() => {
        if (gridRef.current && newComponents) {
            const newComponentId = Object.keys(componentMap).length + 1;
            const newComponentElem = gridRef.current.querySelector(`[data-id="${newComponentId}"]`);
            if (newComponentElem) {
                const draggie = new Draggabilly(newComponentElem);
                packeryRef.current.bindDraggabillyEvents(draggie);
                packeryRef.current.appended(newComponentElem);
            }
        }
    }, [newComponents]);
    const handleDrop = (draggedComponentId, targetComponentId) => {
        const newPosition = componentPositions[draggedComponentId];
        const oldPosition = componentPositions[targetComponentId];
        setComponentPositions(prevPositions => ({
            ...prevPositions,
            [draggedComponentId]: oldPosition,
            [targetComponentId]: newPosition,
        }));
    };

    // Function to delete a component
    const deleteComponent = (indexToDelete) => {
        console.log(indexToDelete)
        setComponentProps(prevProps => prevProps.filter((_, index) => index !== indexToDelete));

        // Remove the component from the componentMap and update the indices of subsequent components
        setComponentMap(prevMap => {
            const updatedMap = {};
            Object.keys(prevMap).forEach(key => {
                const index = parseInt(key);
                if (index < indexToDelete) {
                    updatedMap[index] = prevMap[key];
                } else if (index > indexToDelete) {
                    updatedMap[index - 1] = prevMap[key];
                }
            });
            // Remove the component at the specified index
            delete updatedMap[Object.keys(prevMap).length - 1];
            return updatedMap;
        });
    };


    return (
        <>
            <section ref={gridRef} className="all-widgets">
                {Object.keys(componentMap).map((number, index) => {
                    const Component = componentMap[number];
                    const componentStyle = {
                        position: 'absolute',
                        left: '0',
                        top: `${index * 100}px`,
                        // add other styles as needed
                    };
                    return (
                        <div
                            key={index}
                            className="widget"
                            style={componentStyle}
                            data-id={number}
                            onDrop={() => handleDrop(number, 7)} // example : Dropping onto Component7
                        >
                            <Component {...componentProps[index]} onDelete={() => deleteComponent(index)} />
                        </div>
                    );
                })}
            </section>
        </>
    )
}

export default Widgets;