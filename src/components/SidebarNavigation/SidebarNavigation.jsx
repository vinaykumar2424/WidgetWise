import './SidebarNavigation.css'
import logo from '../images/logo.jpeg'
import vital from '../images/vital.png'
import message from '../images/message.png'
import stack from '../images/stack.png'
import diagram from '../images/diagram.png'
import vinay from '../images/VK1.png'
import { useState } from 'react'


const SidebarNavigation = () => {

    const [activeIndex, setActiveIndex] = useState(0); // Track the index of the active span


    // function to handle click on a span and update the active index
    const handleSpanClick = (index) => {
        setActiveIndex(index);
    };


    return (
        <>
            <nav id='side-navbar'>
                <div className="top-section">
                    <span>
                        <img src={logo} alt="logo-icon" />
                    </span>
                    <span className={activeIndex === 0 ? 'active' : ''} onClick={() => handleSpanClick(0)}>
                        <img src={vital} alt="vital-icon" />
                    </span>
                    <span className={activeIndex === 1 ? 'active' : ''} onClick={() => handleSpanClick(1)}>
                        <img src={message} alt="message-icon" />
                    </span>
                    <span className={activeIndex === 2 ? 'active' : ''} onClick={() => handleSpanClick(2)}>
                        <img src={stack} alt="stack-icon" />
                    </span>
                    <span className={activeIndex === 3 ? 'active' : ''} onClick={() => handleSpanClick(3)}>
                        <img src={diagram} alt="diagram-icon" />
                    </span>
                </div>
                <img src={vinay} alt="logo-icon" />
            </nav>
        </>
    )
}
export default SidebarNavigation;