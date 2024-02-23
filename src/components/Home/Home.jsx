import { useState } from 'react';
import Model from '../Model/Model';
import Navigation from '../Navigation/Navigation';
import SidebarNavigation from '../SidebarNavigation/SidebarNavigation';
import './Home.css'
import Widgets from '../WidgetsSection/Widgets';

const Home = () => {

    //To open the molde so we can add components
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const [newComponents, setNewComponents] = useState([]);

    // Function to add a new component to the list (getting the componentNumber vriavle from-
    // Model component which is getting data from Map component while click on Save button in Model)
    const addNewComponent = (componentNumber) => {
        setNewComponents([...newComponents, componentNumber]);
    };
    // console.log(newComponents)

    return (
        <>
            <section className={isModalOpen ? 'home bg-color' : 'home'}>
                <SidebarNavigation />
                <div className='widgets-box'>
                    <Navigation onButtonClick={openModal} />
                    {isModalOpen && <div className='overlay-model-box'>
                        <Model onClose={closeModal} addNewComponent={addNewComponent} />
                    </div>}
                    <div className='widgets'>
                        <Widgets newComponents={newComponents.length > 0 && newComponents} />
                    </div>
                </div>
            </section>
        </>
    )
}
export default Home;