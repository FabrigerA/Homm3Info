import Header from './Header.jsx'
import SideBar from './SideBar.jsx'
import Body from './Body.jsx'
import BackgroundImage from './assets/heroes-background.jpg'
import './styles/WebContainer.css'
import './styles/Body.css'
import './styles/index.css'
import './styles/SideBar.css'
import './styles/Header.css'


function WebContainer(){

    return(

        <>
        <div class="web-container">
            
            
            <SideBar></SideBar>


        </div>
        </>
    );

}

export default WebContainer