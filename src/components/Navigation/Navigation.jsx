import './Navigation.css'
import home from '../images/home.png'
import gear from '../images/gear.png'

const Navigation = ({ onButtonClick }) => {

    // onButtonClick will update the state to true and false while click on + add widgets

    return (
        <>
            <nav id="navigation-bar">
                <span className='left-side'>
                    <span>
                        <img src={home} alt="home-icon" />
                    </span>
                    <span>
                        <text>Overview</text>
                        <span className="material-symbols-outlined">close</span>
                    </span>
                    <span>
                        <text>Customers</text>
                        <span className="material-symbols-outlined">close</span>
                    </span>
                    <span>
                        <text>Products</text>
                        <span className="material-symbols-outlined">close</span>
                    </span>
                    <span>
                        <text>Settings</text>
                        <span className="material-symbols-outlined">close</span>
                    </span>
                    <span>
                        <span className="material-symbols-outlined">add</span>
                    </span>
                </span>
                <span className='right-side'>
                    <span onClick={onButtonClick}>
                        <span className="material-symbols-outlined">add</span>
                        <text>Add Widgets</text>
                    </span>
                    <span>
                        <img src={gear} alt="settings-icon" />
                    </span>
                </span>
            </nav>
        </>
    )
}
export default Navigation;